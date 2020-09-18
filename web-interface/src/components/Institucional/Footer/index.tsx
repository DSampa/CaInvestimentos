import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import searchICON from '../../../assets/images/icons/search.svg'
import newsletterICON from '../../../assets/images/icons/newsletter.svg'
import Logo from '../../../assets/images/cruzeiro_logo.png'
function Footer() {
    return (
        <nav className="footer">
            <div className="newsletter">
                <div className="newsletter-text-holder">
                    <div className="newsletter-image-holder">
                        <img src={newsletterICON} alt="" />
                    </div>
                    <span className="titulo" style={{ margin: 0 }}>
                        Cadastre-se para receber informações e novidades em seu e-mail
                    </span>
                </div>
                <div className="newsletter-form-holder">
                    <input type="text" name="" id="" />
                    <button className="newsletter-button">
                        <img className="newsletter-button-image" src={searchICON} alt="" />
                    </button>
                </div>
            </div>
            <footer>
                <div className="footer-content-holder">
                    <div className="footer-content">
                        <p className="titulo-black">
                            Cruzeiro Investimentos
                        </p>
                        <div className="footer-image-content">
                            <img src={Logo} className="footer-logo" alt="" />
                            <div className="footer-image-text">
                                <h5>
                                    Endereco: R. Galvão Bueno, 868 - Liberdade
                                </h5>
                                <h5>São Paulo, SP - Brasil</h5>
                                <h5>CNPJ: 09.368.907/0001-82</h5>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content">
                        <p className="titulo-black">
                            Sobre Nós
                        </p>
                        <span>
                            Nossa missão é Reinventar a maneira de Investimento, oferecendo aos nossos clientes um sistema ágil, além de diversos canais de atendimento com Consultores.
                        </span>
                    </div>
                    <div className="footer-content">
                        <p className="titulo-black">
                            Navegação
                        </p>
                        <div className="footer-navegacao-content">
                            <div className="footer-nav-item">
                                <Link to="/" className="footer-link">Inicio</Link>
                            </div>
                            <div className="footer-nav-item">
                                <Link to="/sobre" className="footer-link">Sobre Nós</Link>
                            </div>
                            <div className="footer-nav-item">
                                <Link to="/comece_investir" className="footer-link"></Link>
                            </div>
                            <div className="footer-nav-item">
                                <Link to="/palestras" className="footer-link">Workshops e Paletras</Link>
                            </div>
                            <div className="footer-nav-item">
                                <Link to="/blog" className="footer-link">Blog</Link>
                            </div>
                            <div className="footer-nav-item">
                                <Link to="/login" className="footer-link">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </nav>
    )
}

export default Footer