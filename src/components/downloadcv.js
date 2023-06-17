import { useNavigate } from "react-router-dom";
export default function DownloadCV(){
	return (
		<div className="container-fluid cv-container-fluid">
			<div className="container download_cv_container">
			
				<div className="row">
					<div className="col-md-4 education_div"></div>
					<div className="col-md-4 download_btn_div">
					<a href="./images/Vaibhav_Gangrade_web_Developer.docx" className="btn btn-primary btn-lg download_cv">Download CV</a>
					<span id="no_of_downloaded_cv"></span>
					</div>
					<div className="col-md-4 education_div"></div>
				</div>
			</div>
		</div>
	)
}