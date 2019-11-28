import React, { PureComponent } from "react";
import { Input, Row, Col, Form } from "antd";

class SelectView extends PureComponent {
  static getDerivedStateFromProps(nextProps) {
    // Should be a controlled component.
    console.log('nextProps', nextProps);
    if ('value' in nextProps) {
      return {
        ...(nextProps.value || {}),
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    const value = props.value || {};
    this.state = {
      number: value.number || ""
    };
    console.log('value', props);
  }

  handleNumberChange = e => {
    const temp = e.target.value || "";
    console.log('target', temp)
    const number = temp + "lyc";
    console.log('number', number);
    if (!("value" in this.props)) {
      console.log("变化 value", number);
      this.setState({
        number
      });
    }

    const { onChange } = this.props;
    if (onChange) {
      console.log("变化 onChange", onChange);
      onChange({
        ...this.state,
        number
      });
    }
  };

  render() {
    const { number } = this.state;
    return (
      <Input
        placeholder={"Please Select"}
        value={number}
        onChange={this.handleNumberChange}
      ></Input>
    );
  }
}

export default SelectView;
