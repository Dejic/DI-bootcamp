import React from "react";
class Garage extends React.Component{
    constructor(props){
    super(props)
}
render()
{return(<h2>Who lives in my {this.props.size} Garage?</h2>)
}
}
export default Garage