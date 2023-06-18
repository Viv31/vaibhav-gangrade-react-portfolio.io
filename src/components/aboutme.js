import { useNavigate } from "react-router-dom";
import React from 'react';
import Typewriter from "typewriter-effect";
export default function Aboutme(){

	return (
		<div className="container-fluid about-container-fluid">
		<div className="container">
			<div className="row aboutrow mt-4">
				<div className="col-md-4 mt-4">
					<img src="/vaibhav-gangrade-react-portfolio.io/images/vaibhav_gangrade.jpg" className="rounded" height="80%" width="100%"/>
				</div>
				<div className="col-md-8 mt-4 abotme" >
				<span>Hello I am a,</span>
				<Typewriter
				 options={{
    			 strings: ['<span>Vaibhav Gangrade</span>', '<span>Web Developer</span>','<span>Web Designer</span>','<span>Wordpress Developer</span>','<span>Githuber</span>'],
    			 autoStart: true,
    			 loop: true,
  				}}
				/>
				<Typewriter
				 options={{
    			 strings: ['<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'],
    			 autoStart: true,
    			 loop: true,
  				}}
				/>
					
				</div>
			</div>
		</div>
		</div>
	)
}
