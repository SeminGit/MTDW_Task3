import React, {Component} from "react";
import WorkArea from "./WorkArea";
import Button from "./Button";

class Main extends Component {

  state = {
    content: ""
  }

  clickHandler = (event) => {
    let newContent = this.state.content;


    switch (event.target.value) {
      case "+/-":
        if (newContent == '') break;
        let changeMark = new RegExp(/[+\-x/]?(\d,?)+/g);
        let values = Array.from(newContent.matchAll(changeMark));
        let toChange = values[values.length - 1][0];
        if (toChange.indexOf('x') != -1 || toChange.indexOf('/') != -1) {
          // let newPart = toChange.substr(0, 1);
          let newPart = '-';
          newPart += toChange.substr(1);

          if (toChange.substr(toChange.length - 1) == '%')
            newPart += '%';
          newContent = newContent.replace(new RegExp(/(\d,?)+%?$/g), newPart);
        } else if (toChange.indexOf('+') != -1) {
          newContent = newContent.replace(new RegExp(/[+-/*]?(\d,?)+%?$/g), toChange.replace('+', '-'));
        } else if (toChange.indexOf('-') != -1) {
          newContent = newContent.replace(new RegExp(/[+-/*]?(\d,?)+%?$/g), toChange.replace('-', '+'));
        } else {
          newContent = newContent.replace(new RegExp(/[+-/*]?(\d,?)+%?$/g), '-' + toChange);
        }
        break;
      case "C":
        //newContent = newContent.substr(0, newContent.length - 1);
        newContent = '';
        break;
      case "=":
        if (newContent == '')
          break;
        newContent = newContent.replaceAll("x", '*');
        newContent = newContent.replaceAll(",", '.');
        if (newContent.substr(0, 1) == '0' && !newContent.substr(0, 1).match(/\d/))
          newContent = newContent.replace('0', '');
        let reg = new RegExp(/\d*%/g);
        newContent = this.evalPercent(Array.from(newContent.matchAll(reg)), newContent);
        try {
          newContent = String(eval(newContent).toFixed(2)).substr(0, 8);
        } catch (err) {
          newContent = '';
        }
        break;
      case ',':
        if (newContent == '' ||
          newContent.substr(newContent.length - 1).match(/[,+\-x/]/g) != null
          || (newContent + ',').match(/(\d+,\d+),/g) != null)
          break;
        newContent += event.target.value;
        break;
      case '+':
      case '-':
      case 'x':
      case '/':
        if (newContent == '' ||
          newContent.substr(newContent.length - 1).match(/[,+\-x/]/g) != null)
          break;
        newContent += event.target.value;
        break;
      case '%':
        if (newContent == '' ||
          newContent.substr(newContent.length - 1).match(/[,+\-x/%]/g) != null)
          break;
        newContent += event.target.value;
        break;
      default:
        if (newContent.substr(newContent.length - 1).match(/%/g) == null)
          newContent += event.target.value;
    }

    this.setState({
        content: newContent
      }
    )
  }

  evalPercent(arr, input) {
    if (arr.length == 0) return input;
    let reg = new RegExp(/[\d.,]*%/g);
    let options = new RegExp(/[+\-*/]/g);
    for (let i = 0; i < arr.length; i++) {
      let match = reg.exec(input);
      let toEv = input.substr(0, match.index);
      let isOptions = options.exec(toEv);
      toEv = toEv.substr(0, toEv.length - 1);
      if (isOptions == null) {
        input = input.replace(match, '0');
      } else {
        let toPercentage = eval(toEv.replace(',', '.'));
        let percent = Number(match[0].replace('%', ''));
        input = input.replace(match[0], String(toPercentage * (percent / 100)));
      }
      console.log("input: ", input, '   toEv: ', toEv);
    }
    return input;
  }


  render() {
    return (
      <div style={
        {
          width: 350,
          height: 600,
          marginLeft: 600,
          marginTop: 100,
          border: 0,
          background: 'linear-gradient(to bottom right, #ffbc00 30%, #fe006d 115%)'
          //background: 'radial-gradient(at top left, #ffb100 50%, #fe006d 110%)'
        }
      }>
        <WorkArea content={this.state.content}/>
        <div style={{display: "block"}}>
          <Button text={"C"} clickHandler={this.clickHandler}/>
          <Button text={"+/-"} clickHandler={this.clickHandler}/>
          <Button text={"%"} clickHandler={this.clickHandler}/>
          <Button text={"/"} clickHandler={this.clickHandler}/>
        </div>
        <div style={{height: 79}}>
          <Button text={"7"} clickHandler={this.clickHandler}/>
          <Button text={"8"} clickHandler={this.clickHandler}/>
          <Button text={"9"} clickHandler={this.clickHandler}/>
          <Button text={"x"} clickHandler={this.clickHandler}/>
        </div>
        <div style={{height: 79}}>
          <Button text={"4"} clickHandler={this.clickHandler}/>
          <Button text={"5"} clickHandler={this.clickHandler}/>
          <Button text={"6"} clickHandler={this.clickHandler}/>
          <Button text={"-"} clickHandler={this.clickHandler}/>
        </div>
        <div style={{height: 79}}>
          <Button text={"1"} clickHandler={this.clickHandler}/>
          <Button text={"2"} clickHandler={this.clickHandler}/>
          <Button text={"3"} clickHandler={this.clickHandler}/>
          <Button text={"+"} clickHandler={this.clickHandler}/>
        </div>
        <div style={{height: 79}}>
          <Button style={{
            width: 172,
            height: 77,
            display: "flex",
            justifyContent: "left",
            padding: 20,
            alignItems: "center",
            textAlign: 'left',
            boxSizing: "border-box",
            backgroundColor: 'rgba(255,255,255,0.2)',
            border: 'rgba(1,1,1,0)',
            color: "white",
            fontSize: 30,
            fontFamily: 'Coronetscript, cursive',
            outline: 'none'
          }} text={"0"} clickHandler={this.clickHandler}/>
          <Button text={","} clickHandler={this.clickHandler}/>
          <Button text={"="} clickHandler={this.clickHandler}/>
        </div>
      </div>
    )
  }
}

export default Main