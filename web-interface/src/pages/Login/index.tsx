import React, { useState } from 'react'
import Input from '../../components/Dashboard/Input'
import loginBG from '../../assets/images/login2.jpg'
import './styles.css'
import api from '../../services/api'
import { login } from '../../services/auth';
import { useHistory } from 'react-router-dom'
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    async function signIn() {
        if (!email || !password) {
            setError("Você não inseriu dados válidos")
        } else {
            let response = await api.post('/funcionario_api/login', { email, password })
            login(response.data)
            history.push('/dashboard')
        }
    }
    return (
        <div className="inicio-container">
            <div className="login-text-content" style={{ backgroundImage: `url(${loginBG})` }}>
                <div className="login-text-holder">
                    <div className="text-holder">
                        <h3 className="titulo-black">
                            Ainda não abriu a sua conta?
                        </h3>
                        <span>
                            Opere em conjunto de uma equipe de analistas
                        </span>
                        <div className="text-button-holder">
                            <a href="">
                                Abrir minha Conta
                            </a>
                        </div>
                    </div>
                    <div className="text-holder">
                        <h3 className="titulo-black">
                            Possui Dúvidas, Gostaria de nos conhecer?
                        </h3>
                        <span>
                            Acesse Já o nosso Homebroke e conheça nosso sistema
                        </span>
                        <div className="text-button-holder">
                            <a href="">
                                Acessar Dashboard
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-form-content">
                <div className="login-form-holder">
                    {error && <p>{error}</p>}
                    <Input name="email" label="Email" onChange={(e) => { setEmail(e.target.value) }} />
                    <Input name="password" label="Senha" type="password" onChange={(e) => { setPassword(e.target.value) }} />
                    <div className="login-button-holder">
                        <button type="button" className="login-button" onClick={signIn}>
                            Entrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login