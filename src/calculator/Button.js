import React from "react";

export default (props) => {
    return (
        <div style={
            {
                fontSize:30,
                display: "inline-block",
                padding: 15,
                border: '1px solid black'
            }
        } >
            <button onClick={props.clickHandler} style={{width: 90, height: 78 }} value={props.text}>{props.text}</button>
        </div>
    )
}