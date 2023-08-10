import { useEffect, useState } from "react";
import Chips from "../Chips";
// import TeamWork1 from "../../images/vaccine.svg";
// import TeamWork2 from "../../images/next.svg";
// import TeamWork3 from "../../images/cuate.svg";
// import TeamWork6 from "../../images/pana.svg";
// import TeamWork4 from "../../images/netflix.svg";
// import TeamWork5 from "../../images/weather.svg";

export default function Projects() {

  const [projectsData, setProjectsData] = useState([]);

  useEffect(()=>{
    fetch('/files/profile.json')
    .then(data=>data.json())
    .then(data=>{
      setProjectsData(data)
    })
    .catch(err => {
      console.error(err);
    })
  },[]);

  const githubRedirect = (event, url) => {
    event.preventDefault();
    event.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <section className='App-projects px-1 py-1' id='projects'>
      <h2 className="animate-banner">Projects</h2>
      <p className='sub-text animate-start'>
        Here is a showcase of some of my best projects that I made. They can be
        found on my <strong className='g-text'>GitHub</strong> !
      </p>
      <h3 className='info-text'>Check Out Projects &#8594;</h3>
      <div className='card-row'>
        {projectsData?.map(
          (
            { img='cuate.svg', title, name, url, description, github, inProgress, tech },
            idx
          ) => (
            <a
              href={url || "#"}
              key={idx}
              title={title}>
              <div className='card'>
                <img
                  className='card-cover-image'
                  src={"/images/"+img}
                  alt=''
                  loading='lazy'
                />
                <Chips chipsData={tech} />
                <h3 className='card-heading g-text'>{name || ""}</h3>
                <p className='card-details'>{description || ""}</p>
                <button
                  className='read-more'
                  disabled={inProgress}
                  onClick={(e) => githubRedirect(e, github)}>
                  <span className='km-text'>Know more </span>&#8594;
                </button>
              </div>
            </a>
          )
        )}
      </div>
    </section>
  );
}
