import React, {Component} from "react";
import DisplayCss from './css/DisplayCss.module.css'

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
      <input
        id='workArea'
        value={this.props.content == this.state.text ? this.props.content : this.toFocus()}
        onfocusin={this.focusing}
        disabled
      />
    )
  }
}