import React, { Component } from 'react';
import './css/ShowResult.css';

class ShowResult extends Component {
  render() {
    return (
      <div>
        <form id="showNumber">
          <output name="text"></output>
        </form>
      </div>
    );
  }
}

export default ShowResult;