import FillerText from './FillerText';
import React from 'react';

class Webpage extends React.Component{
  render(){
    return (
      React.createElement('p',{},"The world's coolest webpage"),
      <FillerText />,
      <FillerText />
    );
  }
}

export default Webpage;
