import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faCode } from '@fortawesome/free-solid-svg-icons'; 
import Breadcrumbs from './Breadcrumbs'; 
import './style.css';
import practicalAI from '../images/PracticalAI.png';
import scrumMaster from '../images/csm-badge.png';

const Education = () => { 
	const breadcrumbsPaths = 
		[ 
			{ title: 'Home', to: '/' }, 
			{ title: 'Education', to: '/education' } 
		]; 

	return ( 
		<section id="education"
			className="container text-center"> 
			<Breadcrumbs paths={breadcrumbsPaths} /> 
			<h1 className="section-title"> 
				<FontAwesomeIcon icon={faCode} 
					className="mr-2" /> 
				Education 
			</h1> 
			<div className="row"> 
				{/* School 1 */} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								Keuda Nurmijärvi
							</h5> 
							<p className="card-text"> 
								<p>Communications Technology and Electronics Installer</p>
								<p>Graduated: 2001</p>
								<a href="https://www.keuda.fi/?lang=en">Visit Keuda</a> 
							</p> 
						</div> 
					</div> 
				</div> 
				{/* School 2 */} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								Eira High School for Adults
							</h5> 
							<p className="card-text"> 
								<p>Matriculation examination</p>
								<p>Graduated: 2001</p>
								<a href="https://www.eira.fi/fi/">Visit Eira High School for Adults</a>  
							</p> 
						</div> 
					</div> 
				</div> 
				{/* School 3 */} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								Hyria Hyvinkää
							</h5> 
							<p className="card-text"> 
								<p>Business IT analyst</p>
								<p>Graduated: 2003</p>
								<a href="https://www.hyria.fi/">Visit Hyria</a>
							</p> 
						</div> 
					</div> 
				</div> 
				{/* School 4 */} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								Häme university of applied sciences 
							</h5> 
							<p className="card-text"> 
								<p>Bachelor of Business Information Technology</p>
								<p>To be graduated in the end of the year 2024</p>
								<a href="https://www.hamk.fi/en/">Visit HAMK</a>
							</p> 
						</div> 
					</div> 
				</div> 
				<h2 className="section-title"> 
				<FontAwesomeIcon icon={faCode} 
					className="mr-2" /> 
				Sertifications 
				</h2> 
				<div className="row"> 
				{/* Sertification 1 */} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
							Scrum Master Certified
							</h5> 
							<p className="card-text">
								<img src={scrumMaster} alt="ScrumPratical AI badge" className="img-fluid rounded-circle badge"/> 
								<p>Scrum Alliance</p>
								<p>Issued Jan 2024, Expires Jan 2026</p>
								</p> 
						</div> 
					</div> 
				</div>
				{/* Sertification 2*/} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								Practical AI
							</h5> 
							<p className="card-text">
								<img src={practicalAI} alt="Pratical AI badge" className="img-fluid rounded-circle badge align-right"/>
								<p>Issued on 03/27/2024</p>
								<p>Kajaani university of applied sciences</p>
							</p> 
						</div> 
					</div> 
				</div>
			</div>
			</div>
		</section> 
	); 
}; 

export default Education;
