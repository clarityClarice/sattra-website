import React from 'react'
import Main from '../template/Main'
import Sattra from '../../Assets/Videos/Sattra.mp4'
import './Home.css'

function Home(){
    
    return(
        <Main title="Home">
            <div className="display-4">Bem-vindo!</div>
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
        </Main>
    )
}



export default Home;