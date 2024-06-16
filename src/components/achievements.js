import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import portfolio_data from './jsondata/portfolio_data';
export default function Achievements(){
	 const { achievements } = portfolio_data;
	 const { extraActity } = portfolio_data;
	return (
		<>
		<div className="container-fluid achievements-container-fluid">
			<div className="container achievements_container">
			<h3 className="text-white text-center p-4">Achievements & Extra Activity</h3>
				<div className="row">
					<div className="col-md-10 mx-auto achievements_div">
					<ul>
					 {achievements.map((achievements_info, index) => (
						<li>{achievements_info.achievement_description}</li>
					))}
					</ul>
					</div>
					</div>
					<div className="row mt-4 text-center">
					{extraActity.map((extra_activity_info, index) => (
						<div className="col-md-4">
						<span className="text-white text-center git_project">{extra_activity_info.title}</span>
						<h1 className="text-white text-center">{extra_activity_info.numbers}</h1>
						</div>	
					))}
				</div>
			</div>
		</div>
		</>
	)
}