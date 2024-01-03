import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import LucasImage from './imagens/lucas.jpg';
import logoImage from './imagens/logo.png';



const emojis = ["😊", "🏖️", "🎸", "💡", "💻"];
const PageLucas = () => {
  const [emoji, setEmoji] = useState(emojis[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let novoEmoji;
      do {
        novoEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      } while (novoEmoji === emoji);

      setEmoji(novoEmoji);
    }, 2000); // Intervalo em milissegundos (neste caso, 2 segundos)

    // Limpar o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, [emoji]); // Adicionado emoji como uma dependência para evitar warning de useEffect


  

 
  return (
    <div>
      {/* Barra Superior */}
      <Link to="/">
      <div className="barra-superior">
        <div className="retangulo-branco">
          <img src={logoImage} alt="Logo do App" />
        </div>
      </div>
      </Link>

      {/* Barra de Navegação */}
      <div className="barra-navegacao">
        <Link to="https://sos-doc-ten.vercel.app/">
          Documentação
        </Link>
        <Link to="/#download">
          Download
        </Link>
        <Link to="https://github.com/samsepiol1/SOS-Primeiros-Socorros">
          Repositório
        </Link>
      </div>

      {/* Barra Fina */}
      <div className="barra-fina"></div>

      <div className="container-pessoa">
        <div className="eclipsepessoa">
          <img src={LucasImage} alt="Jadson" />

          <div className="emojis-container">
            <span className="emoji" id="emoji">{emoji}</span>
          </div>
        </div>
      </div>

      <div className="sobre-pessoa">
        <p>Olá, meu nome é Lucas Matheus, e sou um profissional apaixonado pela interseção entre desenvolvimento e segurança cibernética. Atualmente, lidero a transformação da LavaiLavem Turismo como CoFundador, onde fui responsável pela informatização dos processos e reestruturação da marca, integrando tecnologias emergentes. 
        <br />Além disso, acabei contribuindo no desenvolvimento e segurança da informação de grandes instituições como TikTok, Itaú, PRF e UFRN. </p>
      </div>

      <div className="botoes-container">
        <a className="botao" href="email@exemplo.com">
          <FontAwesomeIcon icon={faEnvelope} /> 
        </a>
        <a className="botao" href="https://github.com/JadsonTSI" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> 
        </a>
        <a className="botao" href="https://www.instagram.com/jadson_leitao/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} /> 
        </a>
      </div>

        {/* Rodapé */}
        <div className="rodape">
          <div className="rodape-textos">
            <div className="rodape-texto">Baixe nosso aplicativo gratuito. Disponível para Android</div>
          </div>
        </div>
      </div>
  );
};

export default PageLucas;
