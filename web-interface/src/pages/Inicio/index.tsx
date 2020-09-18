import React from 'react'
import './styles.css'
import LandingSideBar from '../../components/Institucional/Sidebar'
import Input from '../../components/Institucional/Input'
import InputSelect from '../../components/Institucional/Selects/estado'
import Footer from '../../components/Institucional/Footer'

import background from '../../assets/images/background-login.jpg'
import rendaVarIcon from '../../assets/images/renda_variavel.png'
import rendaFixaIcon from '../../assets/images/renda_fixa.png'
import fundoImobIcon from '../../assets/images/fundo_imobiliario.png'
import fundoInvestIcon from '../../assets/images/fundos_investimentos.png'
import stonks from '../../assets/images/stonks.png'

function Inicio() {
    return (
        <div className="page-container">
            <LandingSideBar />
            <div className="page-content">
                <div className="landing-image-content" style={{ backgroundImage: `url(${background})` }}>
                    <div className="landing-content">
                        <div className="landing-text-content">
                            <h3 className="titulo">
                                Cruzeiro Investimentos
                            </h3>
                            <h5>
                                Nossa missão é Reinventar a maneira de Investimento, oferecendo aos nossos clientes um sistema ágil,
                                além de diversos canais de atendimento com Consultores.
                            </h5>
                            <h5>
                                Você terá em nossas Plataformas Notícias, Comentários, Informações sobre diversos assuntos,
                                política de uma visão de Investidores Nacionais e Internacionais.
                            </h5>
                        </div>
                        <div className="landing-text-content">
                            <h3 className="titulo">
                                Workshops e Palestras
                            </h3>
                            <h5>
                                Através de nossa Plataforma Online, você terá acesso aos nossos Cursos, Palestras e Workshops, que serão ministrados por
                                Especialistas do Mercado de Ações, com dicas, aulas, informações sobre diversas opções.
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="opcoes-text-content">
                    <p className="titulo-black">
                        Opções de Investimento
                    </p>
                    <div className="opcoes-card">
                        <div className="opcoes-imagem">
                            <img src={rendaVarIcon} alt="" />
                        </div>
                        <div className="opcoes-text-holder">
                            <p className="titulo-centralizado-black">
                                Renda Variavel
                            </p>
                            <span>
                                A renda variável é para todo mundo. Isso mesmo!
                                Seja você um iniciante ou veterano no mundo dos investimentos, é preciso ter em mente que essa é uma opção viável e muito interessante.
                                Aqueles que não toleram a ideia de perder dinheiro e valorizam demais a segurança podem não aproveitar bem essa opção.
                                Ainda assim, a renda variável deve ser considerada.
                                A diversificação na carteira de investimentos dilui o risco e proporciona ganhos superiores aos de uma estratégia focada apenas em renda fixa.
                                Portanto, podemos dizer que qualquer pessoa que tenha o objetivo de aumentar seu patrimônio de maneira inteligente e a disposição de correr
                                um certo risco pode — e deve — inserir ativos de renda variável em seu planejamento.
                            </span>
                        </div>
                    </div>
                    <div className="opcoes-card">
                        <div className="opcoes-imagem">
                            <img src={rendaFixaIcon} alt="" />
                        </div>
                        <div className="opcoes-text-holder">
                            <p className="titulo-centralizado-black">
                                Renda Fixa
                            </p>
                            <span>
                                Investimentos em renda fixa são aqueles em que, no momento da contratação, você pode prever qual será a regra de rentabilidade dos ativos.
                                Em outras palavras, ao aplicar o seu dinheiro, saberá quanto terá de retorno ao final do prazo daquele título e receberá rendimentos provenientes
                                de juros. É o investimento realizado diretamente em Títulos Públicos e Privados de Renda Fixa.
                                Quando você compra um título de Renda Fixa, você está emprestando dinheiro ao emissor do papel, que pode ser um banco, uma empresa ou mesmo o Governo.
                                Em troca, recebe uma remuneração por um determinado prazo, na forma de juros e/ou correção monetária, podendo receber, ainda, parcelas chamadas
                                amortizações.
                            </span>
                        </div>
                    </div>
                    <div className="opcoes-card">
                        <div className="opcoes-imagem">
                            <img src={fundoImobIcon} alt="" />
                        </div>
                        <div className="opcoes-text-holder">
                            <p className="titulo-centralizado-black">
                                Fundos Imobiliarios
                            </p>
                            <span>
                                Um fundo imobiliário é uma espécie de grupo de investidores, que reúnem seus recursos(capital) para que sejam aplicados em conjunto no mercado
                                imobiliário. A dinâmica mais tradicional é que o dinheiro seja usado na construção ou na aquisição de imóveis, que depois sejam locados ou arrendados.
                                Os ganhos obtidos com essas operações são divididos entre os participantes, com um contrato, na proporção em que cada um aplicou. As decisões sobre o
                                que fazer com os recursos – tomadas pelo gestor do fundo – precisam seguir objetivos e políticas pré-definidos. Os investimentos podem ser
                                bem-sucedidos ou não, e isso determinará a valorização ou a desvalorização das cotas dos fundos.
                            </span>
                        </div>
                    </div>
                    <div className="opcoes-card">
                        <div className="opcoes-imagem">
                            <img src={fundoInvestIcon} alt="" />
                        </div>
                        <div className="opcoes-text-holder">
                            <p className="titulo-centralizado-black">
                                Renda Variavel
                            </p>
                            <span>
                                A renda variável é para todo mundo. Isso mesmo!
                                Seja você um iniciante ou veterano no mundo dos investimentos, é preciso ter em mente que essa é uma opção viável e muito interessante.
                                Aqueles que não toleram a ideia de perder dinheiro e valorizam demais a segurança podem não aproveitar bem essa opção.
                                Ainda assim, a renda variável deve ser considerada.
                                A diversificação na carteira de investimentos dilui o risco e proporciona ganhos superiores aos de uma estratégia focada apenas em renda fixa.
                                Portanto, podemos dizer que qualquer pessoa que tenha o objetivo de aumentar seu patrimônio de maneira inteligente e a disposição de correr
                                um certo risco pode — e deve — inserir ativos de renda variável em seu planejamento.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="informativo-text-content">
                    <div className="informativo-image-holder">
                        <p className="titulo-centralizado">
                            Saia já da Poupança!
                        </p>
                        <img src={stonks} alt="" />
                    </div>
                    <div className="informativo-text-holder">
                        <p className="titulo">
                            Abra já a sua Conta Com Especialistas, você irá acompanhar com seus próprios olhos a rentabilidade do seu dinheiro.
                        </p>
                        <span>
                            A renda variável é para todo mundo. Isso mesmo! Seja você um iniciante ou veterano no mundo dos investimentos,
                            é preciso ter em mente que essa é uma opção viável e muito interessante.
                            Aqueles que não toleram a ideia de perder dinheiro e valorizam demais a segurança podem não aproveitar bem essa opção.
                            Ainda assim, a renda variável deve ser considerada. A diversificação na carteira de investimentos dilui o risco e proporciona ganhos superiores aos de
                            uma estratégia focada apenas em renda fixa. Portanto, podemos dizer que qualquer pessoa que tenha o objetivo de aumentar seu patrimônio de maneira
                            inteligente e a disposição de correr um certo risco pode — e deve — inserir ativos de renda variável em seu planejamento.
                        </span>
                    </div>
                </div>
                <div className="cadastro-form-holder">
                    <div className="cadastro-form-content">
                        <div className="form-item"><Input name="nome" label="Nome" /></div>
                        <div className="form-item"><Input name="email" label="Email" /></div>
                        <div className="form-item"><Input name="contato" label="Contato" /></div>
                        <div className="form-item"><Input name="data_nasc" label="Data de Nascimento" /></div>
                        <div className="form-item"><Input name="cpf" label="CPF" /></div>
                        <div className="form-item"><InputSelect name="estado" label="Estado" /></div>
                    </div>
                    <div className="form-button-holder">
                        <button type="button">
                            Cadastrar
                        </button>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}
export default Inicio