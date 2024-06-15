import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Achievements(){
	return (
		<div className="container-fluid achievements-container-fluid">
			<div className="container achievements_container">
			<h3 className="text-white text-center p-4">Achievements & Extra Activity</h3>
				<div className="row">
					<div className="col-md-10 mx-auto achievements_div">
					<ul><li><i className="fas fas-trophy"></i> Won <b>First Prize</b> in <b>Chess</b> competetion in college techfest "<b>Emblaze 2K16.</b>"</li>
						<li>Actively Participate in <b>Chess</b> during college sports. </li>
						<li><i className="fa fa-trophy"></i><b>Secured second position</b> in <b>"general knowledge examination"</b> held in <b>SLS college</b> Shujalpur in the year 2013.</li><li>Two times runner up in chess during college nodals.</li>
						<li>Get apporoval for Wordpress plugin "<b>Custom Admin Login</b>" by <b>Wordpress.org</b> and upload in Plugin directory. </li>
						<li>Get apporoval for Wordpress plugin "<b>Easy FAQ</b>" by <b>Wordpress.org</b> and upload in Plugin directory. </li>
						<li>Get apporoval for Wordpress plugin "<b>Image For Opengraph Meta</b>" by <b>Wordpress.org</b> and upload in Plugin directory. </li>
						<li>Get apporoval for Wordpress plugin "<b>Password Generator Widget</b>" by <b>Wordpress.org</b> and upload in Plugin directory. </li>
						<li>Get apporoval for Wordpress plugin "<b>Dynamic Image Slider</b>" by <b>Wordpress.org</b> and upload in Plugin directory. </li>
						<li>Get apporoval for Wordpress plugin "<b>Element Addon</b>" by <b>Wordpress.org</b> and upload in Plugin directory. </li>
					</ul>
					</div>
					</div>
					<div className="row mt-4 text-center">
					<div className="col-md-4">
					<span className="text-white text-center git_project">Github Projects</span>
					<h1 className="text-white text-center">115</h1>
					</div>
					<div className="col-md-4">
						<span className="text-white text-center">PLugins in Wordpress Directory</span>
					<h1 className="text-white text-center">6</h1>
					</div>
					<div className="col-md-4">
						<span className="text-white text-center">PROJECTS HOSTED ON GITHUB</span>
					<h1 className="text-white text-center">5</h1>
					</div>
				</div>
			</div>
		</div>
	)
}