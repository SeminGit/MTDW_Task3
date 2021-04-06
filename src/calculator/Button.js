import React from "react";
import Styles from "./css/ButtonsCss.module.css";

export default (props) => {
    return (
      <button onClick={props.clickHandler} className={props.className} value={props.text}>{props.text}</button>
    )
}