import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faFileDownload } 
	from '@fortawesome/free-solid-svg-icons'; 
import { faLaptopCode } 
	from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from './Breadcrumbs'; 
import Skills from './Skills'; 
import './style.css'; 

const Projects = () => { 
	const breadcrumbsPaths = 
		[ 
			{ title: 'Home', to: '/' }, 
			{ title: 'Projects', to: '/projects' } 
		]; 

	return ( 
		<section id="projects"
			className="container text-center"> 
			{/* Include the Breadcrumbs component */} 
			<Breadcrumbs paths={breadcrumbsPaths} /> 
			<div className="row justify-content-center align-items-center"> 
				<div className="col-md-8"> 
					<h2 className="section-title"> 
						<FontAwesomeIcon icon={faFileDownload} 
							className="mr-2" /> 
						Projects 
					</h2>
					<h3 className="project-title"> <FontAwesomeIcon icon={faLaptopCode} 
							className="mr-2" /> 
							ServiceNow customer implementation project to global instance</h3>
					<p className="section-description"> 
						Customer implementation project to implement customers to ServiceNow instance. Amount implemented customers were over 170 from four different countries.
					</p>
					<h3 className="project-title"> <FontAwesomeIcon icon={faLaptopCode} 
							className="mr-2" /> 
							Implementing onsite service customers to local ServiceNow instance.</h3>
					<p className="section-description"> 
					Implementing onsite service customers to local ServiceNow instance from retiring system.
					</p>
					<h3 className="project-title"> <FontAwesomeIcon icon={faLaptopCode} 
							className="mr-2" /> 
							Building ITSM service platform to local ServiceNow instance.</h3>
					<p className="section-description"> 
					Building ITSM service platform to local ServiceNow instance for restricted customers use.
					</p>
					{/* Include the Skills component here */} 
					<Skills /> 
				</div> 
			</div> 
		</section> 
	); 
}; 

export default Projects;
