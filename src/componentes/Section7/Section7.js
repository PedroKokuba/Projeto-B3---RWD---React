import './Section7.css'

function Section7(){

    return(
        <section className="chat">  
            <p>Depois de aprender alguns conceitos, podemos dar uma explorada. Temos um chatbot com quem você consegue tirar informações sobre o prospecto e olhar se vale a pena o investimento em alguma empresa! </p>

            <div className="chatbot">
                <div>
                    <p className="chatbot__mensagem">Bem vindo ao chat! Como podemos te ajudar?</p>
                    <div className="barra__chatbot">
                        <div className="barra2__chatbot">
                            <input type="text" placeholder='Digite aqui: '/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section7;