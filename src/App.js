import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
  render() {
    return (
      <div className='notificationsFrame'>
        <div className='panel'>
          <Header />
          <Content />
        </div>
      </div>
    )
  }
}
var mount = document.querySelector('#root');
ReactDOM.render(<App />, mount);