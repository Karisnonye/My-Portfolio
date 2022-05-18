import Zoom from 'react-reveal/Zoom';

export default function Projects (props) {
    return (
        <div>
            <Zoom clear>
            <div class="responsive">
                <div class="gallery">
                        <img src={props.image} alt="image"/>
                    <div className="desc">
                        <h4 className="project-name">{props.projectName}</h4>
                        <a href={props.link}><button>View Project<i className="fas fa-angle-double-right"></i></button></a>
                    </div>                
                </div>
            </div>
            </Zoom>
            
    </div>
    )
}