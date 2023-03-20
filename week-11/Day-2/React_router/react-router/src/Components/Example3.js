import React from "react"
import data from "./SocialMedias.json"
class Example1 extends React.Component{
    constructor(props){
    super(props)
    }
    render(){
        return(
            <div>
             {data.Experiences.map((Experience)=>{
                return(
                    <div>
                        
                    <div/>
                )
             })}
            </div>
         );
        }
}
export default Example1