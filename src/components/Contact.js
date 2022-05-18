import React, { useRef } from 'react';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';

export default function Contact() {

    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

        const sendEmail = async (e) => {
            e.preventDefault();
            const name = nameRef.current.value
            const email = emailRef.current.value
            const subject = subjectRef.current.value
            const message = messageRef.current.value

            await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    service_id: process.env.SERVICE_ID,
                    template_id: process.env.TEMPLATE_ID,
                    user_id: process.env.USER_ID,
                    template_params: {
                        user_name: name,
                        user_email: email,
                        user_subject: subject,
                        message
                    }
                })
            })
        };

    return (
        <section className="contact" id='contact'>
            <Flip top>
            <h1>Contact Me</h1>
            </Flip>
            <div className="contact-form">
            <Zoom clear>
                <form onSubmit={sendEmail}>
                    <input type="text" placeholder="fullname" name="user_name" ref={nameRef}/>
                    <br /><br /><br />

                    <input type="email" placeholder="email address" name='user_email' ref={emailRef} />
                    <br /><br /><br />
                    
                    <input type="subject" placeholder="subject" name="user_subject" ref={subjectRef}/>
                    <br /><br /><br />

                    <textarea rows="5" type="message" placeholder="message" name="message" ref={messageRef}></textarea>
                    <br /><br /><br />
                    <button className="btn">Submit</button>
                </form>
                <div className="my-info">
                    <h4>Email Address</h4>
                    <p>chinonyeremchukwu018@gmail.com</p>
                    <br />
                    <h4>Phone Number</h4>
                    <p>+2348146409606</p>
                    <br />
                    <h4>Follow Me</h4>
                    <a target="_blank" href="https://twitter.com/karis_nonye?t=46oalbGsJO5io2eRSXntAA&s=09"><i className="fab fa-twitter"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/chinonyerem-chukwu"><i className="fab fa-linkedin"></i></a>
                    <a target="_blank" href="https://github.com/Karisnonye"><i className="fab fa-github"></i></a>
                </div>
            </Zoom>
            </div>

            
        </section>
    )
}