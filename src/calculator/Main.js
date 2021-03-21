import React, {Component} from "react";
import WorkArea from "./WorkArea";

class Main extends Component {

    state = {}

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
                <WorkArea />
            </div>
        )
    }
}

export default Main