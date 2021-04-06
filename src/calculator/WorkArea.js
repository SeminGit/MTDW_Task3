import React, {Component} from "react";

export default class WorkArea extends Component {

  state = {
    text: this.props.content
  }

  toFocus = () => {
    let event = document.getElementById('workArea')
    // event.focus();
    // event.selectionStart = event.value.length + 1;
    event.value = this.props.content;
    if (event.setSelectionRange) {
      event.setSelectionRange(this.props.content.length, this.props.content.length)
    }
    event.focus();
    // this.setState(
    //     {
    //         text:this.props.content
    //     }
    // )
    return this.props.content;
  }

  focusing = () => {
    let event = document.getElementById('workArea')
    if (event.setSelectionRange) {
      event.setSelectionRange(event.value.length, event.value.length)
    }
    event.focus();
  }

  render = () => {
    return (

      <div>
        <input
          id='workArea'
          style={{
            height: 200, width: 350, fontSize: 70,
            textAlign: "right", paddingTop: 110,
            backgroundColor: 'rgba(1,1,1,0)', border: 0,
            boxSizing: "border-box", color: 'white', outline: 'none'
          }
          } value={this.props.content == this.state.text ? this.props.content : this.toFocus()}
          onfocusin={this.focusing}
          disabled
        />
      </div>
    )
  }
}