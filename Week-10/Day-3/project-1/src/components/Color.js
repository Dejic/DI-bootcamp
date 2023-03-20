import React from "react";
class Color extends React.Component{
    constructor(props){
    super(props)
    this.state = {favoriteColor: "red"}
    }

componentDidMount(){
    setTimeout (()=>{
        this.setState({favoriteColor: "yellow"})
        console.log("It worked")
    },5000)
}

changeColour = ()=>{
    this.setState({favoriteColor: "blue"})
}

    render(){
    return(
        <div>
            <h1>My favorite colour is {this.state.favoriteColor}</h1>
            <button onClick={this.changeColour}>Change Fave colour</button>
        </div>
    )
    }
}
export default Color