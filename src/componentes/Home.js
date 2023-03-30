import React from "react";
import './Home.css'
import {Link} from 'react-router-dom'


export default function Home(){

    return(
        <>
            <section>
                <h1>Comece a entender sobre mercado financeiro</h1>
                <p className="container__abertura__subtitulo">Iremos apresentar conceitos básicos para iniciar a sua independência financeira</p>
                <Link className="container__abertura__botao" to="/PaginaPrincipal">Vamos lá?</Link>
            </section>
        
        </>
    )




}