//REACT
import React from 'react';

//PARTICLES
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


//CSS File
import './App.css';
import './index.css';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

//NAVEGAR
import {BrowserRouter, Routes, Route} from "react-router-dom";

//COMPONENTES QUE VÃO ESTAR NO NAVs
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Projects from './Pages/Projects';

//RESTO DOS COMPONENTES
import Layout from './Components/Layout';

//FOOTER
import Footer from './Components/Footer';


//FUNÇÃO EXPORTADA
const App = () => {

  //PARTICLES
  const [loading, setLoading] = useState(true);

  //PARA DAR EFFEITO DE LOAD
  useEffect(() => {

    //PASSADOS 3 SEGUNDOS, O LOADING DESAPARECE
    const timer = setTimeout(() => setLoading(false), 3000);
    
    //RETIRAR O TIMER
    return () => clearTimeout(timer);

  }, []);

  //PARA INICIAR O PARTICLES
  const [init, setInit] = useState(false);

  //PARA INICIAR O PARTICLES
  useEffect(() => {

    //INICIAR O PARTICLES
    initParticlesEngine(async (engine) => {
      
      //CARREGAR O PARTICLES
      await loadSlim(engine);
      
    }).then(() => {

      //INICIAR O PARTICLES
      setInit(true);

    });

  }, []);

  const particlesLoaded = (container) => {
    const saveconfig = container;
  };

  useEffect(() => {
    console.log(init);
  }, [init]);
 
  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
        <h2 className='coloredText'>Loading...</h2>
      </div>
      ) : (
        <>
          {init ? (
            <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={{
                preset: "stars",
                background:{
                  color: {
                    value: "transparent",
                  }
                },
                particles: {
                  color: {
                    value:"#ffffff"
                  },
                  number: {
                    value: 100,
                  },
                  size: {
                    value: 1,
                    random: true,
                  },
                  move: {
                    enable: true,
                    speed: 1,
                    direction: "random",
                    random: false,
                    straight: false,
                    out_mode: "out",
                  },
                }
              }}
            />
          ) : null}
          <div className="w-100 bg-dark">
            <BrowserRouter basename='/portfolio'>
              <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path="About" element={<About/>}/>
                    <Route path="Projects" element={<Projects/>}/>
                </Route>
              </Routes>
              <Footer/>
            </BrowserRouter>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
