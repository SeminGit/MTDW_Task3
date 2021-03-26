import React from "react";

export default (props) => {
    return (
        <div>
            <input style={
                {
                    height: 200,
                    width: 350,
                    fontSize: 50,
                    textAlign: "right",
                    backgroundColor: 'rgba(1,1,1,0)',
                    border: 0,
                    boxSizing:"border-box"
                }
            }
            value={props.content}/>
        </div>
    )
}