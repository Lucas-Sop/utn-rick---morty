
import {Link} from "react-router-dom";
import './Navegation.css';
export default function Navegation() {
        
        
          return(
       <header className="navbarHeader d-flex justify-content-between align-items-center">
            <nav className="navbar navbar-expand-lg w-100 navbarHeader">
                <div className="container-fluid">
                    <h2  className="my-0 navTitle navbar-brand">Rick & Morty </h2>
                    <ul  className="navbar-nav  nav-pills">
                        <Link  to="/"><li className= "p-2 mx-2 nav-item" >Home</li></Link>  
                        <Link  to="/characters"><li className="p-2 mx-2 nav-item">Characters</li></Link>    
                        <Link  to="/contact"><li className="p-2 mx-2 nav-item">Contact</li></Link>
                    </ul>
                </div>
            </nav>
       </header>
    )
    
}
