//IMPORT
import React from 'react';
import HomepageImage from '../Imgs/HomepageImage2.png';

//FUNÇÃO QUE EXPORTA
const HomepageContent = () => {

    //VAR QE VAI ESCREVER O PARARAFO DA INFORMACAO
const info ="I welcome you to my Portfolio. I am a Full Stack Developer and I am currently studying at the University of Aveiro. In this portfolio, I'll show you some of my projects, where I will identify the languages I have used and you will get to know me a little bit better.";
const hostinfo="This portfolio has been fully made by me using ReactJS in addition to some free usage libraries."

 
    return(
        <div>
            <div className="container">
                <div className='row'>
                    <div className="col-md-12 pt-5 pb-4">
                        <h4 className='text-end text-white'>Hi! My name is <n style={{ color: '#0a58ca'}} className="fw-bolder">Tomás Sousa</n></h4>
                    </div>
                    
                </div>
                <div className="row pb-5 mb-5">
                    <div className="col-md-6 text-center">
                         <img src={HomepageImage} alt="Illustration Representing a Web Developer at their job." className="img-fluid" style={{ maxHeight: '450px'}} />
                    </div>  
                    <div className="col-md-6 mt-auto mb-auto">
                        <h5 className='text-start  text-white pb-3'>Learn a little more about me:</h5>
                        <div className='pt-2'>
                            <p className='fs-5 text-white'>{info}</p>
                            <p className='fs-6 text-white pt-3'>{hostinfo}</p>
                        </div>
                            
                    </div>           
                </div>
            </div>
        </div>
    
    )

}


//EXPORT PARA AS OUTRAS PÁGINAS
export default HomepageContent;