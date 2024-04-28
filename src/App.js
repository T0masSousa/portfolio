//REACT
import React from 'react';

//PARTICLES
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


//CSS File
import './App.css';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

//NAVEGAR
import {BrowserRouter, Routes, Route} from "react-router-dom";

//COMPONENTES QUE VÃO ESTAR NO NAVs
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Error from './Pages/Error';

//RESTO DOS COMPONENTES
import Layout from './Components/Layout';

//FOOTER
import Footer from './Components/Footer';


//FUNÇÃO EXPORTADA
const App = () => {

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      
      await loadSlim(engine);
      
    }).then(() => {

  
      setInit(true);

    });

  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  useEffect(() => {
    console.log(init);
  }, [init]);
 
  return (
    <div>
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
              value: 2,
              random: true,
            },
            move: {
              enable: true,
              speed: 4,
              direction: "random",
              random: false,
              straight: false,
              out_mode: "out",
            },
          }
        }}
      />
    ): null}
      <div className="w-100 bg-dark">
        <BrowserRouter basename='/portfolio'>
          <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Homepage/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="Projects" element={<Projects/>}/>
                <Route path="*" element={<Error/>}/>
            </Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  </div>
  
  );
}

export default App;
