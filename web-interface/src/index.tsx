import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './assets/styles/global.css'
import Inicio from './pages/Inicio'
import Sobre from './pages/Sobre'
import ComeceInvestir from './pages/ComeceInvestir'
import Blog from './pages/Blog'
import Palestras from './pages/Palestras'
import Login from './pages/Login'
import Etapa1 from './pages/Cadastro/Etapa1'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Inicio}/>
      <Route path="/sobre" component={Sobre}/>
      <Route path="/comece_investir" component={ComeceInvestir}/>
      <Route path="/palestras" component={Palestras}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/login" component={Login}/>
      <Route path="/cadastro/etapa_1" component={Etapa1}/>      
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

