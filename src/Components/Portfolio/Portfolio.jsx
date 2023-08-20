import React from "react";
import "./Portfolio.css";
import { SiCodeproject } from 'react-icons/si'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>my reacent work</h5>
      <h2>portfolio</h2>

      <div className="container">
        <div className='aboutCards'>
          <a href="https://github.com/RishabhKumar23/twitter-clone" rel="noreferrer" target="_blank">
            <article className='aboutCard'>
              <SiCodeproject className='aboutIcon' />
              <h5>Twitter</h5>
            </article>
          </a>
          <a href="https://github.com/RishabhKumar23/Facebook-Clone" rel="noreferrer" target="_blank">
            <article className='aboutCard'>
              <SiCodeproject className='aboutIcon' />
              <h5>Face-Book</h5>
            </article>
          </a>
          <a href="https://github.com/RishabhKumar23/blog-Website" rel="noreferrer" target="_blank">
            <article className='aboutCard'>
              <SiCodeproject className='aboutIcon' />
              <h5>Blog-Website</h5>
            </article>
          </a>
          <a href="https://github.com/RishabhKumar23/silence" rel="noreferrer" target="_blank">
            <article className='aboutCard'>
              <SiCodeproject className='aboutIcon' />
              <h5>Silence</h5>
            </article>
          </a>
          <a href="https://github.com/RishabhKumar23/chatXbox" rel="noreferrer" target="_blank">
            <article className='aboutCard'>
              <SiCodeproject className='aboutIcon' />
              <h5>Chat-Gpt Clone</h5>
              <p></p>
            </article>
          </a>
          <a href="https://github.com/RishabhKumar23/web3" rel="noreferrer" target="_blank">
            <article className='aboutCard'>
              <SiCodeproject className='aboutIcon' />
              <h5>krypt</h5>
              <p></p>
            </article>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
