import {Outlet, Link} from "react-router-dom";

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

//LOGO
import {ReactComponent as Logo} from "../Imgs/LOGO.svg";

//FUNÇÃO QUE EXPORTA
const Layout = () => {

    return(

        <div>
            <nav className="navbar align-items-center d-flex">
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <Logo className="text-start ms-3 pt-3 pb-4" width="20%" height="20%"/>
                    <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
                        <Link to="/" style={{ display: 'block', height: '100%' }} />
                    </div>
                </div>
                <div className="ms-auto d-flex pe-5">
                    <Link to="/About" className="text-decoration-none text-white">
                        <p className="text-end mx-2">About Me</p>
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