import React, { useEffect, useState } from "react";
import Animation from "../Animation/Animation";
import Logo from './Logo/Logo';
import "./Home.scss";

export default function Home() {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ', 'L', 'e', 'o', 'n'];
    const jobArray = ['A', ' ', 's', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', 'i', 'n', 'g', ' ', 's', 't', 'u', 'd', 'e', 'n', 't'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

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
                    <Animation letterClass={letterClass} strArray={nameArray} idx={15} />
                </h3>
                <h4>
                    <Animation letterClass={letterClass} strArray={jobArray} idx={22} />
                </h4>
                <h5><br /></h5>
            </div>
            <Logo />
        </div>
    );
}
