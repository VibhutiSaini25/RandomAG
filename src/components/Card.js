import {useState} from "react";
import data from "./data";

import './Card.css';

function Card(){
    const [agent,setAgent] =useState(data[0]);
    const getAgent=()=>{
        let randomNum=Math.floor(Math.random()*data.length);
        setAgent(data[randomNum])

    }
    return(
        <div className="App">
            <div className="character">
                <table>
                    <tr>
                        <td><h2>{agent.id}</h2></td>
                        <td><img src={agent.icon} className="logo" alt=""></img></td>
                        <td> <div className="btnContainer">
                <button className="btn " onClick={getAgent}>Choose Agent</button>
                </div>
              </td>
                    </tr>

                </table>
                <p>{agent.name}</p>
                <p>{agent.description}</p>
               
            </div>
           
           

        </div>
    )
}
export default Card
