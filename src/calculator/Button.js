import React from "react";
import Styles from "./Styles.css";

export default (props) => {
    return (
      <button onClick={props.clickHandler} className={Styles.button} value={props.text}>{props.text}</button>
    )
}