import React, { useState } from 'react';
import {Outlet, Link} from "react-router-dom";

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

//CSS
import '../index.css';

//LOGO
import {ReactComponent as Logo} from "../Imgs/LOGO.svg";

//FUNÇÃO QUE EXPORTA
const Layout = () => {

    //UNDERLINE DO SELECIONADO
    //QUANDO O LINK É SELECIONA, PASSA A TRUE E COLOCA A LINHA EM BAIXO
    const [selectedLink, setSelectedLink] = useState('/');

    return(

        <div>
            <nav className="navbar d-flex align-items-center">
                <div className="d-flex align-items-center w-100">
                    <Link to="/">
                        <Logo className="text-start ms-3 pt-3 pb-4" width="20%" heigth="20%"/>
                    </Link>
                    <div className="ms-auto d-flex pe-5">
                        <Link to="/About" className={`pe-2 text-decoration-none text-white link-hover ${selectedLink === '/About' ? 'active' : ''}`} onClick={() => setSelectedLink('/About')}>
                            <p className="text-end mx-2">About</p>
                        </Link>
                        <Link to="/Projects" className={`ps-2 text-decoration-none text-white link-hover ${selectedLink === '/Projects' ? 'active' : ''}`} onClick={() => setSelectedLink('/Projects')}>
                            <p className="text-end mx-2">Projects</p>
                        </Link>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
  
}


//EXPORT PARA AS OUTRAS PÁGINAS
export default Layout;