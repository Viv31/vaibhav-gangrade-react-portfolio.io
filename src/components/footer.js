import React from 'react';
export default function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="row footer_row justify-content-center">
                <div className="col-6 col-md-3 footer_div">
                    <a href="mailto:vivgangs@gmail.com">
                        <img src="/vaibhav-gangrade-react-portfolio/images/gmail-01.png" height="55px" alt="Gmail" />
                    </a>
                </div>
                <div className="col-6 col-md-3 footer_div">
                    <a href="https://github.com/Viv31">
                        <img src="/vaibhav-gangrade-react-portfolio/images/github.png" height="55px" alt="GitHub" />
                    </a>
                </div>
                <div className="col-6 col-md-3 footer_div">
                    <a href="https://stackoverflow.com/users/10657696/vaibhav">
                        <img src="/vaibhav-gangrade-react-portfolio/images/stackoverflow-01.png" height="55px" alt="Stack Overflow" />
                    </a>
                </div>
                <div className="col-6 col-md-3 footer_div">
                    <a href="https://www.linkedin.com/in/vaibhav-gangrade-796387134">
                        <img src="/vaibhav-gangrade-react-portfolio/images/linkedin-01.png" height="55px" alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </div>
    );
}
