import React from 'react'
import './Parceiros.css'
import Main from '../template/Main'

import Imagem2 from '../../Assets/Images/Imagem2.png'
import Imagem5 from '../../Assets/Images/Imagem5.png'
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
                
            </div>
            <div className="images">
                <img id="parceiro4" src={Axix} alt="Axix" />
                <img id="digifort" src={Imagem2} alt="digifort" />
            </div>

    </Main>