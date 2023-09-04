import ProjectImg from "../images/Projects-2.png"

export default function ProjectsSlider(){
  return(
    <div className='projects-slider'>
      <div className="overflow">
        <div className="projects-wrapper">
          <div className="projects-item">
            <img src={ProjectImg} alt="projects"/>
          </div>
          <div className="projects-item">
            <img src={ProjectImg} alt="projects"/>
          </div>
          <div className="projects-item">
            <img src={ProjectImg} alt="projects"/>
          </div>
          <div className="projects-item">
            <img src={ProjectImg} alt="projects"/>
          </div>
        </div>
        <div className="projects-wrapper">
          <div className="projects-item">
            <img src={ProjectImg} alt="projects"/>
          </div>
          <div className="projects-item">
            <img src={ProjectImg} alt="projects"/>
          </div>
          <div className="projects-item">
            <img src={ProjectImg} alt="projects"/>
          </div>
          <div className="projects-item">
            <img src={ProjectImg} alt="projects"/>
          </div>
        </div>
      </div>
    </div>
  )
};

