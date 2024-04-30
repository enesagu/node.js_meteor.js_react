// Any JSX in there is automatically ran for us

// import the React library

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import { App } from '/imports/ui/App';
import axios from 'axios';
// Create a start with component


Meteor.startup(() => {
  const container = document.getElementById('react-target');
  const root = createRoot(container);
  root.render(<App />);
  axios.get('https://api.igmur.com/3/gallery/hot/viral/0').then(Response => console.log(Response));
});
