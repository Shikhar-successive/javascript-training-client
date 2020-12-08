import React, { Component } from 'react';

import { TextField, Slider } from '../../components';

class TextFieldDemo extends Component {
  render() {
    return (
      <>
        <Slider
          alttext="Default Banner"
          banners={['array ', 12, ' hello']}
          defaultbanner="default.png"
          duration={2000}
          height={200}
          random={false}
        />
        <p>This is Disabled Input</p>
        <TextField
          value="disabled input"
          error="Error"
          disabled
        />
        <p>A Valid Input</p>
        <TextField
          value="Accessible"
          error="Error"
          disabled={false}
        />
        <p>An Input with Error</p>
        <TextField
          value="101"
          error="Error"
          disabled={false}
          pattern="[A-Za-z]+"
        />
        <p color="red">Could net be greater than</p>
      </>
    );
  }
}

export default TextFieldDemo;
