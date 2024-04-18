import {Outlet, Link} from "react-router-dom";

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

//LOGO
import {ReactComponent as Logo} from "../Imgs/LOGO.svg";

//FUNÇÃO QUE EXPORTA
const Layout = () => {

    return(

        <div>
            <nav className="shadow navbar align-items-center d-flex">
                <Link to="/">
                    <Logo className="text-start ms-3 pt-3 pb-4" width="20%" heigth="20%"/>
                </Link>
                <div className="ms-auto d-flex">
                    <Link to="/About" className="text-decoration-none text-white">
                        <p className="text-end mx-2">About</p>
                        </Link>
                    <Link to="/Projects" className="text-decoration-none text-white">
                        <p className="text-end mx-2"> My Projects</p>
                    </Link>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
  
}


//EXPORT PARA AS OUTRAS PÁGINAS
export default Layout;