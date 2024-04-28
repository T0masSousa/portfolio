
//ÍCONES DAS REDES SOCIAIS
import { FaGithub, FaLinkedinIn, FaInstagram} from "react-icons/fa";

//FUNÇAO A EXPORTAR
const Footer = () => {

  return (
    <footer className="text-white text-center p-3">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <p>Copyright © 2024</p>
        </div>
        <div className="col-md-4">
          <p>Hosted by GitHub Pages</p>
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-around">
            <a href="https://github.com/T0masSousa" target="_blank" rel="noreferrer">
              <FaGithub className="fs-2" />
            </a>
            <a href="https://www.linkedin.com/in/tomás-sousa-a96507179/" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="fs-2" />
            </a>
            <a href="https://www.instagram.com/tomas.rafael.sousa/" target="_blank" rel="noreferrer">
              <FaInstagram className="fs-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;