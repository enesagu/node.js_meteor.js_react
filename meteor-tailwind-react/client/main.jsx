import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';

Meteor.startup(() => {
  const container = document.getElementById("react-target");
  const root = creatRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  


  

});
