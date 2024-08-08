import './Projects.scss';
import { useEffect, useState } from "react";

export default function Projects() {

    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 2000);
    }, []);

    return (
        <div className="container projects-page">

        </div>
    )
}
