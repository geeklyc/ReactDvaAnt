import React, { PureComponent } from "react";
import { connect } from "dva";
import { Row, Col, Form } from "antd";
import styles from "./IndexPage.css";
import DropMenuView from "./DropMenuView";
import SelectView from "./DropMenuView/SelectView";

class IndexPage extends PureComponent {
  render() {
    const fields = [
      {
        label: "name",
        value: "lzp"
      },
      {
        label: "age",
        value: "18"
      },
      {
        label: "sex",
        value: "男"
      },
      {
        label: "love",
        value: "books"
      },
      {
        label: "love1",
        value: "books"
      },
      {
        label: "love2",
        value: "books"
      },
      {
        label: "love3",
        value: "books"
      },
      {
        label: "love4",
        value: "books"
      }
    ];

    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.test}>
        <Form>
          {/* <Row> */}
          {fields.map(item => {
            return (
              <Form.Item label={item.label}>
                {getFieldDecorator(item.label, {
                  initialValue: { number: item.value }
                })(<SelectView></SelectView>)}
              </Form.Item>
            );
          })}
          {/* </Row> */}
        </Form>
      </div>
    );
  }
}

IndexPage.propTypes = {};

export default connect()(Form.create()(IndexPage));
