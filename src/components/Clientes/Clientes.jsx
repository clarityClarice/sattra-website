import React from 'react'
import Main from '../template/Main'

import logoPorto from '../../Assets/Images/logoPorto.png'
import CamaraVereadores from '../../Assets/Images/CamaraVereadores.png'
import Polyterminais from '../../Assets/Images/Polyterminais.png'
import Logibras from '../../Assets/Images/logibras.gif'

export default props =>
    <Main title="Clientes">
        <div className="display-4">Nossos Clientes</div>
            <div className="images">
                <img id="logoporto" src={logoPorto} alt="Porto de Itajaí" />
                <img id="logocamara" src={CamaraVereadores} alt="Camara de vereadores de Itajaí" />
            </div>
            <div className="images">
            <img id="polyterminais" src={Polyterminais} width="300" alt="Polyterminais" />
                <img id="logibras" src={Logibras} alt="Logibras" />
            </div>
    </Main>