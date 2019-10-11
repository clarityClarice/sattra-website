import React from 'react'
import Main from '../template/Main'
import Imagem1 from '../../Assets/Images/Imagem1.jpg'
import Teste from '../../Assets/Images/Teste.jpg'
import Sattra from '../../Assets/Videos/Sattra.mp4'
import './Home.css'

class Home extends React.Component {
    componentDidMount(){
        var slideIndex = 0;
        showSlides();

        function showSlides() {
            var slides = document.getElementsByClassName("mySlides");
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length && slides[0]) {slideIndex = 1}  
            slides[slideIndex-1].style.display = "block";  
            if(slides[0]){
                setTimeout(showSlides, 5000); 
            }
            
        }
    }
    render() {
        return(
            <Main title="Home">
                <p></p>
                <div className="container">
                    <div class="slideshow-container">

                        <div className="mySlides fader">
                            <img src={Teste} width="800" height="300" alt="teste" />
                        </div>
                        <div className="mySlides fader">
                            <img src={Imagem1} width="800" height="300" alt="imagem 1" />
                        </div>
                    </div>

                    <div className="bodyText">
                        <p> <b>Sattra</b> é uma empresa de sistemas de automação e tecnologia para terminais e recintos alfandegários. 
                                Nossa equipe é formada por profissionais que podem elaborar, prestar consultoria e executar projetos em recintos alfandegados em geral. 
                                Apresentamos soluções <b>inovadoras</b> e de vanguarda para reconhecimento de placas, containers e vagões e automação dos Gates portuários (OCR)- Nossa <b>exclusiva solução</b> que não utiliza de sensores para reconhecer um caminhão no gate.
                                Utilizamos de <b>alta tecnologia</b> com <b>redução de custos</b> operacionais e <b>infraestrutura mínima</b>! </p>
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
                    
                </div>
            </Main>
        )
    }
}


export default Home;