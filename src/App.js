
//ESTA PÁGINA USA O HASHROUTER, PARA QUE O GITHUB, QUANDO SE DER REFRESH NA PÁGIN ABOUT OU PAGES
//NÃO PROCURE PELO PÁGINA ESPECÍFCA, PORQUE SºAO CONSTRUÍDAS NO CLIENT SIDE
//ASSIM ELE VAI IGNORAR TUDO O QUE VEM EM FRENTE AO # E RECONSTRUIR A PÁGINA

//CSS
import './App.css';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

//NAVEGAR
import {HashRouter, Routes, Route} from "react-router-dom";

//COMPONENTES QUE VÃO ESTAR NO NAV
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Error from './Pages/Error';

//RESTO DOS COMPONENTES
import Layout from './Components/Layout';

//FOOTER
import Footer from './Components/Footer';


//FUNÇÃO EXPORTADA
function App() {
  return (
    <div className="w-100 bg-dark">
    <HashRouter basename='/portfolio'>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path="About" element={<About/>}/>
                    <Route path="Projects" element={<Projects/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
            <Footer/>
    </HashRouter>
</div>
  );
}

export default App;
