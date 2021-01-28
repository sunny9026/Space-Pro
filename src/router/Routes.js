import React from 'react';
import { Route } from 'react-router-dom';
import Space from "../components/SpacePrograms";


export default () => {
  return(
    <div>
      <Route exact path="/" component={Space} />
    </div>
  );
};