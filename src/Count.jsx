import React from 'react';
import './App.css';

class Count extends React.Component {
    render() {
        let countClass = this.props.state.value === this.props.state.maxValue ? "maxCount" : "count";
        return (

            <div className={countClass}>
                <h1>{this.props.state.value > this.props.state.maxValue && <span className="incrValue">Incorrect value!</span>}
                {this.props.state.value <= this.props.state.maxValue && this.props.state.value}</h1>
            </div>

        )
    }
}

export default Count;
