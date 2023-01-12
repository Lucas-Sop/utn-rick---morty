import './Filters.css'

export default function Filters({nombreFiltro,datoFiltro,mostrarValor}) {

    return(
        <div className="form-check form-switch rounded switch py-2 px-0 m-2">
            <input className="form-check-input" type="checkbox" role="switch" id={datoFiltro} value={datoFiltro} onChange={mostrarValor}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{nombreFiltro}</label>
        </div>
    )
}