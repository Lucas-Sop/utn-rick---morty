import { Fragment } from 'react';

import Navegation from '../Navegation/Navegation'
import './Contact.css'


export default function Contact(){
    /* Formulario no controlado*/
    
    return(
        <Fragment>
            <Navegation/>
            <main className='contactMain d-flex flex-column'>
                <div className="container">
                    <section className='contactText d-flex row'>
                        <h2 className='colorText '>Contact</h2>
                        <h3 className='colorText'>Leave us your information so we can contact you</h3>
                    </section>
                    <form className="align-self-center row p-5" method="POST" action="https://formspree.io/f/xnqrzbrq">
                        <div className="col-md-6">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input type="text" name="nombre" id="nombre" className="form-control"  required/>

                        </div>
                        <div className="col-md-6">
                            <label for="correo" className="form-label">Email</label>
                            <input type="email" id="email" name="email" placeholder='ejemplo@ejemplo.com' className="form-control"  required/>
                        </div>  
                        <div className="col-12">
                            <label for="mensaje" className="form-label" >Mensaje</label>
                            <textarea id="mensaje" className="form-control" name="mensaje" required></textarea>
                        </div>
                        
                        <div className="col-12">
                        <button type="submit" className="btn">Sign in</button>
                        </div>
                    </form>
                </div>
           </main>
        </Fragment>
    )
} 

