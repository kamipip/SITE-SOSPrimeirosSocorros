
import { Link } from 'react-router-dom';

import jadsonImage from '../imagens/jadson.png';
import logoImage from '../imagens/logo.png';




const PageJadson = () => {
  const emojis = ["😊", "🏖️", "🎸", "💡", "💻"];

  const mudarEmoji = () => {
    const emojiSelecionado = emojis[Math.floor(Math.random() * emojis.length)];
    document.getElementById("emoji").textContent = emojiSelecionado;
  };

  return (
    <div>
      {/* Barra Superior */}
      <div className="barra-superior">
        <div className="retangulo-branco">
          <img src={logoImage} alt="Logo do App" />
        </div>
      </div>

      {/* Barra de Navegação */}
      <div className="barra-navegacao">
        <Link to="https://github.com/samsepiol1/SOS-Primeiros-Socorros">
          Documentação
        </Link>
        <Link to="/#download">
          Download
        </Link>
        <Link to="/#repositorio">
          Repositório
        </Link>
      </div>

      {/* Barra Fina */}
      <div className="barra-fina"></div>

      <div className="container-pessoa">
        <div className="eclipsepessoa" onClick={mudarEmoji}>
          <img src={jadsonImage} alt="Jadson" />

          <div className="emojis-container">
            <span className="emoji" id="emoji">😊</span>
          </div>
        </div>
      </div>

      <div className="sobre-pessoa">
        <p>Olá, sou Jadson Leitão, um entusiasta da vida com uma paixão por várias áreas. Durante o dia, mergulho no mundo da programação, explorando códigos e soluções criativas. <br /> Nas horas livres, encontro inspiração na serenidade das praias, onde recarrego energias e encontro paz. Além disso, faço parte de uma banda na igreja, onde minha paixão <br /> pela música se une à minha espiritualidade. Essas diferentes facetas da minha vida se entrelaçam, formando a sinfonia única que é a minha jornada.</p>
      </div>

      <div className="botoes-container">
        <a className="botao" href="email@exemplo.com">E-mail</a>
        <a className="botao" href="https://github.com/JadsonTSI" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="botao" href="https://www.instagram.com/jadson_leitao/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>

      <div className="rodape">
      </div>
    </div>
  );
};

export default PageJadson;
