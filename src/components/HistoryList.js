import React, { Component } from 'react';
import History from './History';
import './css/HistoryList.css';

class HistoryList extends Component {
  render() {
    return (
      <ul className="historyList">
        <History />
      </ul>
    );
  }
}

export default HistoryList;