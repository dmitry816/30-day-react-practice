import React from 'react';
import ReactDOM from 'react-dom';

class Content extends React.Component {
  render() {
    const {activity} = this.props;
      <div className="content">
      <div className="line"></div>

      {/* Timeline item */}
      {activity.map((activity) => {
        <ActivityItem activity={activity} />
      })}
    </div>
  }
}
