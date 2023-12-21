import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import PageJadson from './components/PageJadson';
import PageKami from './components/PageKami';
import PageLucas from './components/PageLucas';
import jadsonImage from './imagens/jadson.png';
import kamiImage from './imagens/kami.png';
import lucasImage from './imagens/lucas.jpg';
import logoImage from './imagens/logo.png';

const App = () => {
  const handlePersonClick = (pageUrl) => {
    window.open(pageUrl, '_blank');
  };

  return (
    <Router>
      <div className="App">
        {/* Barra Superior */}
        <div className="barra-superior">
          <div className="retangulo-branco">
            <img src={logoImage} alt="Logo do App" />
          </div>
        </div>

        {/* Barra de Navegação */}
        <div className="barra-navegacao">
          <a href="https://github.com/samsepiol1/SOS-Primeiros-Socorros" target="_blank" rel="noopener noreferrer">
            Documentação
          </a>
          <a href="/#download" target="_blank" rel="noopener noreferrer">
            Download
          </a>
          <a href="/#repositorio" target="_blank" rel="noopener noreferrer">
            Repositório
          </a>
        </div>

        {/* Barra Fina */}
        <div className="barra-fina"></div>

        {/* Conteúdo Principal */}
        <div className="conteudo">
          <h1 className="titulo-equipe">Nossa equipe:</h1>

          {/* Segundo Parágrafo */}
          <div className="segundo-paragrafo">
            <p>
              Somos estudantes do curso de Tecnologia em Sistemas para Internet no Campus IFRN - Parnamirim, unidos por uma visão comum: utilizar nosso conhecimento técnico para criar soluções que impactem positivamente a sociedade. Com essa missão em mente, apresentamos com entusiasmo o nosso aplicativo, S.O.S: Primeiros Socorros.
              O aplicativo foi projetado para fornecer assistência imediata em situações de emergência, guiando os usuários por procedimentos de primeiros socorros vitais. Oferece uma interface intuitiva e passo a passo, proporcionando informações claras e instruções acionáveis para ajudar a lidar com uma variedade de situações de emergência, desde ferimentos leves até cenários mais críticos. Trabalhamos para garantir que o aplicativo seja de fácil compreensão, mesmo em momentos de estresse.
              <br />
              É com grande satisfação que disponibilizamos o S.O.S: Primeiros Socorros para download. Totalmente gratuito e opera offline, permitindo acesso a recursos valiosos independentemente da conectividade com a internet. Baixe agora e faça parte da comunidade que prioriza a segurança e o bem-estar, colocando o conhecimento técnico a serviço do cuidado com a vida. Estamos comprometidos em proporcionar uma experiência que faça a diferença quando cada segundo conta.
            </p>
          </div>

          {/* Container de Eclipses */}
          <div className="container-eclipses">
            <div className="eclipse" onClick={() => handlePersonClick('/jadson')}>
              <img src={jadsonImage} alt="Jadson" />
              <p>Jadson</p>
            </div>
            <div className="eclipse" onClick={() => handlePersonClick('/kami')}>
              <img src={kamiImage} alt="Kami" />
              <p>Kami</p>
            </div>
            <div className="eclipse" onClick={() => handlePersonClick('/lucas')}>
              <img src={lucasImage} alt="Lucas" />
              <p>Lucas</p>
            </div>
          </div>
          <div class="rodape">
        <div class="rodape-textos">
            <div class="rodape-texto">Baixe nosso aplicativo gratuito. Disponível para Android</div>
        </div>
    </div>

          {/* Rotas React */}
          <Routes>
            <Route path="/jadson" element={<PageJadson />} />
            <Route path="/kami" element={<PageKami />} />
            <Route path="/lucas" element={<PageLucas />} />
          </Routes>
        </div>
      </div>
    </Router>


  );
};

export default App;
