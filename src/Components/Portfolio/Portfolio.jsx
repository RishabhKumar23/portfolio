import React from "react";
import "./Portfolio.css";
import Img from "../../image/profile.jpeg";

//array to store project data
const data =[
  {
    id:1,
    image: Img,
    title:"project 1",
    github: "https//github.com",
    demo: "live project demo"
  },
  {
    id:2,
    image: Img, //here import img2 from image folder 
    title:"project 2",
    github: "https//github.com",
    demo: "live project demo"
  },
  {
    id:3,
    image: Img, //here import img3 from image folder 
    title:"project 3",
    github: "https//github.com",
    demo: "live project demo"
  },
  {
    id:4,
    image: Img, //here import img4 from image folder 
    title:"project 4",
    github: "https//github.com",
    demo: "live project demo"
  },
];


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>my reacent work</h5>
      <h2>portfolio</h2>

      <div className="container portfolioContainer">
      {
        data.map(({id, image, title, github, demo})=>{
          return (
            <article key={id} className="portfolioItem"> 
            <div className="portfolioItemImage">
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className="portfolioItemBtn">
              <a href={github} className="btn" rel="noreferrer" target="_blank">Github</a>
              <a href={demo} className="btn btn-primary" rel="noreferrer" target="_blank">live demo</a>
            </div>
            </article>
          )
        })
      }
      </div>
    </section>
  );
};

export default Portfolio;
