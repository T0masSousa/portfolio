import {Outlet, Link} from "react-router-dom";

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

//LOGO
import {ReactComponent as Logo} from "../Imgs/LOGO.svg";

//FUNÇÃO QUE EXPORTA
const Layout = () => {

    return(

        <div>
            <nav className="shadow navbar bg-success">
                <Link to="/">
                    <Logo className="text-start" width="30%" heigth="30%"/>
                </Link>
                <Link to="About">
                    <p className="text-end">About</p>
                    
                </Link>
                <Link to="Projects">
                    <p className="text-end"> My Projects</p>
                </Link>
            </nav>
            <Outlet/>
        </div>
    )
  
}


//EXPORT PARA AS OUTRAS PÁGINAS
export default Layout;