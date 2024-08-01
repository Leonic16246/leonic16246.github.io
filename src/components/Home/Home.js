import React, { useEffect, useState } from "react";
import Animation from "../Animation/Animation";
import "./Home.scss"

export default function Home() {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'L', 'e', 'o', 'n']
    const jobArray = [' ', 's', 't', 'u', 'd', 'e', 'n', 't']

    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text">
                <h2>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                </h2>
                <h3><br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <Animation letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                </h3>
                <h4>A software engineering 
                <Animation letterClass={letterClass}
                strArray={jobArray}
                idx={20} />
                </h4>
                <h5><br />Welcome to my site</h5>
            </div>
        </div>
    )
}