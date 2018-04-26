import React, { Component } from 'react';
import './kanban.css';
import Kanban from './kanban-board/containers/kanban-board'

class App extends Component {
  render() {
    return (
      <div>
      <Kanban/>
      </div>
    )
  }
}

export default App;
