import FillerText from './FillerText';
import React from 'react';

class Webpage extends React.Component{
  render(){
    return (
      <p>The "world's" coolest webpage.</p>,
      <FillerText />,
      <FillerText />
    );
  }
}

export default Webpage;
