import { useNavigate } from "react-router-dom";
export default function Hobbies(){
	return (
		<div className="container-fluid hobby-container-fluid">
			<div className="container hobby_container mb-2">
			<h1 className='text-center mt-2 mb-2'>Hobbies</h1>
				<div className="row">
					<div className="col-md-4">
						<div className="card hobby_div" style={{"background":"linear-gradient(0deg, rgba(1, 1, 1, 0.3), rgba(0, 0, 0, 0.3)),url('https://img.freepik.com/free-photo/business-strategy-concept-with-figures-chessboard-foggy-wooden-table-side-view_176474-9267.jpg?size=626&ext=jpg&ga=GA1.1.893466131.1677953191&semt=sph')","backgroundSize":"cover"}}>
							  <div className="card-header"></div>
						<div className="card-body">
							<a href="https://www.chess.com/member/vivgangs" target="_blank" className="btn btn-primary chess_play_btn mt-4 ms-4">Play With Me On Chess.com </a>
						</div>
						<div className="card-footer"></div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card hobby_div" style={{"background":"linear-gradient(0deg, rgba(1, 1, 1, 0.3), rgba(0, 0, 0, 0.3)),url('https://cdn.siasat.com/wp-content/uploads/2023/01/Cricket.jpg')","backgroundSize":"cover"}}>
							  <div className="card-header"></div>
						<div className="card-body">
							

						</div>
						<div className="card-footer"></div>
						</div>
					</div>
					
					<div className="col-md-4">
					<div className="card hobby_div" style={{"background":"linear-gradient(0deg, rgba(1, 1, 1, 0.3), rgba(0, 0, 0, 0.3)),url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5LSx-0EIIwFGHpKYx2RYHPPEFMlSaabq1ouCiB-FvZ-sGw744_SW-rX05t9oYAKNiH00&usqp=CAU')","backgroundSize":"cover"}}>
							  <div className="card-header"></div>
						<div className="card-body">
							

						</div>
						<div className="card-footer"></div>
						</div>
					</div>
					<div className="col-md-4" >
					<div className="card hobby_div" style={{"background":"linear-gradient(0deg, rgba(1, 1, 1, 0.3), rgba(0, 0, 0, 0.3)),url('https://media.gettyimages.com/id/490546023/photo/carom-board.jpg?s=612x612&w=0&k=20&c=K4-PK2O7V8WLm7YJwb_2YhIZUD2BOBVcylVJ0lN-S_I=')","backgroundSize":"cover"}}>
							  <div className="card-header"></div>
						<div className="card-body">
							<img src="" width="100%"/>

						</div>
						<div className="card-footer"></div>
						</div>
					</div>
					<div className="col-md-4">
					<div className="card hobby_div" style={{"background":"linear-gradient(0deg, rgba(1, 1, 1, 0.3), rgba(0, 0, 0, 0.3)),url('https://img.freepik.com/free-photo/colorful-painting-supplies-with-white-blank-paper-wooden-background_23-2148118133.jpg?size=626&ext=jpg&ga=GA1.1.893466131.1677953191&semt=sph')","backgroundSize":"cover"}}>
							  <div className="card-header"></div>
						<div className="card-body">
							

						</div>
						<div className="card-footer"></div>
						</div>
					</div>
					<div className="col-md-4">
					<div className="card hobby_div" style={{"background":"linear-gradient(0deg, rgba(1, 1, 1, 0.3), rgba(0, 0, 0, 0.3)),url('https://img.freepik.com/free-photo/couple-tourists-with-backpacks-mountain_1150-7520.jpg?size=626&ext=jpg&ga=GA1.1.893466131.1677953191&semt=sph')","backgroundSize":"cover"}}>
							  <div className="card-header"></div>
						<div className="card-body">
						</div>
						<div className="card-footer"></div>
						</div>
					</div>
				</div>
				<br/><br/><br/>
			</div>
		</div>
	)
}