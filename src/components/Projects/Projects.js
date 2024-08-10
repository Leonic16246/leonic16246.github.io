import './Projects.scss';
import { useEffect, useState } from "react";
import Animation from '../Animation/Animation';
import projects from "../../data/projects.json"

const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 2000);
    }, []);

    const renderProjects = (project) => {
        <div>
            {projects.map((project, id) => {
                return (
                <div key={id}>
                    <img src={project.imgsrc} alt={project.title} />
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    {/* <ul>{project.skills.map((skill, id) => {
                        <li key={id}>{skill}</li>
                    })}
                    </ul> */}
                    <div>
                        <a href={project.source}>Source Code</a>
                    </div>
                </div>
                );
            })}
        </div>
    }
    
    return (
        <div className="container projects-page">
            <div className="text-zone">
                <h1>
                    <Animation 
                        letterClass={letterClass}
                        strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
                        idx={15} />
                </h1>
                <div>{renderProjects(projects.project)}</div>
            </div>
        </div>
    )
}
export default Projects; 