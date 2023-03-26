import React from "react"
import data from "./SocialMedias.json"
class Example1 extends React.Component{
    constructor(props){
    super(props)
    }
    render(){
        return(
            <div>
                {data.Experiences.map((experience)=>{
                    return(
                        <div>
                            <img src={experience.logo}/>
                            <h3>{experience.roles[0].title}</h3>
                            <h3>{experience.roles[0].startDate},{experience.roles[0].location}</h3>
                            <h3>{experience.roles[0].description}</h3>
                        </div>
                    )
                })}
            </div>
         );
        }
}
export default Example1