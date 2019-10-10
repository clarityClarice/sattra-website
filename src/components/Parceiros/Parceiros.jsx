import React from 'react'
import './Parceiros.css'
import Main from '../template/Main'
import Imagem2 from '../../Assets/Images/Imagem2.png'
import Imagem3 from '../../Assets/Images/Imagem3.png'
import Imagem5 from '../../Assets/Images/Imagem5.png'
import Imagem6 from '../../Assets/Images/Imagem6.png'
import logoPorto from '../../Assets/Images/logoPorto.png'


export default props =>
    <Main title="Parceiros" >
        <div className="display-4">Nossos Parceiros</div>
            <div className="images">
                <img id="parceiro1" src={Imagem5} alt="digicon" />
                <img id="parceiro2" src={Imagem6} alt="Alca" />
            </div>
        <hr/>

        <div className="display-4">Nossos Clientes</div>
            <div className="images">
                <img id="logoporto" src={logoPorto} alt="Porto de Itajaí" />
            </div>
        <hr/>

        <div className="display-4">Nossas certificações</div>

        <img id="digifort" src={Imagem2} alt="digifort" />
        <img id="genetec" src={Imagem3} alt="genetec"/>
        <hr/>
    </Main>