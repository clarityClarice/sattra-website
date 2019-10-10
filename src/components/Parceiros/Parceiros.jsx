import React from 'react'
import Main from '../template/Main'
import Imagem2 from '../../Assets/Images/Imagem2.png'
import Imagem3 from '../../Assets/Images/Imagem3.png'
import Imagem4 from '../../Assets/Images/Imagem4.png'
import Imagem5 from '../../Assets/Images/Imagem5.png'
import Imagem6 from '../../Assets/Images/Imagem6.png'


export default props =>
    <Main title="Parceiros" >
        <div className="display-4">Nossos Parceiros</div>
        <img id="parceiro1" src={Imagem5} />
        <img id="parceiro2" src={Imagem6} />
        <hr/>

        <div className="display-4">Nossos Clientes</div>

        <hr/>

        <div className="display-4">Nossas certificações</div>

        <img id="digifort" src={Imagem2}/>
        <img id="genetec" src={Imagem3}/>
        <hr/>


        <hr/>
        <p className="mb-0" > Inserir conteúdo aqui</p>
    </Main>