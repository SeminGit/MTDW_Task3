import React from "react";

export default (props) => {
    return (
        <div style={
            {
                fontSize:30,
                display: "inline-block",
                boxSizing: "border-box",
                border: '1px solid',
                borderColor: 'rgba(1,1,1,0)'
            }
        } >
            <button onClick={props.clickHandler} style={
                props.style ? props.style :
                {
                    width: 85.5,
                    height: 76,
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    boxSizing:"border-box",
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    border: 'rgba(1,1,1,0)',
                    color: "white",
                    fontSize:30
                }
            } value={props.text}>{props.text}</button>
        </div>
    )
}