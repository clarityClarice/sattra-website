import React from 'react'
import Main from '../template/Main'
import './Contato.css'
//contato@sattra.com.br
//+55 47 2125-0087
//itajai-sc
//fazer sessão para enviar mensagem

export default props =>
    <Main title="Fale Conosco">
        <div className="contentContato">
            <div className="column1">
            <iframe allowTransparency="true" height="800" width="80%" id="contactform123" name="contactform123" marginwidth="0" marginheight="0" frameborder="0" src="//www.123formbuilder.com/my-contact-form-5081709.html">
                <p>
                    Your browser does not support iframes. The contact form cannot be displayed. Please use another contact method (phone, fax etc)
                </p>
            </iframe>
            </div>

            
            <div className="column2">
                <p className="mb-0" > <i className="fa fa-map-marker" aria-hidden="true"></i> Itajaí - Santa Catarina</p>
                <p />
                <p className="mb-0" > <i className="fa fa-envelope" aria-hidden="true"></i> contato@sattra.com.br</p>
                <p/>
                <p className="mb-0"><i className="fa fa-phone" aria-hidden="true"></i> +55 47 2125-0087</p>
            </div>

        </div>
    </Main>