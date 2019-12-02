/*
 * @Author: your name
 * @Date: 2019-12-02 12:19:32
 * @LastEditTime: 2019-12-02 13:07:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ReactDvaAnt/src/routes/CSSLearn/C3/C3_1_1.js
 */
import React, { PureComponent } from "react";
import Styles from "./index.less";

class C3_1_1 extends PureComponent {
  render() {
    return (
      <div>
        <div className={`${Styles.box} ${Styles.clear}`}>
          <img
            src="/public/static/headicon.jpeg"
            width="300px"
            height="300px"
          ></img>
        </div>
        <div className={Styles.father}>
          <span className={Styles.child}>
            恰如一江春水向东流，流到断崖也不回头
          </span>
        </div>
      </div>
    );
  }
}

export default C3_1_1;
