import React from "react";
class Events extends React.Component{
    constructor(props){
    super(props);
    this.state = {isToggleOn: true}
    }

    clickMe = (banana)=>{
console.log(banana)    }
    handleKeyPress = (e)=>{
        if (e.key==="Enter") {
            alert(`The ${e.key} key was pushed, your input is ${e.target.value} `)
        }console.log(e)
    }
    changeState = ()=>{
        if (this.state.isToggleOn) {
            this.setState({isToggleOn: false})
            
        }else {
            this.setState({isToggleOn: true})
        }
        console.log(this.state.isToggleOn)
    }




    render(){
        return(
            <div>
                <button onClick={(e)=>this.clickMe(e)}>Click Me</button>
                <input type={"text"} onKeyDown={(e)=>this.handleKeyPress(e)}/>
                <button onClick={this.changeState}>{this.state.isToggleOn===true ? "ON":"OFF"}</button>
            </div>
        )
    }
}
export default Events