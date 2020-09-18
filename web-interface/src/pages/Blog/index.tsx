import React from 'react'
import './styles.css'
function Blog() {
    return (
        /**Aqui é o container todo do comece a investir */
        <fieldset id="container">
            <legend><h2>Comece a investir</h2></legend>
                <img className="imagem-position" src="/images/background-blog.jpg" alt="First slide"></img>
            <h2 className="class1">Cruzeiro Investimentos - Blog</h2>
          <div className="class2">
            <h3> você verá as principais notícias e destaques sobre Investimentos e Finanças, Politica em um âmbito global, conteudos sobre uma vasta váriedade de Investimentos.</h3>
            <h4>Começar a investir e fazer seu dinheiro render é o caminho para quem deseja mudar de vida e ter um futuro financeiro mais confortável. Muitas pessoas têm consciência da importância de poupar e demonstram a vontade de começar a investir, porém, esbarram no primeiro obstáculo: dar o primeiro passo.
Como tudo na vida, fazer algo pela primeira vez gera insegurança, principalmente pelo fato de não entender as estratégias de investimento. Mesmo sabendo o quanto a indenpendêcia financeira pode mudar a vida para melhor, inventamos desculpas para justificar nossa incompetência em cuidar do próprio dinheiro.
Quantas vezes você já se pegou falando algo do tipo: "queria muito, mas não tenho dinheiro", "não tenho tempo", "não sei por onde começar", vou investir quando souber tudo", e por ai vai.</h4>
        </div>
        <fieldset className="position">
                <legend><h2>Categoria</h2></legend>
                <fieldset className="position-categoria">
                    <input className="position-button" type="button" name="button" value="Saiba mais"></input>
                    <legend><b>Bolsa de balores</b></legend>
                    <p className="position-text">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. </p>    
                </fieldset>
                    <fieldset className="position-categoria2"> 
                        <input className="position-button" type="button" name="button" value="Saiba mais"></input>
                        <legend><b>Como começar e onde investir</b></legend>
                        <p className="position-text">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. </p>    
                    </fieldset>
                    <fieldset className="position-categoria3"> 
                        <input className="position-button" type="button" name="button" value="Saiba mais"></input>
                        <legend><b>Principais destaques</b></legend>
                        <p className="position-text">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. </p>    
        <fieldset className="posicao-curio">
                <legend><b><h2>Curiosidades</h2></b></legend>
                    <div>
                        <h3 className="titulo">As 3 principais coisas que todo novo investidor deve saber:</h3>
                    </div>
                    <div>
                        <h4 className="text-curio">Aproveite o poder da composição:</h4>
                         <img className="img-fluid" src="https://cointimes.com.br/wp-content/uploads/2019/12/investimentos-para-2020.jpg" alt="First-imagem"></img>
                         <p className="text">Você provavelmente já ouviu isso um milhão de vezes, mas é importante que você realmente o internalize de uma maneira que mude seu comportamento e reordene suas prioridades. Você ficará muito mais rico se começar a investir cedo. Tudo se deve a juros compostos e os diferenciais de resultados são surpreendentes.</p>
                    </div>
                    <div>
                    <h4 className="text-curio2">Adapte seu portfólio às circunstâncias, objetivos, tolerância a riscos e metas da sua vida:</h4> 
                    <img className="img-fluid2" src="https://edumoreira.com.br/wp-content/uploads/2019/03/investimento-em-renda-fixa.jpg" alt="First-imagem"></img>
                    <p className="text"> Você tem um trabalho a desempenhar como "gerente" do seu portfólio de investimentos. Esse trabalho depende de vários fatores, incluindo seus objetivos pessoais, nível de tolerância a riscos , objetivos, recursos, temperamento, perfil psicológico, faixa tributária, disposição para dedicar tempo e até mesmo preconceitos. Por fim, seu portfólio deve assumir a impressão de sua personalidade e situação única na vida.</p>
                    </div>
                    <div>
                    <h4 className="text-curio2">Pague um consultor qualificado para trabalhar com você para gerenciar seus assuntos financeiros:</h4>   
                    <img className="img-fluid3" src="https://dinheirama.com/wp-content/uploads/2014/01/20140130-dinheirama-destaque-idade-investimentos-conselhos-jovens-investidores.jpg" alt="First-imagem"></img>
                    <p className="text">Antes do surgimento da economia comportamental, era geralmente assumido que a maioria das pessoas era racional ao tomar decisões financeiras. Estudos produzidos pelos setores acadêmico, econômico e de investimento nas últimas décadas demonstraram o quão catastroficamente errado essa suposição se mostrou em termos de resultados do mundo real para os investidores. Tragicamente, a menos que uma pessoa tenha conhecimento, experiência, interesse e temperamento para ignorar as flutuações inerentes ao mercado, ela tende a fazer coisas extraordinariamente tolas.</p>
                    </div>
                    </fieldset>
                    </fieldset>
                </fieldset>
</fieldset>
    


        
    )
}
export default Blog