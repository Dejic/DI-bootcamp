import React from "react";
import data from "./SocialMedias.json"
class Example1 extends React.Component{
    constructor(props){
    super(props)
    }
    render(){
        return(
            <div>
               {data.SocialMedias.map((item)=>{
                return (<div style={{textAlign:"center"}}>
                   <h2>{item}</h2> 
                   </div>)
               })}
            </div>
         );
        }
}
export default Example1