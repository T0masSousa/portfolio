import AboutMeImage from '../Imgs/AboutMe.png';


//FUNÇÃO QUE EXPORTA
const AboutContent = () => {

    return (
        <div>
            <div className="container">
                <div className='row'>
                    <div className="col-md-12 pt-5 pb-4">
                        <h4 className='text-star text-white'>Get to Know <n style={{ color: '#0a58ca'}} className="fw-bolder">Me</n></h4>
                    </div>
                </div>
                <div className="row pb-5 mb-5">  
                    <div className="col-md-6 mt-auto mb-auto">
                        <div className='pt-2'>
                            <p className='fs-5 text-white'>I'm <n className='coloredText'>Tomás Sousa</n>, a final year student of Multimedia and Communication Technologies at the University of Aveiro. I switched from Humanistic Sciences to this course and found <n className='coloredText'>my passion in web development</n>.</p>
                            <p className='fs-5 text-white'>I enjoy the <n className='coloredText'>problem-solving aspect of coding</n>, especially troubleshooting errors. However, web designing isn't my cup of tea; I prefer dealing with code errors.</p>
                            <p className='fs-5 text-white'>Currently, I'm building my portfolio to <n className='coloredText'>showcase my skills and prepare for my future career</n>. In my free time, I enjoy playing video games, watching off-road car videos, and listening to music.</p>
                            <p className='fs-5 text-white'>I'm looking forward to <n className='coloredText'>working with you</n>!</p>
                            <p className='fs-5 text-white'><n className='coloredText'>"If you do what you love, you'll never work a day in your life." - <n style={{fontStyle:'italic', opacity:'75%'}}>Marc Anthony</n></n></p>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                         <img src={AboutMeImage} alt="Illustration Representing a Web Developer at their job." className="img-fluid" style={{ maxHeight: '450px'}} />
                    </div>
                </div>           
                </div>
            </div>
    )

}



//EXPORT PARA AS OUTRAS PÁGINAS
export default AboutContent;