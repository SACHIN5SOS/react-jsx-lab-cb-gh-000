import FillerText from './FillerText';
import ReactDOM from 'react-dom';
import React from 'react';

const title= React.createElement('p',{},'The world's coolest webpage.');
ReactDOM.render(
  title,
  <FillerText />,
  <FillerText />,
  document.getElementById('global')
);
