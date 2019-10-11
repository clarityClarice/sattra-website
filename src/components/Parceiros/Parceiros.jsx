import React from 'react'
import './Parceiros.css'
import Main from '../template/Main'

import Imagem2 from '../../Assets/Images/Imagem2.png'
import Imagem3 from '../../Assets/Images/Imagem3.png'
import Imagem5 from '../../Assets/Images/Imagem5.png'
import logoPorto from '../../Assets/Images/logoPorto.png'
import CamaraVereadores from '../../Assets/Images/CamaraVereadores.png'
import Polyterminais from '../../Assets/Images/Polyterminais.png'
import Logibras from '../../Assets/Images/logibras.gif'
import Magnetic from '../../Assets/Images/Magnetic.png'
import Pumatronix from '../../Assets/Images/pumatronix.png'
import Axix from '../../Assets/Images/axis.png'

export default props =>
    <Main title="Parceiros" >
        <div className="display-4">Nossos Parceiros</div>
            <div className="images">
                <img id="parceiro1" src={Imagem5} alt="digicon" />
                <img id="parceiro2" src={Magnetic} alt="Magnetic" />
                <img id="parceiro3" src={Pumatronix} alt="Pumatronix" />
                <img id="parceiro4" src={Axix} alt="Axix" />
            </div>
        <hr/>

        <div className="display-4">Nossos Clientes</div>
            <div className="images">
                <img id="logoporto" src={logoPorto} alt="Porto de Itajaí" />
                <img id="logocamara" src={CamaraVereadores} alt="Camara de vereadores de Itajaí" />
                <img id="polyterminais" src={Polyterminais} width="300" alt="Polyterminais" />
                <img id="logibras" src={Logibras} alt="Logibras" />
            </div>
        <hr/>

        <div className="display-4">Nossas certificações</div>
        <div className="images">
            <img id="digifort" src={Imagem2} alt="digifort" />
            <img id="genetec" src={Imagem3} alt="genetec"/>
        </div>
        <hr/>
    </Main>