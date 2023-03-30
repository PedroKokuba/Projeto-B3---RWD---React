import "./Section6.css"
function Section6(){
    
    return(
        <section className="prospecto">
            <h2>PROSPECTO</h2>
            <ul>
                <li>É o documento mais importante para o investidor!</li>
                <li>Contém informações como: 
                    <ul className="lista__secundaria">
                        <li>Emissor</li> 
                        <li>Faixa de preço</li> 
                        <li>Período de reserva</li> 
                        <li>Precificação da oferta</li> 
                        <li>Oferta base</li>
                        <li>Liquidação </li>
                    </ul>
                </li>
                <li>Com o documento, podemos analisar e ter certeza se vale a pena investir ou 
não.</li>
            </ul>
        </section>
    )
}

export default Section6;