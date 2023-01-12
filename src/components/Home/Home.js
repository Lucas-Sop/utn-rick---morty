import "./Home.css";
import { Link } from "react-router-dom";


export default function Home() {

    return(
        <section class=" container-Home d-flex align-items-center justify-content-center">
            <main className="container-Main d-flex flex-column justify-content-center">
                <h1 className="row align-items-center justify-content-center">Proyect - Rick & Morty</h1>
                <nav className="row navbar align-items-center">
                    <ul className="nav nav-pills justify-content-center">
                        <Link to='/characters'><button class="p-3 btn boton">Characters</button></Link>
                        <Link to='/contact'><button class="p-3 btn boton">Contact</button></Link>
                    </ul>
                </nav>
            </main>
        </section>
    )
}

