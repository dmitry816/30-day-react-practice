import React from 'react';
import ReactDOM from 'react-dom';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: []
    }
  }
  componentWillMount() {
    this.setState({activity: data})
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.requestRefresh !== this.props.requestRefresh) {
      this.setState({loading: true}, this.updateData);
    }
  }

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
