import React from 'react';
import ReactDOM from 'react-dom';

class Content extends React.Component {
    render() {
      const {activity} = this.props;

        return (
          <div className="content">
          <div className="line"></div>

        {/* Timeline item */}
          {activity.map((activity) => {
            <div className="item">
              <div className="avatar">
                <img
                  alt={activity.text}
                  src={activity.user.avatar} />
                {activity.user.name}
              </div>

              <span className="time">
                {activity.timestamp}
              </span>
              <p>{activity.text}</p>
              <div className="commentCount">
                {activity.comments.length}
              </div>
            </div>
          )
          })}
        </div>
      )
    }
}
