import React from 'react'
import Main from '../template/Main'
import Teste from '../../Assets/Images/Teste.jpg'
import Sattra from '../../Assets/Videos/Sattra.mp4'
import './Home.css'

function Home(){
    
    return(
        <Main title="Home">
            <div className="container">
                <div className="imgContainer">
                    <img src={Teste} alt="teste" />
                </div>
                
                <div className="video">
                    <div className="videoContainer">
                        <video autoplay controls>
                            <source  src={Sattra} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> 
                    </div>
                    
                    <div className="videoContainer">
                        <video  controls>
                            <source src={Sattra} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> 
                    </div>
                </div>
                <div className="bodyText">
                    <p> <b>Sattra</b> é uma empresa de sistemas de automação e tecnologia para terminais e recintos alfandegários. 
                            Nossa equipe é formada por profissionais que podem elaborar, prestar consultoria e executar projetos em recintos alfandegados em geral. 
                            Apresentamos soluções <b>inovadoras</b> e de vanguarda para reconhecimento de placas, containers e vagões e automação dos Gates portuários (OCR)- Nossa <b>exclusiva solução</b> que não utiliza de sensores para reconhecer um caminhão no gate.
                            Utilizamos de <b>alta tecnologia</b> com <b>redução de custos</b> operacionais e <b>infraestrutura mínima</b>! </p>
                </div>
                
            </div>
        </Main>
    )
}



export default Home;