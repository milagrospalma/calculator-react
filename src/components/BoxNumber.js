import React, { Component } from 'react';
// estilos para la calculadora

import Number from './Number';

class BoxNumber extends Component {
  render() {
    return (
      <div className="container">
        <Number/>
      </div>
    );
  }
}

export default BoxNumber;