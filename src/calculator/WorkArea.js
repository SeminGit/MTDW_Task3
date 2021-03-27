import React, {Component} from "react";

export default class WorkArea extends Component {
    toFocus = (event) => {
        event.target.focus();
        event.target.selectionStart = event.target.length;
    }

    render = () => {
        return (

            <div>
                <input style={{
                    height: 200
                    ,
                    width: 350
                    ,
                    fontSize: 70
                    ,
                    textAlign: "right"
                    ,
                    paddingTop: 110
                    ,
                    backgroundColor: 'rgba(1,1,1,0)'
                    ,
                    border: 0
                    ,
                    boxSizing: "border-box"
                    ,
                    color: 'white'
                    ,
                }
                }
                       value=
                           {
                               this.props.content
                           }
                       onChange={this.toFocus}
                />
            </div>
        )
    }
}