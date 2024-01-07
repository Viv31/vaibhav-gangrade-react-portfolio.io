import { useNavigate } from "react-router-dom";
import portfolio_data from './jsondata/portfolio_data';

export default function Experience() {
  const { workExperienceData } = portfolio_data;
  return (
    <>
      <section className="exp">
        <div className="container py-5">
          <div className="main-timeline-2">
            {workExperienceData.map((workex, index) => (
              <div className={`timeline-2 ${workex.cardAlignmentClass}`} key={index}>
                <div className="card">
                  <img src={workex.companyImg} className="card-img-top" alt="Responsive image" />
                  <div className="card-body p-4">
                    <h4 className="fw-bold mb-4">{workex.companyname}</h4>
                    <p className="text-white mb-4">
                      <i className="far fa-clock" aria-hidden="true"></i>
                      {workex.WorkDuration}
                    </p>
                    <p className="mb-0">{workex.WorkDescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}