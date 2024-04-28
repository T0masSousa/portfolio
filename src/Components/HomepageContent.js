//IMPORT
import React from 'react';
import HomepageImage from '../Imgs/HomepageImage.png';

//FUNÇÃO QUE EXPORTA
const HomepageContent = () => {

    //VAR QE VAI ESCREVER O PARARAFO DA INFORMACAO
const info ="I welcome you to my Portfolio. I am a Full Stack Developer and I am currently studying at the University of Aveiro. In this portfolio, I'll show you some of my projects, where I will identify the languages I have used and you will get to know me a little bit better.";
const hostinfo="This portfolio has been fully made be me and is hosted thanks to Github's Github Pages Service."

 
    return(
        <div>
            <div className="container">
                <div className='row'>
                    <div className="col-md-12">
                        <h2 className='text-endtext-white'>Hi! My name is <n className="fw-bolder">Tomás Sousa</n></h2>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-6 text-center">
                         <img src={HomepageImage} alt="Illustration Representing a Web Developer at their job." className="img-fluid" style={{ maxHeight: '450px'}} />
                    </div>  
                    <div className="col-md-6">
                        <h3>Learn a little more about me:</h3>
                            <p className='fs-3 text-white'>{info}</p>
                            <p className='fs-5 text-white'>{hostinfo}</p>
                    </div>           
                </div>
            </div>
        </div>
    
    )

}


//EXPORT PARA AS OUTRAS PÁGINAS
export default HomepageContent;