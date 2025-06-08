import React from "react";
import "./Portfolio.css";
import { SiCodeproject } from 'react-icons/si'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Career</h5>
      <h2>Achievements</h2>

      <div className="container">
        <div className='aboutCards'>
          <a href="https://www.linkedin.com/posts/jayahar-sivasubramanian-4a88142b_ruasabraerospaceabrengineering-activity-7247582000830652416-uF-C?utm_source=share&utm_medium=member_desktop&rcm=ACoAADalDLQBNlnDGnRFo2Of_yLEZ5NcG983fjI" rel="noreferrer" target="_blank">
            <article className='aboutCard'>
              <SiCodeproject className='aboutIcon' />
              <h5>National Winner</h5>
            </article>
          </a>
          <a href="https://ieeexplore.ieee.org/document/10677297" rel="noreferrer" target="_blank">
            <article className='aboutCard'>
              <SiCodeproject className='aboutIcon' />
              <h5>IEEE-Paper</h5>
            </article>
          </a>
          <a href="https://www.hackerrank.com/profile/rishabh_kumar101" rel="noreferrer" target="_blank">
            <article className='aboutCard'>
              <SiCodeproject className='aboutIcon' />
              <h5>Hacker Rank</h5>
            </article>
          </a>
          <a href="https://www.naukri.com/code360/profile/RishKumar" rel="noreferrer" target="_blank">
            <article className='aboutCard'>
              <SiCodeproject className='aboutIcon' />
              <h5>Coding Ninja</h5>
            </article>
          </a>
          {/* <a href="https://github.com/RishabhKumar23/chatXbox" rel="noreferrer" target="_blank">
            <article className='aboutCard'>
              <SiCodeproject className='aboutIcon' />
              <h5>Chat-Gpt Clone</h5>
              <p></p>
            </article>
          </a> */}
          {/* <a href="https://github.com/RishabhKumar23/web3" rel="noreferrer" target="_blank">
            <article className='aboutCard'>
              <SiCodeproject className='aboutIcon' />
              <h5>krypt</h5>
              <p></p>
            </article>
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
