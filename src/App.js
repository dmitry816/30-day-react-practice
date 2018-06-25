import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
  render() {
    return (
      <div className='notificationsFrame'>
        <div className='panel'>
          <Header title="Timeline" />
          <Header title="Profile" />
          <Header title="Settings" />
          <Header title="Chat" />
          <Content activities={activities}/>
        </div>
      </div>
    )
  }
}
var mount = document.querySelector('#root');
ReactDOM.render(<App />, mount);