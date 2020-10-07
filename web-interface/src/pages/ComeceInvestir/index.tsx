import React from 'react'
import './styles.css'
import LandingSideBar from '../../components/Institucional/Sidebar'
import background from '../../assets/images/background-login.jpg'

import imageChat from '../../assets/images/chat.jpeg'
import imageNuvem from '../../assets/images/nuvens.jpeg'
import imageConteudo from '../../assets/images/conteudo.jpg'
import imageTransferenciaRecurso from '../../assets/images/tranferenciaRecurso.png'

function ComeceInvestir(){
    return(
<body className="tag-body" >
       
     <div className="div-principal" >
     
    
 {/*-------------*/}
  {/*-------------*/}



    

  <LandingSideBar />
        <header className="container-header">

        <div className="landing-image-content" style={{ backgroundImage: `url(${background})` }}>
        <img className="img" src="https://images.squarespace-cdn.com/content/v1/5c94eaaba9ab950b1b87a3f0/1564062112507-85E7JWI13P815EKPH6S0/ke17ZwdGBToddI8pDm48kFAExOXtrNfVtwFHrct4EAAUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc5Anrr1fi3Hm8EHf_f3qXe9KbjTi1JJNGpXBWQEisknivHfFclH7VlfenNcw8oiUS/abrir+conta?format=750w" alt="imagem"></img>
        <input className="bot" type="button" name="button" value="ABRA JÁ SUA CONTA"></input> 
      
        <h2 className="Comece-a-investir">Comece a Investir </h2>
            <div className="box1">
                <h2 className="cruzeiro-investimentos">Cruzeiro Investimentos</h2>
                <p className="tag-p">Para que você possa ter multiplos benefício e fazer parte da melhor corretora desse Brasil. Abra a sua conta nesse exato momemnto de um modo simples rápido e fácil. Clicando no botão ao lado!</p>
                 
                 
                </div>
                
        </div>

     
         </header>
         
         {/*-------------------------------------------------------------------------------*/}

  
      <main className="conteiner-main">
     <div className="conteudo">

     <img src={imageConteudo} alt="" />
     </div>
      
    
      <div>

      </div>
      <div className="main-text1">
      <h2>1- Conteudo:</h2>
                <p className="text1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                
                <div className="nuvem">
                <img src={imageNuvem} alt="" />
                </div>
 
<div className="main-text2">

                <h2>2- Curadoria:</h2>
                <p className="text1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>

<div className="chat">
                <img src={imageChat} alt="" />
                </div>

<div className="main-text3">
<h2>3- Atendimento:</h2>
                <p className="text1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               
</div>

<br />
<div className="transferencia-recurso">

     <img src={imageTransferenciaRecurso} alt="" />
     </div>
<div className="main-text4">
<br />
<h2>4- Transferencia de Recursos:</h2>
                    <p className="text1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <h3 className="modalidade">Modalidade:</h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    <h3 className="banco">Banco:</h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    <h3 className="agencia">Agência:</h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </div>
      </main>


<aside className="conteiner-aside">

<div>
<img className="foto" src="https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/07/35-Maneiras-de-Como-Ganhar-Dinheiro-na-Internet-em-2019.png" alt="imagem-"></img>

<div className="aside1">

<h2>Transfencia de custodia:</h2>
                <p className="text1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>


<div className="aside2">

<h2>Vantagens de costudia na "CORRETORA" &nbsp;:</h2>
                <p className="text1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>

<div className="aside3">

<h2>Ganhe com a gente:</h2>
                    <p className="text1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>           
                    
</div>
<div className="copi">
&nbsp;  &nbsp;&#169; Outubro de 2020, Cruzeiro Investimentos.Todos os direitos reservados.
</div>
   

</div>
   
 
</aside>


 {/*-------------*/}
  {/*-------------*/}



    </div>
    </body>
    )
}
export default ComeceInvestir

