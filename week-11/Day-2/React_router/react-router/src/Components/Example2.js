import React from "react";
import data from "./SocialMedias.json"
class Example2 extends React.Component{
    constructor(props){
    super(props)
    }
    render(){
        return(
            <div>
                <h1>{data.Skills[0].Area}</h1>
                <ul>
                    {data.Skills[0].SkillSet.map((skill)=>{
                    return(
                        <li>{skill.Name}</li>
                    )
                    })}
                </ul>
                <h1>{data.Skills[1].Area}</h1>
                <ul>
                    {data.Skills[1].SkillSet.map((skill)=>{
                    return(
                        <li>{skill.Name}</li>
                    )
                    })}
                </ul>
               
               
            </div>
         );
        }
}
export default Example2
