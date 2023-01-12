import {useState} from 'react';
import "./Card.css";

export default function Card({info}) {
    const[ocultar,setOcultar]=useState(true);   /*Definicion Estado*/

    const mostrar =()=>{
        console.log(info)
        setOcultar(false) 
    }

    const ocularInfo=()=>{
        setOcultar(true) //ocultar contenedor de info
    }

    return(
        <div className="d-flex flex-row cards m-2 p-2 align-items-center card">
            <div>
                <img src={info.image} alt={info.name}/>           
                
                    <h2 className='titleCard'>{info.name}</h2>      
                <div className="d-flex justify-content-end">
                    <button onClick={mostrar}  className={ ocultar === true ?"btn btn-more":"d-none"}>Now More..</button>  
                </div>
                    
            </div>
            {ocultar === false?                      
                <div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btnClose" onClick={ocularInfo}>X</button>
                    </div>
                    <ul className="list-group p-3">
                        <li className="list-group-item">Character Status<span>{info.status}</span></li>
                        <li className="list-group-item">Species <span>{info.species}</span></li>
                        <li className="list-group-item">Origin <span>{info.origin.name}</span></li>
                        <li className="list-group-item">Gender <span>{info.gender}</span></li>
                    </ul>
                </div>:''
            }
        </div>
    )
}