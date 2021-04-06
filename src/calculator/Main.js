import React, {Component} from "react";
import WorkArea from "./WorkArea";
import Button from "./Button";
import ButtonsCss from './css/ButtonsCss.module.css';
import CalculatorCss from './css/CalculatorCss.module.css';

class Main extends Component {

  state = {
    content: ""
  }

  clickHandler = (event) => {
    let newContent = this.state.content;

    switch (event.target.value) {
      case "+/-":
        if (newContent == '') {
          break;
        }

        const signWithDigitRegex = new RegExp(/[+\-x/]?(\d.?)+/g);
        const values = Array.from(newContent.matchAll(signWithDigitRegex));
        let toChange = values[values.length - 1][0]; // drop sign

        console.log(signWithDigitRegex);
        console.log(values);
        console.log(toChange);

        if (toChange.indexOf('x') != -1 || toChange.indexOf('/') != -1) {
          let newPart = '-' + toChange.substr(1);

          if (toChange.substr(toChange.length - 1) == '%') {
            newPart += '%';
          }
          newContent = newContent.replace(new RegExp(/(\d[.]?)+%?$/g), newPart);
        } else if (toChange.indexOf('+') != -1) {
          newContent = newContent.replace(new RegExp(/[+-/*]?(\d[.]?)+%?$/g), toChange.replace('+', '-'));
        } else if (toChange.indexOf('-') != -1) {
          newContent = newContent.replace(new RegExp(/[+-/*]?(\d[.]?)+%?$/g), toChange.replace('-', '+'));
        } else {
          newContent = newContent.replace(new RegExp(/[+-/*]?(\d[.]?)+%?$/g), '-' + toChange);
        }
        break;

      case "C":
        newContent = '';
        break;

      case "=":
        if (newContent == '') {
          break;
        }

        newContent = newContent.replaceAll("x", '*');

        if (newContent.substr(0, 1) == '0' && !newContent.substr(0, 1).match(/\d/)) {
          newContent = newContent.replace('0', '');
        }

        newContent = this.evalPercent(Array.from(newContent.matchAll(new RegExp(/\d*%/g))), newContent);

        try {
          newContent = String(eval(newContent).toFixed(2)).substr(0, 8);
        } catch (err) {
          newContent = '';
        }

        break;

      case '.':
        if (newContent == '' || newContent.substr(newContent.length - 1).match(/[.+\-x/]/g) != null || (newContent + '.').match(/(\d+.\d+)./g) != null) {
          break;
        }

        newContent += event.target.value;
        break;

      case '+':
      case '-':
      case 'x':
      case '/':
        if (newContent == '' || newContent.substr(newContent.length - 1).match(/[.+\-x/]/g) != null) {
          break;
        }

        newContent += event.target.value;
        break;
      case '%':
        if (newContent == '' || newContent.substr(newContent.length - 1).match(/[.+\-x/%]/g) != null) {
          break;
        }

        newContent += event.target.value;

        break;

      default:
        if (newContent.substr(newContent.length - 1).match(/%/g) == null) {
          newContent += event.target.value;
        }
    }

    this.setState({
        content: newContent
      }
    )
  }

  evalPercent(arr, input) {
    if (arr.length == 0) return input;

    console.log(input);

    let reg = new RegExp(/[\d.]*%/g);
    let options = new RegExp(/[+\-*/]/g);

    for (let i = 0; i < arr.length; i++) {

      let match = reg.exec(input);
      let toEv = input.substr(0, match.index);
      let isOptions = options.exec(toEv);

      toEv = toEv.substr(0, toEv.length - 1);

      if (isOptions == null) {
        input = input.replace(match, '0');
      } else {
        let toPercentage = eval(toEv);
        let percent = Number(match[0].replace('%', ''));

        switch (isOptions[0]) {
          case '*':
            input = toPercentage * percent / 100 + '.00';
            break;
          case '/':
            input = toPercentage * percent + '.00';
            break;
          case '+':
            input = toPercentage + (toPercentage * percent / 100) + '.00';
            break;
          case '-':
            input = toPercentage - (toPercentage * percent / 100) + '.00';
            break;
        }
      }
    }
    return input;
  }


  render() {
    return (
      <div className={CalculatorCss.calculator}>
        <WorkArea content={this.state.content}/>
        <div className={ButtonsCss.buttonsContainer}>
          <Button text={"OFF"} clickHandler={this.clickHandler}/>
          <Button text={"+/-"} clickHandler={this.clickHandler}/>
          <Button text={"√"} clickHandler={this.clickHandler}/>
          <Button text={"%"} clickHandler={this.clickHandler}/>
          <Button text={"MRC"} clickHandler={this.clickHandler}/>
          <Button text={"M+"} clickHandler={this.clickHandler}/>
          <Button text={"M-"} clickHandler={this.clickHandler}/>
          <Button text={"-"} clickHandler={this.clickHandler}/>
          <Button text={"7"} clickHandler={this.clickHandler}/>
          <Button text={"8"} clickHandler={this.clickHandler}/>
          <Button text={"9"} clickHandler={this.clickHandler}/>
          <Button text={"X"} clickHandler={this.clickHandler}/>
          <Button text={"4"} clickHandler={this.clickHandler}/>
          <Button text={"5"} clickHandler={this.clickHandler}/>
          <Button text={"6"} clickHandler={this.clickHandler}/>
          <Button text={"-"} clickHandler={this.clickHandler}/>
          <Button text={"1"} clickHandler={this.clickHandler}/>
          <Button text={"2"} clickHandler={this.clickHandler}/>
          <Button text={"3"} clickHandler={this.clickHandler}/>
          <Button className={ButtonsCss.plusButton} text={"+"} clickHandler={this.clickHandler}/>
          <Button text={"0"} clickHandler={this.clickHandler}/>
          <Button text={"."} clickHandler={this.clickHandler}/>
          <Button text={"="} clickHandler={this.clickHandler}/>
        </div>
      </div>
    )
  }
}

export default Main