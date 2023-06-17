import { useNavigate } from "react-router-dom";
export default function Contactme(){
	return (
		<div className="container-fluid contact-us-container-fluid">
			<div className="container contactme_container">
			<h1>Contact</h1>
				<div className="row">
					<div className="col-md-8 contact_div">
					<img src="https://img.freepik.com/free-photo/logo-design-contact-us-word_53876-124028.jpg?w=740&t=st=1686487722~exp=1686488322~hmac=53c870e65ec7fb286e999bb964b873c5812f9b77537b4fb7be996e55a60ecd94" width="100%"/>
					</div>
					<div className="col-md-4 contact_div">
					<p>Still you wwant to more about me,you can contact me on below links:</p>
					<ul>
						<li><a href="https://www.facebook.com/vaibhav.gangrade.9" className="btn btn-primary fb mb-2 socail_btn" target="_blank">  Facebbok</a></li>
						<li><a href="https://www.instagram.com/mp_13_lover/" className="btn btn-primary insta mb-2 socail_btn" target="_blank"> Instagram</a></li>
						<li><a href="" className="btn btn-primary naukri mb-2 socail_btn" target="_blank"> Naukri.com</a></li>
						<li><a href="" className="btn btn-primary skype mb-2 socail_btn" target="_blank"> Skype</a></li>
						<li><a href="https://github.com/Viv31" className="btn btn-primary github mb-2 socail_btn" target="_blank"> Github</a></li>
						<li><a href="https://stackoverflow.com/users/10657696/vaibhav" className="btn btn-primary stack mb-2 socail_btn" target="_blank"> Stackoverflow</a></li>
						<li><a href="mailto:vivgangs@gmail.com" className="btn btn-primary gmail mb-2 socail_btn" target="_blank"> Email me</a></li>
						<li><a href="https://www.linkedin.com/in/vaibhav-gangrade-796387134" className="btn btn-primary wp mb-2 socail_btn" target="_blank"> Linkidin</a></li>
						<li><a href="https://profiles.wordpress.org/vaibhav31gangrade/" className="btn btn-primary linkedin mb-2 socail_btn" target="_blank"> WordPress</a></li>
					</ul>
					</div>
					
				</div>
			</div>
		</div>
	)
}