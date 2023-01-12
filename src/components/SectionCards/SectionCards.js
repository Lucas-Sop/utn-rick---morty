import Card from "../Card/Card";

export default function SectionCards({datos}) {
    
    return(
        <section className="d-flex flex-wrap justify-content-center section-cards">
            {datos.map((dato)=>{ 
                return <Card key={dato.id} info={dato}/>
            })} 
         
        </section>
    )
}
