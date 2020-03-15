import React from 'react';
import './App.css';

class Settings extends React.Component {


    render() {
let classInput = this.props.error ? "error" : "inputLine";
        return (

            <div className="settings">
                <div className="displayStyle">
                   <span> <span className="inputName"> max value: </span> <input className={classInput}
                                                                                onChange={this.props.changeMaxValue}
                                                                                value={this.props.maxValue}
                                                                                type={"number"}
                   />
                   </span>
                   <span> <span className="inputName"> start value:</span> <input className={classInput}
                                                                                 onChange={this.props.changeStartValue}
                                                                                 value={this.props.startValue}
                                                                                 type={"number"}
                   />
                   </span>
                </div>
                <div className="buttons">
                    <button className="setStyle" onClick={this.props.set} > Set </button>
                </div>
            </div>

        )
    }
}

export default Settings;
