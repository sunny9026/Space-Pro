import React from 'react';

export default ({ links, mission_name, flight_number, mission_id, launch_year, launch_success, launch_landing })  => {
  return (
    <div className="space-item">
      <div className="img-container"><img src={links.mission_patch} alt=""/></div>
      
      <div className="space-item-data">
        <h5 className="headingText">{`${mission_name} #${flight_number}`}</h5>
        <h5>Mission Ids:<ul>{mission_id.map((item, i) => <li key={i}>{item}</li>)}</ul></h5>
        <h5>Launch Year: {launch_year}</h5>
        <h5>Successful Launch: {launch_success}</h5>
        <h5>Successful Landing: {launch_landing}</h5>
      </div>
    </div>
  );
};