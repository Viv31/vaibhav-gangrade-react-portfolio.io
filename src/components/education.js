import { useNavigate } from "react-router-dom";
export default function Education(){
	return (
		<div className="container-fluid education-container-fluid">
			<div className="container education_row">
			<h1 className='text-center mt-2 mb-2'>Education</h1>
				<div className="row">
					<div className="col-md-4 education_div">
						<div className="card education_card">
						  <div className="card-header">BE(IT)</div>
						  <div className="card-body">Mahakal Institute of Technology, Ujjain (MP)</div>
						  <div className="card-footer">8.04 CGPA</div>
						</div>
					</div>
					<div className="col-md-4 education_div_card2">
						<div className="card education_card">
						  <div className="card-header">12th (MP Board)</div>
						  <div className="card-body">Saraswati Vidya Mandir, Shujalpur (MP)</div>
						  <div className="card-footer">77%</div>
						</div>
					</div>
					<div className="col-md-4 education_div_card3">
						<div className="card education_card">
						  <div className="card-header">10th (MP Board)</div>
						  <div className="card-body">Saraswati Vidya Mandir, Shujalpur (MP)</div>
						  <div className="card-footer">82.5%</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}