import React, { PureComponent } from "react";
import { Input, Form } from "antd";
import SplitFormHoc from './SplitFormHoc';

const FormItem = Form.Item;

class BForm extends PureComponent {
  render() {
    const { getFieldDecorator } = this.props.form;
    // console.log('this.props B', this.props);
    return (
      <Form>
        <FormItem label="age">
          {getFieldDecorator("age", {
            initialValue: "19",
            rules: []
          })(<Input placeholder="请输入年龄"></Input>)}
        </FormItem>
        <FormItem label="sex">
          {getFieldDecorator("sex", {
            initialValue: "1",
            rules: []
          })(<Input placeholder="请输入性别"></Input>)}
        </FormItem>
      </Form>
    );
  }
}

export default SplitFormHoc(BForm);