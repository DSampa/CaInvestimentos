import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
function Etapa1() {
    const history = useHistory();
    const [etapa1Form, setEtapa1Form] = useState({
        cliente_firstname: "",
        cliente_lastname: "",
        cliente_surname: "",
        cliente_email: "",
        cliente_contact: "",
        cliente_birthday: "",
        cliente_cpf: "",
        cliente_state: "",
        cliente_city: ""
    })
    async function nameUpdate(name: string) {
        var fullName = name || "";
        var result = {
            cliente_firstname: "",
            cliente_lastname: "",
            cliente_surname: "",
        };

        if (fullName.length > 0) {
            var nameTokens = fullName.match(/[A-ZÁ-ÚÑÜ][a-zá-úñü]+|([aeodlsz]+\s+)+[A-ZÁ-ÚÑÜ][a-zá-úñü]+/g) || [];
            console.log(nameTokens)

            

            if (nameTokens.length > 2) {
                result.cliente_firstname = nameTokens.slice(0, 1).join(' ');
            } else {
                result.cliente_firstname = nameTokens.slice(0,1).join(' ');
            }

            if (nameTokens.length > 3) {
                result.cliente_surname = nameTokens.slice(1, 2).join(' ');
                result.cliente_lastname = nameTokens.slice(2,4).join(' ');
            } else {
                result.cliente_surname = nameTokens.slice(-1).join(' ');
                result.cliente_lastname = "";
            }
        }
        setEtapa1Form({ ...etapa1Form, cliente_firstname: result.cliente_firstname, cliente_surname: result.cliente_surname, cliente_lastname: result.cliente_lastname })
    }
    return (
        <div className="cadastro-etapa_1-inicio-form">
            <div className="cadastro-etapa_1-form-holder">
                <div className="form-item etapa_1-form-item">
                    {etapa1Form.cliente_firstname && <p>{etapa1Form.cliente_firstname}</p>}
                    {etapa1Form.cliente_surname && <p>{etapa1Form.cliente_surname}</p>}
                    {etapa1Form.cliente_lastname && <p>{etapa1Form.cliente_lastname}</p>}
                    <label className="subtitulo-black etapa_1-titulo" htmlFor="">Nome</label>
                    <input type="text" id="name" autoComplete="off" onChange={(e) => { nameUpdate(e.target.value) }} />
                </div>
                <div className="form-item etapa_1-form-item">
                    <label className="subtitulo-black etapa_1-titulo" htmlFor="">Email</label>
                    <input type="text" id="email" autoComplete="off" />
                </div>
                <div className="form-item etapa_1-form-item">
                    <label className="subtitulo-black etapa_1-titulo" htmlFor="">Telefone</label>
                    <input type="text" id="contact" autoComplete="off" />
                </div>
                <div className="form-item etapa_1-form-item">
                    <label className="subtitulo-black etapa_1-titulo" htmlFor="">Data de Nascimento</label>
                    <input type="text" id="birthday" autoComplete="off" />
                </div>
                <div className="form-item etapa_1-form-item">
                    <label className="subtitulo-black etapa_1-titulo" htmlFor="">CPF</label>
                    <input type="text" id="cpf" autoComplete="off" />
                </div>
                <div className="form-item etapa_1-form-item">
                    <label className="subtitulo-black etapa_1-titulo" htmlFor="">Estado</label>
                    <select id="estado" autoComplete="off" >
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                        <option value="EX">Estrangeiro</option>
                    </select>
                </div>
                <div className="form-item etapa_1-form-item">
                    <label className="subtitulo-black etapa_1-titulo" htmlFor="">Cidade</label>
                    <input type="text" id="name" autoComplete="off" />
                </div>
                <div className="form-item etapa_1-form-item-button">
                    <div></div>
                    <button type="button">Continuar</button>
                </div>
            </div>
            <div className="cadastro-etapa_1-info-holder">
                <div className="cadastro-content-holder">
                    <div className="title-holder">
                        <img src="" alt="" />
                        <h3>
                            Segurança
                        </h3>
                    </div>
                    <span>
                        Invista o seu dinheiro com segurança, contando com diversas funcionalidades buscando a sua proteção!
                    </span>
                </div>
                <div className="cadastro-content-holder">
                    <div className="title-holder">
                        <img src="" alt="" />
                        <h3>
                            Credibilidade
                        </h3>
                    </div>
                    <span>
                        Contamos com dados em tempo real, além de noticias e informações sobre as ações, exclusivamente para você.
                    </span>
                </div>
                <div className="cadastro-content-holder">
                    <div className="title-holder">
                        <img src="" alt="" />
                        <h3>
                            Agilidade
                        </h3>
                    </div>
                    <span>
                        Conte com rapidez e agilidade em nossas plataformas.
                    </span>
                </div>
                <div className="cadastro-content-holder">
                    <div className="title-holder">
                        <img src="" alt="" />
                        <h3>
                            Especialistas
                        </h3>
                    </div>
                    <span>
                        Comece a investir com a experiência de grandes assessores do mercado financeiro.
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Etapa1