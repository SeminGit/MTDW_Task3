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
                newContent = String(eval(newContent));
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
                    width: 350,
                    height: 600,
                    marginLeft: 600,
                    marginTop: 100,
                    border: 0,
                   // background: 'linear-gradient(to bottom right, #ffb100 65%, #c233b6 90%)'
                    background: 'radial-gradient(at top left, #ffb100 55%, #fe008b 110%)'
                }
            }>
                <WorkArea content={this.state.content}/>
                <div style={{display: "block"}}>
                    <Button text={"C"} clickHandler={this.clickHandler}/>
                    <Button text={"+/-"} clickHandler={this.clickHandler}/>
                    <Button text={"%"} clickHandler={this.clickHandler}/>
                    <Button text={"/"} clickHandler={this.clickHandler}/>
                </div>
                <div style={{height: 78}}>
                    <Button text={"7"} clickHandler={this.clickHandler}/>
                    <Button text={"8"} clickHandler={this.clickHandler}/>
                    <Button text={"9"} clickHandler={this.clickHandler}/>
                    <Button text={"x"} clickHandler={this.clickHandler}/>
                </div>
                <div style={{height: 78}}>
                    <Button text={"4"} clickHandler={this.clickHandler}/>
                    <Button text={"5"} clickHandler={this.clickHandler}/>
                    <Button text={"6"} clickHandler={this.clickHandler}/>
                    <Button text={"-"} clickHandler={this.clickHandler}/>
                </div>
                <div style={{height: 78}}>
                    <Button text={"1"} clickHandler={this.clickHandler}/>
                    <Button text={"2"} clickHandler={this.clickHandler}/>
                    <Button text={"3"} clickHandler={this.clickHandler}/>
                    <Button text={"+"} clickHandler={this.clickHandler}/>
                </div>
                <div style={{height: 78}}>
                    <Button style={{
                        width:172,
                        height: 76,
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        boxSizing:"border-box",
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        border: 'rgba(1,1,1,0)',
                        color: "white",
                        fontSize:30
                    }} text={"0"} clickHandler={this.clickHandler}/>
                    <Button text={","} clickHandler={this.clickHandler}/>
                    <Button text={"="} clickHandler={this.clickHandler}/>
                </div>
            </div>
        )
    }
}

export default Main