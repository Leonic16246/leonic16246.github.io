import './Projects.scss';
import { useEffect, useState } from "react";
import Animation from '../Animation/Animation';
import projectsList from "../../data/projects.json";

const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 2000);
    }, []);

    const renderProjects = () => {
        // Access the array under the 'project' key
        return (
            <div>
                {projectsList.project.map((project, idx) => (
                    <div key={idx}>

                        <img src={require(`../../${project.imgsrc}`)} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                        <ul>
                            {project.skills.map((skill, skillId) => (
                                <li key={skillId}>{skill}</li>
                            ))}
                        </ul>
                        <div>
                            <a href={project.source}>Source Code</a>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="container projects-page">
            <div className="text-zone">
                <h1>
                    <Animation 
                        letterClass={letterClass}
                        strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
                        idx={15} 
                    />
                </h1>
                <h2>TO DO</h2>
                <div>{renderProjects()}</div>
            </div>
        </div>
    );
}

export default Projects;
