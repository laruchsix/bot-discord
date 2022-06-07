import React from "react"
import ReactDOM from "react-dom"
import "./style/index.css"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plannings:[],
            id:"Unknown ID",
            name:"Unknown name",
            date:"Unknown date"
        }
    }

    render() {
        return (
            <div className="app-container">
                <h1> sems to work </h1>
            </div>
        );
    }

}

ReactDOM.render(<h1> sems to work </h1>, document.getElementById("root"));
