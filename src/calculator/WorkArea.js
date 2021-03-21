import React from "react";

export default (props) => {
    return (
        <div>
            <input style={
                {
                    height: 200,
                    width: 497,
                    fontSize: 50,
                    textAlign: "right"
                }
            }
            value={props.content}/>
        </div>
    )
}