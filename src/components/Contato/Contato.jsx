import React from 'react'
import Main from '../template/Main'
import './Contato.css'

//contato@sattra.com.br
//+55 47 2125-0087
//itajai-sc
//fazer sessão para enviar mensagem

function enviar(){

}


export default props =>
    <Main title="Fale Conosco">
        <div className="contentContato">

            <div class="column1">
                <p className="mb-0" > <i class="fa fa-map-marker" aria-hidden="true"></i> Itajaí - Santa Catarina</p>
                <p />
                <p className="mb-0" > <i class="fa fa-envelope" aria-hidden="true"></i> contato@sattra.com.br</p>
                <p/>
                <p class="mb-0"><i class="fa fa-phone" aria-hidden="true"></i> +55 47 2125-0087</p>
            </div>

            <div className="column2">
                
            </div>

        </div>
    </Main>