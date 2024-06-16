import { useNavigate } from "react-router-dom";
import React from 'react';
import Typewriter from "typewriter-effect";
import portfolio_data from './jsondata/portfolio_data';
export default function Aboutme(){
	const { introduction } = portfolio_data;

	return (
		<div className="container-fluid about-container-fluid">
		<div className="container">
			<div className="row aboutrow mt-4">
				<div className="col-md-4 mt-4">
					<img src={portfolio_data.MyImage} className="rounded" height="80%" width="100%"/>
				</div>
				<div className="col-md-8 mt-4 abotme" >
				<span>Hello I am,</span>
				<Typewriter
				 options={{
    			 strings: ['<span>Vaibhav Gangrade</span>', '<span>A Web Developer</span>','<span>A Web Designer</span>','<span>A Wordpress Developer</span>','<span>A Githuber</span>'],
    			 autoStart: true,
    			 loop: true,
  				}}
				/>
				<Typewriter
				 options={{
    			 strings: [`<p>${introduction}</p>`],
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
