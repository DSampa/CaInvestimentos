import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import menuIcon from '../../../assets/images/icons/menu_arrows.png'
import "./styles.css"


function Sidebar() {
    const [collapse, toggleCollapse] = useState({state: '-138px', invert: 0})    
    function toggleMenu() {
        if(collapse.state === '-138px'){
            toggleCollapse({state: '0', invert: 180})
        } else {
            toggleCollapse({state: '-138px', invert: 0})
        }
    }
    return (
        <div className="sidebar">
            <div className="sidebar-container" style={{ left: collapse.state}}>
                <nav className="side-items-container">
                    <div className="side-nav-item">
                        <Link className="side-link" to="/">
                            Inicio
                        </Link>
                    </div>                    
                    <div className="side-nav-item">
                        <Link className="side-link" to="/sobre">
                            Sobre Nós
                        </Link>
                    </div>
                    <div className="side-nav-item">
                        <Link className="side-link" to="/comece_investir">
                            Comece a Investir
                        </Link>
                    </div>
                    <div className="side-nav-item">
                        <Link className="side-link" to="/palestras">
                            Workshops e Palestras
                        </Link>
                    </div>
                    <div className="side-nav-item">
                        <Link className="side-link" to="/blog">
                            Blog
                        </Link>
                    </div>
                    <div className="side-nav-item">
                        <Link className="side-link" to="/login">
                            Login
                        </Link>
                    </div>
                </nav>
                <div className="side-icons-holder">
                    <button type="button" onClick={toggleMenu} className="toggler-button">
                        <img src={menuIcon} alt="Expandir" style={{transform: `rotate(${collapse.invert}deg)`}}/>
                    </button>                    
                </div>
            </div>
        </div>

    )
}

export default Sidebar