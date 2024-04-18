import {Outlet, Link} from "react-router-dom";

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

//LOGO
import {ReactComponent as Logo} from "../Imgs/LOGO.svg";

//FUNÇÃO QUE EXPORTA
const Layout = () => {

    return(

        <div>
            <nav className="shadow navbar">
                <Link to="/">
                    <Logo className="text-start ms-3 pt-3 pb-4" width="30%" heigth="30%"/>
                </Link>
                <Link to="About">
                    <p className="text-end ms-3 pt-3 pb-4">About</p>
                    
                </Link>
                <Link to="Projects">
                    <p className="text-ed ms-3 pt-3 pb-4"> My Projects</p>
                </Link>
            </nav>
            <Outlet/>
        </div>
    )
  
}


//EXPORT PARA AS OUTRAS PÁGINAS
export default Layout;