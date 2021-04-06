import React from "react";
import Styles from "./Styles.module.css";

export default (props) => {
    return (
      <button onClick={props.clickHandler} value={props.text}>{props.text}</button>
    )
}