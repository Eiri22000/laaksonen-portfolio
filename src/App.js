//App.js 
import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header'; 
import About from './components/PersonalInfo'; 
import Education from './components/EducationalBackground'; 
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer'; 
import Skills from './components/Skills'; 

function App() { 
return ( 
	<Router> 
	<div> 
		<Header /> 
		<Routes> 
		<Route path="/" element={<About />} /> 
		<Route path="/education" element={<Education />} /> 
		<Route path="/skills" element={<Skills />} /> 
		<Route path="/projects" element={<Projects />} /> 
		<Route path="/contact" element={<Contact />} /> 
		</Routes> 
		<Footer /> 
	</div> 
	</Router> 
); 
} 

export default App; 
