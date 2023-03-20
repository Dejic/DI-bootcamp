import React from "react";
import Garage from "./Garage";
class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = {color: "red", size: "small"}
        
    }
    render(){
        return (
        <div>
        <h2>This Car is a {this.state.color} {this.props.name} {this.props.model}</h2>
        <Garage size= {this.state.size} />
        </div>
        )
    }
}
export default Car;