import{useEffect, useState} from 'react';
import { Fragment } from 'react';
import "./Characters.css";
import Navegation from '../Navegation/Navegation';
import Filters from "../Filters/Filters";
import SectionCards from "../SectionCards/SectionCards";


export default function Characters() {
    let [datos,setDatos]=useState([]);  
    let [infoCompleta,setInfoCompleta]=useState([]);
 
    const mostrarValor =(event)=>{

        // se fija si esta o no checked tildado
        if(event.target.checked){
            let datoFiltro=event.target.value;
            if(datoFiltro === "Alive" || datoFiltro === "Dead"){
            let resultado= datos.filter((ch)=> ch.status === datoFiltro);
                setDatos(resultado);
            }
            if(datoFiltro === "Female" || datoFiltro === "Male"){
                let resultado= datos.filter((ch)=> ch.gender === datoFiltro)
                setDatos(resultado)
            }
            if(datoFiltro === "unknown"){
                let resultado= datos.filter((ch)=> ch.origin.name === datoFiltro)
                setDatos(resultado)
            }
         }else{
            setDatos(infoCompleta)
         }
    }

    const traerInfo=async()=>{
        let info= await fetch("https://rickandmortyapi.com/api/character")
                        .then(respuesta => respuesta.json())
                        .catch(error => console.log("ERRORR!!!" +error))
        return info 
    }

   
    const mostrarInfo =async ()=>{
        let dato= await traerInfo()
        let infoPersonajes= dato.results
        console.log(infoPersonajes)
        setDatos(infoPersonajes)
        setInfoCompleta(infoPersonajes)
    }
   
    useEffect(()=>{mostrarInfo()} , [])

    return(
        <Fragment>
                <Navegation />
            <main>
                    <section className='container filterSection d-flex flex-column py-5 px-4'>
                        <h2>Filters</h2>
                        <div className="row justify-content-between">
                            <Filters nombreFiltro="Character Alive" datoFiltro="Alive" mostrarValor={mostrarValor}/> 
                            <Filters nombreFiltro="Character Dead" datoFiltro="Dead" mostrarValor={mostrarValor}/> 
                            <Filters nombreFiltro="Female" datoFiltro="Female" mostrarValor={mostrarValor}/> 
                            <Filters nombreFiltro="Male" datoFiltro="Male" mostrarValor={mostrarValor}/> 
                            <Filters nombreFiltro="Origin Unknown" datoFiltro="unknown" mostrarValor={mostrarValor}/> 
                        </div>
                    </section>
                <SectionCards datos={datos} />
            </main> 
        </Fragment>
    )
}