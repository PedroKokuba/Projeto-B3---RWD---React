import './Section4.css'
function Section4(){

    return(
        <section className="ipo">
            <div className="container__ipo">
                <p>Nosso foco é o <strong>IPO</strong>! E o que é isso?</p>
                <ul className='definicao__ipo'>
                    <li>É uma forma de investimento variável, ou seja, o retorno não pode ser dimensionado no momento da aplicação.</li>
                    <li>IPO vem do inglês e significa Oferta Pública Inicial. É o processo que uma empresa deve passar para abrir seu capital.</li>
                    <li>É a estreia de uma companhaia no mercado acionário.</li>
                    </ul>
                <img src="img/ipo.jpg" alt="Imagem representado um IPO"></img>
            </div>
        </section>
    )
}

export default Section4;