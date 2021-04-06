import React from "react";

export default (props) => {
    return (
      <button onClick={props.clickHandler} style={
          props.style ? props.style :
            {
                width: "-webkit-fill-available",
                height: 50,
                margin: 5,
                background: 'linear-gradient(166.66deg, #328CD0 25.32%, #081925 250.71%)',
                borderColor: '#081925',
                color: "white",
                fontSize: 20,
                borderRadius: 6
            }
      } value={props.text}>{props.text}</button>
    )
}