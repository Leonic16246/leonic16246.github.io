import './Contact.scss';
import Animation from '../Animation/Animation';
import { useEffect, useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {

    const [letterClass, setLetterClass] = useState('text-animate');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_8l092lb', 'template_7e5vn16', form.current, {
            publicKey: 'J6V2VlkRA9yKeOqt7',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            alert('Message sucessfully sent!')
            window.location.reload(false)
            },
            (error) => {
            console.log('FAILED...', error.text);
            alert('Failed to send message, please try again!')
            },
        );
    };

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
                <p>
                    Feel free to contact me if you have any inquires.
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input name='name' type='text' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input name='email' type='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input name='subject' type='text' placeholder='Subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required>

                                </textarea>
                            </li>
                            <li>
                                <input className='submit-button' type='submit' value='send' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        
        </>
    )

}