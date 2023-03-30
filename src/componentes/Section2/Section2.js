import './Section2.css'
function Section2(){
    return(
        <section className="secundario">
            <h2>Estamos sempre sonhando</h2>
            <div className="secundario__bloco">
                <div className="secundario__bloco__itens">
                    <img src="img/setup.jpg" alt="Setup"/>
                    <p>Viagens</p>
                </div>
                <div id="secundario__bloco__itens" className="secundario__bloco__itens">
                    <p>Bens materiais</p>
                    <img src="img/viagemFigma.jpg" alt="Viagem de avisão"/>
                    <p>Casa própria</p>
                </div>
                <div className="secundario__bloco__itens">
                    <img src="img/casaFigma.jpg" alt="Casa própria"/>
                    <p>Estudos</p>
                </div>
            </div>
        </section>

    )
}

export default Section2;