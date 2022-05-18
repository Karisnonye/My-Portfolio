import Slide from 'react-reveal/Slide';
import snap from "../images/snap.jpg"

export default function Intro() {
    return (
        <main className="rich">
            <div className="name">
            <Slide left>
                <p>Hi, I'm<span className="my-name">CHINONYE</span></p>
                    <div className="hard-skill-head">
                        <div className="hard-skill-wrapper">  
                            <h5 className= "hard-skills">Frontend Developer</h5>
                            <h5 className= "hard-skills">Developer Relations</h5>
                            <h5 className= "hard-skills">Technical Writer</h5>
                            <h5 className= "hard-skills">Community Manager</h5>
                        </div>
                    </div>
            </Slide>
            <Slide right>
                <div className="intro">
                    <a href="#contact"><button type="button" className="btn">Hire Me</button></a>
                    <a href="https://drive.google.com/file/d/1zXLZOe6CXqtlVd6DoMaeF5LwwsMKGMu3/view?usp=drivesdk"><button type="button" className="btn">Download CV</button></a>
                </div>
            </Slide>
            </div>
            
            <img src={snap} alt="snap picture" className="profile-image" />
        </main>
    )
}