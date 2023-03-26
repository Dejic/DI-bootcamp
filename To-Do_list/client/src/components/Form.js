import React from "react"
class Form extends React.Component{
    constructor(){
        super()
    }

    fetcher =async()=>{
        const info=await fetch("http://localhost:3001/getinfo")
const jsonedInfo= await info.json();
console.log(jsonedInfo)
    }
    render(){
        return(
            <div>
                <input/>
                <button onClick={this.fetcher}>click me</button>
            </div>
        )
    }
}

export default Form