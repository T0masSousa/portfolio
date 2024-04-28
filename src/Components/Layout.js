import {Outlet, Link} from "react-router-dom";

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

//LOGO
import {ReactComponent as Logo} from "../Imgs/LOGO.svg";

//FUNÇÃO QUE EXPORTA
const Layout = () => {

    return(

        <div>
            <nav className="navbar d-flex align-items-center">
                <div className="d-flex align-items-center w-100">
                    <Link to="/">
                        <Logo className="text-start ms-3 pt-3 pb-4" width="20%" heigth="20%"/>
                    </Link>
                    <div className="ms-auto d-flex pe-5">
                        <Link to="/About" className="text-decoration-none text-white">
                            <p className="text-end mx-2">About Me</p>
                        </Link>
                        <Link to="/Projects" className="text-decoration-none text-white">
                            <p className="text-end mx-2"> My Projects</p>
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