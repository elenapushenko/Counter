import React from 'react';
import './App.css';

class Buttons extends React.Component {


    render() {
        let resetDisable = this.props.state.value === this.props.state.startValue? "disabled" : "";
        let addDisable = this.props.state.value === this.props.state.maxValue || this.props.state.value > this.props.state.maxValue? "disabled" : "";
        let disableClassAdd = this.props.state.value === this.props.state.maxValue || this.props.state.value > this.props.state.maxValue? "disableClassAdd" : "addStyle";
        let disableClassReset = this.props.state.value === this.props.state.startValue? "disableClassReset" : "resetStyle";
        return (

            <div className="buttons">
                <button className={disableClassAdd} onClick={this.props.add} disabled={addDisable}>Add</button>
                <button className={disableClassReset} onClick={this.props.reset} disabled={resetDisable}>Reset</button>
                <button className="setStyle" onClick={this.props.set}>Set</button>
            </div>

        )
    }
}

export default Buttons;
