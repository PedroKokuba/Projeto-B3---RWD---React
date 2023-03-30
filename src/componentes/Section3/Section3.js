import './Section3.css'

function Section3(){
    
    return(
        <section  className="formas__investir">
            <p>Temos diversas formas para conquistarmos nossos sonhos</p>
                <div className="formas__investir__texto">
    
                <div className='container'>
                        <p>Existem investimentos de renda fixa:</p>
                            <ul>
                            <li> Títulos de Tesouro Direto</li>
                            <li> Letras de crédito</li>
                            <li> Certficado de depósito bancário</li>
                            <li> Debêntures</li>
                        </ul>
                        <img src="img/investimento-economico.png" alt="Imagem ilustrando o retorno do investimento"/>
                </div>

                    <div className="container"> 
                        <img src="img/retorno-do-investimento.png" alt="Imagem ilustrando o retorno do investimento"/>
                        <p>Existem investimentos de renda variável:</p>
                        <ul>
                            <li> Câmbio e criptomoedas</li>
                            <li> Contratos de derivativos</li>
                            <li> Cotas de fundos imobiliários</li>
                            <li> IPO*</li>
                        </ul>
                    </div>

                </div>
        </section>
    )
}

export default Section3;