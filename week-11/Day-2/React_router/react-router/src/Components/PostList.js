import React from "react";
import data from "./Post.json"
class PostList extends React.Component{
    constructor(props){
    super(props)
    }
    render(){
        return(
            <div>
               {data.map((item)=>{
                return (<div style={{textAlign:"center"}}>
                   <h2>Hi this is a Title</h2> 
                   <h2>{item.title}</h2> 
                   <p>{item.content}</p>
                   </div>)
               })}
            </div>
         );
        }
}
export default PostList