import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import KamiImage from './imagens/kami.png';
import logoImage from './imagens/logo.png';



const emojis = ["😊", "🏖️", "🎸", "💡", "💻"];
const PageKami = () => {
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
        <div className="eclipsepessoa">
          <img src={KamiImage} alt="Jadson" />

          <div className="emojis-container">
            <span className="emoji" id="emoji">{emoji}</span>
          </div>
        </div>
      </div>

      <div className="sobre-pessoa">
        <p>Olá, meu nome é Kamila Nunes e sou a mente por trás deste projeto. Como idealizadora, dediquei-me à criação de todo o design, garantindo que fosse simples e dinâmico para atender a todos os usuários. Além disso, desempenhei um papel fundamental na construção do site e na condução dos testes do aplicativo.
        <br /> Acredito firmemente que o S.O.S: Primeiros Socorros pode ser uma ferramenta crucial para disseminar o conhecimento em primeiros socorros, uma habilidade que deveria ser adquirida por todos desde a infância. Agradeço sinceramente aos meus colegas de equipe, cuja colaboração tornou possível a realização deste aplicativo.
        <br />Caso queira saber mais sobre mim e meu trabalho, clique nas opções abaixo:</p>
      </div>

      <div className="botoes-container">
        <a className="botao" href="mailto:kamillaaugusto.dev@gmail.com?subject=&body=">
          <FontAwesomeIcon icon={faEnvelope} /> 
        </a>
        <a className="botao" href="https://github.com/kamipip" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> 
        </a>
        <a className="botao" href="https://www.instagram.com/userkmi" target="_blank" rel="noopener noreferrer">
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

export default PageKami;
