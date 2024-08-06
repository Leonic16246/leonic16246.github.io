import './Contact.scss'
import Animation from '../Animation/Animation'
import React, { useEffect, useState } from "react";

export default function Contact() {

    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 2000);
    }, []);

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <Animation 
                    letterClass={letterClass}
                    strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]} 
                    idx={15}
                    />
                </h1>
            </div>
        </div>
        
        </>
    )

}