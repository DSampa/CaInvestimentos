import React from 'react'
import './styles.css'
function Sobre() {
    return (
        <body>
            <div>
                <fieldset id="container">
                    <legend><h2>Introdução</h2></legend>
                    <h2 className="texto" >Quem somos?</h2>
                    <img className="image-p" src="http://www.pngall.com/wp-content/uploads/5/Money-Investment-PNG-Picture.png" alt="imagem-sobre"></img>
                    <p className="texto-sobre"> A Cruzeiro Analytics é uma empresa de investimentos, cujo sonho é poder possibilitar para o máximo de pessoas de diferentes idades, regiões e nacionalidades um conhecimento avançado e amplo sobre o mercado financeiro e de como saber a melhor forma de investir de acordo com seus objetivo. A Cruzeiro Analyics além de banco tambem atua como uma corretorra, tendo assim todas as informações importantes sobre o mundo das finanças.</p>
                </fieldset>
                <div>
                    <fieldset id="container">
                        <legend><h2>Diferenciais em Comunicação e Suporte</h2></legend>
                        <h2 className="texto1" >Duvidas? Suporte? Consultoria?</h2>
                        <img className="image-suporte" src="https://i.pinimg.com/736x/69/1d/78/691d784832db9d221f4ec0ac9759da89.jpg" alt="imagem-suporte"></img>
                        <p className="texto-sobre"> </p>
                        <p>Nossa Corretora conta com um Canal de Atendimento para cada necessidade sua!</p>
                        <p className="texto3">Na hora de conseguir resolver um problema, estruturar um processo ou lidar com objeções é preciso saber lidar com este momento. Diante disso, alguns princípios podem ajudar no bom atendimento ao cliente.
                        Comunicação: a comunicação é à base de tudo. Procure expor todas as informações de modo claro e objetivo.
                        Satisfação no atendimento: este ponto exige que todos os problemas ou dúvidas sejam convertidos em satisfação e fidelização.
                        Antipatia, jamais! O atendimento precisa se basear na simpatia e empatia do usuário
                        Outro de nosso diferencial é que nossas clientes terão acesso ao número particular de seu gerente ou consultor, para assim ter mais facilidades com dúvidas ou qualquer outro problema! Sua satisfação em ser bem atendido é nossa prioridade.
</p>

                    </fieldset>
                    <fieldset id="container1">
                        <legend><h2>Nosso Proposito</h2></legend>
                        <h2 className="texto1" >Deixe seu Feedback no nosso Blog</h2>
                        <a href="http://localhost:3000/blog"> Blog da Corretora</a>
                        <h3 className="text-blog1">Informações sobre o blog</h3>
                        <p className="texto-prop">No nosso blog você encontrará noticias, informações e dados sobre o mercado financeiro e ações para te auxiliar em decisões, ficar por dentro de tudo para que possa ter sua liberdade financeira.
                         Em nosso você blog poderá criar uma conta em nosso corretora  de um modo simples e fácil
                           </p>
                        <img className="image-prop" src="https://s.clipartkey.com/mpngs/s/49-497739_investment-stock-market-clipart.png" alt="imagem-sobre"></img>
                        <div className="text5">Não tem cadastro?
                            <a href="http://localhost:3000/blog">Inscreva-se</a>
                        </div>
                    </fieldset>
                    <fieldset id="container4">
                    <legend><h2>Nossos números</h2></legend>
                    <p>Central de Atendimento: 0800 15 100</p>
                    <p>Suporte e ajuda: 4051-8725 </p>
                    <p>Nossos atendimentos estão disponiveis por 24hr</p>
                    <p>Para poder solucionar qualquer dúvida ou problema que tenha a qualquer hora! </p>
                </fieldset>
                <fieldset id="container5">Não perca tempo e 
                    <a href="http://localhost:3000/blog">comece a investir</a>
                    <p>Não perca essa grande oportunidade de mudar a sua vida e ter a grande e esperada liberdade financeira. Venha fazer parte do nosso time! estamos esperando por você!</p>
               ,    <div>Já é membro? faça seu 
                   <a href="http://localhost:3000/login">Login</a>
                   <p>Ligue para algum de nossos números e tire suas dúvidas e venha para a melhor corretora desse Brasil! Venha fazer parte desse grande time!</p>
               </div>
                </fieldset>
               

                
                </div>
            </div>


        </body>

    )
}
export default Sobre