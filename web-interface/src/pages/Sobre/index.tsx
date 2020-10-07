import React from 'react'
import './styles.css'
import LandingSideBar from '../../components/Institucional/Sidebar'
import background from '../../assets/images/background-login.jpg'


function Sobre() {
    return (
        <div className="page-container">
            <LandingSideBar />
            <div className="page-content">
                <div className="landing-image-content" style={{ backgroundImage: `url(${background})` }}>
                    <div className="landing-content">
                        <div className="landing-text-content">
                            <h3 className="titulo">
                                Quem somos?
                            </h3>
                            <h3> A Cruzeiro Analytics é uma empresa de investimentos, cujo sonho é poder possibilitar para o máximo de pessoas de diferentes idades, regiões e nacionalidades um conhecimento avançado e amplo sobre o mercado financeiro e de como saber a melhor forma de investir de acordo com seus objetivo. A Cruzeiro Analyics além de banco tambem atua como uma corretorra, tendo assim todas as informações importantes sobre o mundo das finanças.</h3>
                        </div>
                    </div>
                </div>
                <div className="opcoes-text-content">
                    <p className="titulo-black">
                        Diferenciais em Comunicação e Suporte
                    </p>
                    <h4 className="titulo-black">
                        Duvidas? Suporte? Consultoria?
                    </h4>

                    <img className="image-suporte" src="https://i.pinimg.com/736x/69/1d/78/691d784832db9d221f4ec0ac9759da89.jpg" alt="imagem-suporte"></img>
                    <div className="comunicacao">
                        <h4 className="costum-text">Nossa Corretora conta com um Canal de Atendimento para cada necessidade sua!</h4>
                        <article className="textinho" >Na hora de conseguir resolver um problema, estruturar um processo ou lidar com
                        objeções é preciso saber lidar com este momento. Diante disso, alguns princípios
                        podem ajudar no bom atendimento ao cliente.
                        Comunicação: a comunicação é à base de tudo. Procure expor todas as informações de modo claro e objetivo.
                        Satisfação no atendimento: este ponto exige que todos os problemas ou dúvidas sejam convertidos em satisfação e fidelização.
                        Antipatia, jamais! O atendimento precisa se basear na simpatia e empatia do usuário
                        Outro de nosso diferencial é que nossas clientes terão acesso ao número particular de seu gerente ou consultor, para assim ter mais facilidades com dúvidas ou qualquer outro problema! Sua satisfação em ser bem atendido é nossa prioridade.


                        </article>
                    </div>
                </div>
                <div className="informativo-text-content">
                    
                        <p className="titulo-proposito">
                            Nosso Proposito
                        </p>

                        <div className="tex">
                            <h3 className="titulo">Deixe seu Feedback no nosso Blog:</h3><br />
                            <a className="bot-login" href="http://localhost:3000/blog"> Blog da Corretora</a><br /><br />
                            <h3 className="text-blog1">Informações sobre o blog</h3>
                                <article className="texto-informacao-blog" >No nosso blog você encontrará noticias, informações e dados sobre o mercado financeiro e ações para te auxiliar em decisões, ficar por dentro de tudo para que possa ter sua liberdade financeira.
                            Em nosso você blog poderá criar uma conta em nosso corretora  de um modo simples e fácil.
                            </article>
                            <h3 className="pergunta-cadastro">Não tem cadastro?</h3><a className="bot-login" href="http://localhost:3000/login">Inscreva-se</a>
                             
                        </div>
                        <img className="imag" src="https://s.clipartkey.com/mpngs/s/49-497739_investment-stock-market-clipart.png" alt="imagem-sobre"></img>        



                        <div className="texto-comece-investir">
                            <h2 className="titulo">Não perca tempo e : </h2>
                            <h3><a href="http://localhost:3000/comece_investir">Comece a investir</a></h3>
                            <p className="texto0">Não perca essa grande oportunidade de mudar a sua vida e ter a grande e esperada liberdade financeira. Venha fazer parte do nosso time! estamos esperando por você!</p>
                        <div id="pergunta-membro">Já é membro? faça seu <h3><a href="http://localhost:3000/login">Login</a></h3>
                                <p className="texto0">Ligue para algum de nossos números e tire suas dúvidas e venha para a melhor corretora desse Brasil! Venha fazer parte desse grande time!</p>
                            </div><br />
                            <h4 className="texto-numero">Nossos números:</h4><br /><br />
                            <div className="numero-corretora">
                            <p>Central de Atendimento: 0800 15 100</p>
                                <p>Suporte e ajuda: 4051-8725 </p>
                                <h3>Nossos atendimentos estão disponiveis por 24hr</h3>
                                <h3>Para poder solucionar qualquer dúvida ou problema que tenha a qualquer hora! </h3>
                                </div>
                        </div>
                               

                        

                    </div>
                </div>




            </div>


        









    )
}
export default Sobre