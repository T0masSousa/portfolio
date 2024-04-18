
//ÍCONES DAS REDES SOCIAIS
import { FaGithub, FaLinkedinIn, FaInstagram} from "react-icons/fa";

//FUNÇAO A EXPORTAR
const Footer = () => {

  return (

    <footer className="bg-dark text-white text-center p-3">
      <p>Reach out to me:</p>
      <div className="d-flex justify-content-center mb-3">
        <a href="https://github.com/T0masSousa" target="_blank" rel="noreferrer" className="mx-2">
          <FaGithub className="fs-2"/> 
        </a>
        <a href="https://www.linkedin.com/in/tomás-sousa-a96507179/" target="_blank" rel="noreferrer" className="mx-2">
          <FaLinkedinIn className="fs-2"/> 
        </a>
        <a href="https://www.instagram.com/tomas.rafael.sousa/" target="_blank" rel="noreferrer" className="mx-2">
          <FaInstagram className="fs-2"/> 
        </a>
      </div>
      <p>Copyright © 2024</p>
    </footer>
  );
}

export default Footer;