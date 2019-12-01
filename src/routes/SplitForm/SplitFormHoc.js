import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input, Form } from "antd";

const SplitFormHoc = (WrappedComponent) => {
  class SplitForm extends PureComponent {

    constructor(props) {
      super(props);
      // 设置引用关系
      props.getFormFunction(this, props.name);
    }

    // 获取表单的值
    getFieldsValue = (values) => {
      const { form : { 
        getFieldsValue
      } } = this.props;
      const obj = getFieldsValue(values);
      // console.log('获取表单的值', obj);
      return obj;
    }

    // 设置表单的值
    setFieldsValue = (values = {}) => {
      const { form : { 
        setFieldsValue
      } } = this.props;
      // console.log('设置表单的值', values);
      setFieldsValue(values);
    }

    render() {
      const newProps = {
        getFieldsValue: this.getFieldsValue,
        setFieldsValue: this.setFieldsValue
      };
      // console.log('this.props', this.props);
      return <WrappedComponent {...this.props} {...newProps}></WrappedComponent>
    }
  }
  return Form.create()(SplitForm);
}

SplitFormHoc.propTypes = {
  name: PropTypes.string.isRequired
}

export default SplitFormHoc;