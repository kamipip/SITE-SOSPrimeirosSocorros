import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import jadsonImage from './imagens/jadson.png';
import logoImage from './imagens/logo.png';



const emojis = ["😊", "🏖️", "🎸", "💡", "💻"];
const PageJadson = () => {
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
          <img src={jadsonImage} alt="Jadson" />

          <div className="emojis-container">
            <span className="emoji" id="emoji">{emoji}</span>
          </div>
        </div>
      </div>

      <div className="sobre-pessoa">
        <p>Olá, me chamo Jadson Leitão. Mergulhei no fascinante universo da tecnologia desde a infância, hoje aos 20 anos cresce uma paixão enquanto curso Sistemas para Internet em Parnamirim.
           Esta jornada acadêmica tem se revelado uma experiência incrível, repleta de desafios e aprendizados enriquecedores. <br />
           No âmbito prático, minha contribuição nesse projeto concentra-se na elaboração da documentação e na execução dos testes. Essa abordagem orientada para detalhes visa 
           não apenas garantir o êxito do projeto, mas também promover sua eficiência e excelência. <br />
           Além dos aspectos acadêmicos e profissionais, minha trajetória é marcada por uma busca incessante pelo aprimoramento contínuo. Encaro cada desafio como uma oportunidade 
           de crescimento, e acredito que a inovação e a dedicação são pilares essenciais para se destacar neste dinâmico campo da tecnologia. <br />
          Convido você a explorar mais sobre minha jornada e meu trabalho clicando em um dos botões abaixo. Estou animado para compartilhar mais sobre minha paixão pela tecnologia e as experiências que moldaram minha jornada até aqui.
        </p>
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

export default PageJadson;
