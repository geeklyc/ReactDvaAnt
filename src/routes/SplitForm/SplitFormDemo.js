/*
 * @Author: your name
 * @Date: 2019-12-02 08:39:58
 * @LastEditTime: 2019-12-02 09:36:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ReactDvaAnt/src/routes/SplitForm/SplitFormDemo.js
 */
import React, { PureComponent } from "react";
import { Input, Button, Row, Col } from "antd";
import AForm from "./AForm";
import BForm from "./BForm";

class SplitFormDemo extends PureComponent {
  constructor(props) {
    super(props);
    // 保存用户信息
    this.formObj = {};
    this.aKey = "A";
    this.bKey = "B";
  }

  // 父类方法调用子类方法
  getBasicRef = (child, refName) => {
    console.log("name 对象", child);
    this.formObj[refName] = child;
  };

  // 获取值
  handleGetClick = (e = {}) => {
    const aInfo = this.formObj[this.aKey];
    const bInfo = this.formObj[this.bKey];
    const aResult = aInfo.getFieldsValue();
    const bResult = bInfo.getFieldsValue();
    const result = {
      ...aResult,
      ...bResult
    };
    console.log("提交信息", result);
  };

  // 设置值
  handleSetClick = (e = {}) => {
    const aInfo = this.formObj[this.aKey];
    const bInfo = this.formObj[this.bKey];
    aInfo.setFieldsValue({
      phone: "18682373880"
    });
    bInfo.setFieldsValue({
      age: "29"
    });
  };

  render() {
    return (
      <div>
        <Row>
          <Col>
            <span> 用户信息表 - 测试拆分表单 </span>{" "}
          </Col>
        </Row>
        <AForm getChildRef={this.getBasicRef} refName={this.aKey}></AForm>
        <BForm getChildRef={this.getBasicRef} refName={this.bKey}></BForm>
        <Button onClick={this.handleGetClick}> 获取值 </Button>{" "}
        <Button onClick={this.handleSetClick}> 设置值 </Button>{" "}
      </div>
    );
  }
}

export default SplitFormDemo;
