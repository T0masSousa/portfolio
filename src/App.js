//REACT
import React from 'react';

//PARTICLES
import { useEffect,useCallback } from 'react';
import { Main, loadSlim, loadPreset } from 'tsparticles';
import Particles from 'react-particles';
import { loadFull } from "tsparticles";

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

  //FUNÇÃO QUE INICIA AS PARTICULAS
  const particlesInit = useCallback(async engine => {

    //CARREGAR AS PARTICULAS
    console.log(engine);

    //CARREGAR AS PARTICULAS
    await loadSlim(engine);

    //PRESET
    await loadPreset(engine,"stars");

  }, []);

  //FUNÇÃO QUE CARREGA AS PARTICULAS
  const particlesLoaded = useCallback(async container => {

    //CARREGAR AS PARTICULAS
    await console.log(container);


}, []);

  return (
    <div style={{ position: 'relative' }}>
      <div className="w-100 bg-dark">
        <Particles id="tsparticles" options={{
            preset: 'stars',
          }} 
          url="http://foo.bar/particles.json" 
          init={particlesInit} 
          loaded={particlesLoaded}   
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        }} />
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
