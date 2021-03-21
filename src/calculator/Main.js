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
                break;
            case "C":
                newContent = newContent.substr(0, newContent.length - 1);
                break;
            case "=":
                newContent = newContent.replaceAll("x", '*');
                newContent = newContent.replaceAll(",", '.');
                newContent = new String(eval(newContent));
                break;
            default:
                newContent += event.target.value;
        }

        console.log(newContent)
        this.setState({
                content: newContent
            }
        )
    }

    render() {
        return (
            <div style={
                {
                    width: 500,
                    height: 600,
                    border: '1px solid black',
                    marginLeft: 600,
                    marginTop: 100
                }
            }>
                <WorkArea content={this.state.content}/>
                <div style={{height: 78, border: '1px solid black'}}>
                    <Button text={"C"} clickHandler={this.clickHandler}/>
                    <Button text={"+/-"} clickHandler={this.clickHandler}/>
                    <Button text={"%"} clickHandler={this.clickHandler}/>
                    <Button text={"/"} clickHandler={this.clickHandler}/>
                </div>
                <div style={{height: 78, border: '1px solid black'}}>
                    <Button text={"7"} clickHandler={this.clickHandler}/>
                    <Button text={"8"} clickHandler={this.clickHandler}/>
                    <Button text={"9"} clickHandler={this.clickHandler}/>
                    <Button text={"x"} clickHandler={this.clickHandler}/>
                </div>
                <div style={{height: 78, border: '1px solid black'}}>
                    <Button text={"4"} clickHandler={this.clickHandler}/>
                    <Button text={"5"} clickHandler={this.clickHandler}/>
                    <Button text={"6"} clickHandler={this.clickHandler}/>
                    <Button text={"-"} clickHandler={this.clickHandler}/>
                </div>
                <div style={{height: 78, border: '1px solid black'}}>
                    <Button text={"1"} clickHandler={this.clickHandler}/>
                    <Button text={"2"} clickHandler={this.clickHandler}/>
                    <Button text={"3"} clickHandler={this.clickHandler}/>
                    <Button text={"+"} clickHandler={this.clickHandler}/>
                </div>
                <div style={{height: 78, border: '1px solid black'}}>
                    <Button text={"0"} clickHandler={this.clickHandler}/>
                    <Button text={","} clickHandler={this.clickHandler}/>
                    <Button text={"="} clickHandler={this.clickHandler}/>
                </div>
            </div>
        )
    }
}

export default Main