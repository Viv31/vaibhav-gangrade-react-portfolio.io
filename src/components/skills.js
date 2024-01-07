import React from 'react';
import LiquidGauge from 'react-liquid-gauge';
import portfolio_data from './jsondata/portfolio_data';
function Skills() {
  const {skillsData}=portfolio_data;

  return (
  	<>
    <div className="container-fluid software-skills-container-fluid">
      <div className="container">
        <h1>Skills</h1>
		<div className="row">
          {skillsData.map((skill, index) => (
              <div className="col-md-2 skill-section">
              <div key={index} style={{marginBottom: '10px' }}>
                <LiquidGauge
                  width={120}
                  height={120}
                  value={skill.value}
                  label={skill.label}
                  circleColor={skill.circleColor}
                  waveColor={skill.waveColor}
                />
              </div>
              <span>{skill.label}</span>
               </div>
            ))}
<<<<<<< HEAD
      </div>
=======
         </div>
>>>>>>> main
      </div>
    </div>
    </>
  );
}

export default Skills;
