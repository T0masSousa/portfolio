//IMPORT
import React from 'react';
import HomepageImage from '../Imgs/HomepageImage2.png';

//CSS
import "../index.css";

//FUNÇÃO QUE EXPORTA
const HomepageContent = () => {

    //VAR QE VAI ESCREVER O PARARAFO DA INFORMACAO
const info ="I welcome you to my Portfolio. I am a Full Stack Developer and I am currently studying at the University of Aveiro. In this portfolio, I'll show you some of my projects, where I will identify the languages I have used and you will get to know me a little bit better.";

 
    return(
        <div>
            <div className="container">
                <div className="row pb-5 mb-5">
                    <div className="col-md-6 text-center">
                         <img src={HomepageImage} alt="Illustration Representing a Web Developer at their job." className="img-fluid" style={{ maxHeight: window.innerWidth <= 768 ? '300px' : '450px'}} />
                    </div>  
                    <div className="col-md-6 mt-auto mb-auto">                        
                    <div>
                    <h4 className='text-start text-white pb-3'>Hi! My name is <n className="fw-bolder coloredText">Tomás Sousa</n></h4>

                        <p className='fs-6 text-white'>{info}</p>
                    </div>
                            
                    </div>           
                </div>
            </div>
        </div>
    
    )

}


//EXPORT PARA AS OUTRAS PÁGINAS
export default HomepageContent;