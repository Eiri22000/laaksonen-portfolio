import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faUser } 
	from '@fortawesome/free-solid-svg-icons'; 
import './style.css'; 
import me from '../images/eiri.png';

const About = () => { 
	return ( 
		<section id="about"
			className="container text-center"> 
			<div className="row"> 
				<div className="col-md-8 offset-md-2"> 
					<h2 className="section-title"> 
						<FontAwesomeIcon icon={faUser} 
							className="mr-2" /> 
						About Me
					</h2> 
					<div className="profile-image-container"> 
						<img src={me} alt="Eiri" className="img-fluid rounded-circle profile-image" /> 
					</div> 
					<p className="section-description mt-4"> 
						I'm an ITSM System specialist and I work with ServiceNow systems. I'm currently studying at Häme universtity of applied sciences and working at the same time.
					</p>
					<p className="section-description mt-4">On freetime I go out in the woods with my labrador retriever Sulo. I also enjoy spending time in our grill hut "kota" with my family.</p> 
				</div> 
			</div> 
		</section> 
	); 
}; 

export default About;
