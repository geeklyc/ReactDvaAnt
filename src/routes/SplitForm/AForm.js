import React, { PureComponent } from "react";
import { Input, Form } from "antd";
import SplitFormHoc from './SplitFormHoc';

class AForm extends PureComponent {
  render() {
    const { getFieldDecorator } = this.props.form;
    // console.log('this.props A', this.props);
    return (
      <Form>
        <Form.Item label="phone">
          {getFieldDecorator("phone", {
            initialValue: "15919479503",
            rules: []
          })(<Input placeholder="请输入手机号"></Input>)}
        </Form.Item>
        <Form.Item label="password">
          {getFieldDecorator("password", {
            initialValue: "123456",
            rules: []
          })(<Input placeholder="请输入密码"></Input>)}
        </Form.Item>
      </Form>
    );
  }
}

export default SplitFormHoc(AForm);