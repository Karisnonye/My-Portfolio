import Wobble from 'react-reveal/Wobble';
import Flash from 'react-reveal/Flash';
import Slide from 'react-reveal/Slide';
import snap from "../images/snap.jpg"


export default function About() {
    return (
        <section className="about-me">
            <Wobble>
            <h1>About Me</h1>
            </Wobble>
            <Flash>
            <img src={snap} alt="" id= "me" />
            </Flash>            
            <div className="info">
                <Slide left>
                <p>Chinonyerem Chukwu is a Computer Science student who is a Technical Writer
                    and has basic knowledge of HTML, CSS and Javascript.
                    She has a high interest in the advocacy and management of the underrepresented in tech community.
                    On Campus, she has had the opportunity to participate in several activities targeted at empowering 
                    students in tech. She loves cats, music and is a very big foodie, lol.
                </p>
                </Slide>
                <br />
                <Slide right>
                <h2>Skills</h2>
                <br />
                <li className="skill-box">Html</li>
                <li className="skill-box">CSS</li>
                <li className="skill-box">Javascript</li>
                <li className="skill-box">React</li>
                <li className="skill-box">Community Management</li>
                <li className="skill-box">Technical Writing</li>
                <br /><br />
                </Slide>
                <h2 className="info-head">Education</h2>
                <div className="line">
                    <Slide bottom>
                    <div className="school">
                        <h6>University of Nigeria, Nsukka - Enugu, Nigeria</h6>
                        <p>Bachelor of Science, Computer Science</p>
                        <span id="year"><i>October, 2018 - August, 2022</i></span>
                    </div>
                    </Slide>
                </div>
            </div>
        </section>
    )
}