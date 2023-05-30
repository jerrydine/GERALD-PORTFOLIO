import React from 'react';
import '../STYLING/Project.css';
import huddle from '../Images/huddle.png';

const Projects = () => {
  return (
    <div id="portfolio" className="port">
      <h2>PortFolio</h2>
      <div className="port-wrap">
        <div className="portfolio-container">
          <article className="each-work">
            <div className="pro-img"></div>
            <div className="btn-project">
              <a href="https://huddlequeen.netlify.app/" className="site" target={'_blank'}>
                View Site
              </a>
              <a href="https://github.com/jerrydine/HUDDLE" className="git" target={'_blank'}>
                Github
              </a>
            </div>
          </article>
          <article className="each-work">
            <div className="pro-img2"></div>
            <div className="btn-project">
              <a href="https://bookmarkqueen.netlify.app/" className="site" target={'_blank'}>
                View Site
              </a>
              <a href="https://github.com/jerrydine/BOOKMARK-" className="git" target={'_blank'}>
                Github
              </a>
            </div>
          </article>
          <article className="each-work">
            <div className="pro-img3"></div>
            <div className="btn-project">
              <a href="https://bloggqueen.netlify.app/" className="site" target={'_blank'}>
                View Site
              </a>
              <a
                href="https://github.com/jerrydine/BLOG-LANDING-PAGE"
                className="git" target={'_blank'}
              >
                Github
              </a>
            </div>
          </article>

          <article className="each-work" id='article4'>
            <div className="pro-img4"></div>
            <div className="btn-project">
              <a href="https://loopstudioqueen.netlify.app/" className="site" target={'_blank'}>
                View Site
              </a>
              <a href="https://github.com/jerrydine/LOOPSTUDIO" className="git" target={'_blank'}>
                Github
              </a>
            </div>
          </article>

          <article className="each-work" id='article5'>
            <div className="pro-img5"></div>
            <div className="btn-project">
              <a href="https://gitsitequeen.netlify.app/" className="site" target={'_blank'}>
                View Site
              </a>
              <a href="https://github.com/jerrydine/GITHUB" className="git" target={'_blank'}>
                Github
              </a>
            </div>
          </article>

          <article className="each-work">
            <div className="pro-img6"></div>
            <div className="btn-project">
              <a href="https://tradeexpressqueen.netlify.app/" className="site" target={'_blank'}>
                View Site
              </a>
              <a
                href="https://github.com/jerrydine/TradeExpress"
                className="git" target={'_blank'}
              >
                Github
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Projects