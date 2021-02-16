import './App.css';
import React, { useState } from "react";

class App extends React.Component{
    constructor(props, timer) {
        super(props);
        this.timer = timer;
        this.state = {
            hour: 0,
            minute: 0,
            second: 0,
            currentClick: "start"
        };
    }
    handleStart = () => {
        this.timer = setInterval(() => {
            this.setState((prevState) => {
                return {
                    second: prevState.second + 1
                }
            });
            if(this.state.second === 60) {
                this.setState((prevState) => {
                    return {
                        minute: prevState.minute + 1,
                        second: 0
                    }
                })
            }
            if(this.state.minute === 60) {
                this.setState((prevState) => {
                    return {
                        hour: prevState.hour +1,
                        minute: 0
                    }
                })
            }

        }, 1000);

       // this.setState({
          //  currentClick: this.state.currentClick === "start" ? "wait" : "start",
       // })

    };

    handleStop = () => {
        clearInterval(this.timer);
    };

    handleReset = () => {
        this.setState( () => {
            return {
                hour: 0,
                minute: 0,
                second: 0
            }
        })
    };

    render() {
        const { currentClick } = this.state;
        const Action = (props) => {
            return (
                <div className="action">
                    <button onClick={props.handleReset} id="reset">
                        RESET
                    </button>
                    <button onClick={props.handleStart} id="start">
                        { currentClick !== "start" ? "WAIT" : "START"}
                    </button>
                    <button onClick={props.handleStop} id="stop">
                        STOP
                    </button>
                </div>
            )
        }

        return(
            <div className="parent">
                <div className="main">
                <Header />
                <Timer time={this.state}/>
                <Action handleStart={this.handleStart} handleStop={this.handleStop} handleReset={this.handleReset}/>
            </div>
            </div>
        )
    }
}
const Header = () => {
    return <h1 className="heading">STOP WATCH</h1>
};
const Timer = (props) => {
    return (
        <div className="timer">
            <div className="hour">{props.time.hour}</div>:
            <div className="min">{props.time.minute}</div>:
            <div className="sec">{props.time.second}</div>
        </div>
    )
}

export default App;
