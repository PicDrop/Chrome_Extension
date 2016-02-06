import React, { Component } from 'react';
import FolderList from './FolderList';

class Dashboard extends Component {
  render() {
    return (
      <section className="dashboard">
        <header>
          <h4>Folders</h4>
        </header>
        <FolderList history={this.props.history}/>
      </section>
    );
  }
}

export default Dashboard;

