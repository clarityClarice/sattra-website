import React from 'react'
import Main from '../template/Main'
import './Empresa.css'

export default props =>
    <Main title="Empresa" >
        <div className="content">
            <h1>
                <p>Sobre nós</p>
            </h1>
            <p>
            Somo uma empresa brasileira que oferece soluções inteligentes, especificas ou customizadas. Realizamos projetos e consultoria para portos, terminais alfandegados, não alfandegados, industrias e comércio em geral. Oferecemos sistemas de segurança em vídeo (CFTV) e câmeras IP, sistema de identificação de placas, contêineres e sistema de controle de acesso web. Atuamos com sistemas de segurança dos melhores e maiores fabricantes mundiais. Possuímos equipe de desenvolvimento próprio para controle de acesso e sistema de identificação de placas e containers. Inovação e melhoria contínua em todas as nossas soluções. 
            </p>
            <h2>
                <i class="fa fa-puzzle-piece"></i> Missão 
            </h2>
            Fornecer ao mercado corporativo soluções robustas de monitoramento em vídeo, controle de acesso e leitura veicular ANPR/LPR e ACCR (OCR de placas, containers e vagões) e satisfazer as necessidades de nossos clientes, com ética, transparência, qualidade e inovação tecnológica, oferecendo sempre produtos e serviços com excelência e qualidade.
            <p />
            <h2>
                <i class="fa fa-eye"></i> Visão 
            </h2>
            Ser reconhecida como referência no seu segmento, destacando-se pelo profissionalismo, inovação, e satisfação de seus clientes.
            < p/>
            <h2>
            <i class="fa fa-users"></i> Valores 
            </h2>
            Comprometimento, transparência, competência, qualidade, respeito e ética.
            <hr/>
            <div className="column2">
                <p className="mb-0" > <i className="fa fa-map-marker" aria-hidden="true"></i> Itajaí - Santa Catarina</p>
                <p />
                <p className="mb-0" > <i className="fa fa-envelope" aria-hidden="true"></i> contato@sattra.com.br</p>
                <p/>
                <p className="mb-0"><i className="fa fa-phone" aria-hidden="true"></i> +55 47 2125-0087</p>
            </div>
        </div>
    </Main>