import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getTime();
    }
    setTimer() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.updateClock.bind(this), 1000);
    }
    updateClock() {
        const currentTime = new Date();
        this.setState({
          currentTime: currentTime
        }, this.setTimer);
    }
    render() {
        const {hours, minutes, seconds, ampm} = this.state;
        const currentTime = new Date(),
            hours = currentTime.getHours(),
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            ampm = hours => 12 ? 'pm': 'am';
        return(
            <div className='clock'>
                {hours == 0 ? 12 :
                    (hours > 12) ?
                    hours - 12 : hours
                }:{
                    minutes > 9 ? minutes : `0${minutes}`
                }:{
                    seconds > 9 ? seconds : `0${seconds}`
                } {ampm}
            </div>
        )
    }     
}
