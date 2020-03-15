import React from 'react';
import './App.css';
import Count from "./Count";
import Buttons from "./Buttons";
import Settings from "./Settings";

class App extends React.Component {


    state = {
        value: 0,
        startValue: 0,
        maxValue: 5,
        isHidden: false,
        error:  false
    };

    componentDidMount() {
        this.restoreState()
    }

    onHideCounter = () => {
        this.setState({isHidden: true}, () => {
            this.saveState()
        })
    };
    onShowCounter = () => {
        this.setState({isHidden: false, value: this.state.startValue}, () => {
            this.saveState()
        })
    };

    onClickAdd = () => {
        let value = this.state.value + 1;
        if (this.state.value < this.state.maxValue) {
            this.setState({value: value}, () => {
                this.saveState()
            })
        }
    };
    onClickReset = () => {
        this.setState({value: this.state.startValue}, () => {
            this.saveState()
        })
    };

    changeMaxValue = (e) => {
        let newMaxValue = Number(e.currentTarget.value);
        if (newMaxValue <= this.state.startValue) {
            this.setState({
                maxValue: newMaxValue,
                error: true
            }, () => {
                this.saveState()
            })
        } else {
            this.setState({
                maxValue: newMaxValue,
                error: false
            }, () => {
                this.saveState()
            })
        }
    };


    changeStartValue = (e) => {
        let newStartValue = Number(e.currentTarget.value);
        if (newStartValue >= this.state.maxValue) {
            this.setState({
                startValue: newStartValue,
                error: true
            }, () => {
                this.saveState()
            })
        } else {
            this.setState({
                startValue: newStartValue,
                error: false
            }, () => {
                this.saveState()
            })
        }
    };

    saveState = () => {
        let sateAsString = JSON.stringify(this.state)
        localStorage.setItem('counter',sateAsString)
    };

    restoreState = () => {
        let state = this.state;
        let stateAsString = localStorage.getItem('counter');
        if (stateAsString !== null) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state)
    };


    render() {
        return (
            <div className="App">
                {!this.state.isHidden &&
                <Count state={this.state}/>}
                {!this.state.isHidden && <Buttons state={this.state}
                                                  add={this.onClickAdd}
                                                  reset={this.onClickReset}
                                                  set={this.onHideCounter}/>}
                {this.state.isHidden && <Settings set={this.onShowCounter}
                                                  changeMaxValue={this.changeMaxValue}
                                                  changeStartValue={this.changeStartValue}
                                                  maxValue={this.state.maxValue}
                                                  startValue={this.state.startValue}
                                                  error={this.state.error}/>}

            </div>
        )
    }
}


export default App;
