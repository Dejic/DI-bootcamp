import React from "react"

class FetchInfo extends React.Component{
    constructor(props){
        super(props)
        this.state={info:[]}
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=> res.json())
    .then((res)=>{
    console.log(res)
    this.setState({info:res})
    }).catch((e)=>console.log(e))
    }
    render(){
        return(<div>
            <h1>Info:</h1>
            {this.state.info.length>0 && (
                this.state.info.map((item)=>{
                    return(
                        <div>
                            <h1>Title:{item.title}</h1>
                            <p>ID: {item.id}</p>
                        </div>
                    )
                })
            )}
        </div>)
    }
}
export default FetchInfo