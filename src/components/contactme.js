import { useNavigate } from "react-router-dom";
import portfolio_data from './jsondata/portfolio_data';


export default function Contactme(){
	const { contactMeData } = portfolio_data;
	const { ContactPageImg } = portfolio_data;

	return (
		<div className="container-fluid contact-us-container-fluid">
			<div className="container contactme_container">
			<h1 className='text-center mt-2 mb-2'>Contact</h1>
				<div className="row">
					<div className="col-md-8 contact_div">
					<img src={portfolio_data.ContactPageImg} width="100%"/>
					</div>
					<div className="col-md-4 contact_div">
					<p>Still you want to know more about me,you can contact me on below links:</p>

					<ul>{contactMeData.map((contactInfo,index)=>(
						<li><a href={contactInfo.socialPlatFormLink} className={contactInfo.RefClassNameForLinkHoverColor} target="_blank">{contactInfo.socialPlatFormName}</a>
						</li>
					))}
					</ul>

					</div>
					
				</div>
			</div>
		</div>
	)
}