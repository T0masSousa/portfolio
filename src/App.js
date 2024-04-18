
//CSS
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
function App() {
  return (
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
  );
}

export default App;
