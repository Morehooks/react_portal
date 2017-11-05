import React from 'react';
import ReactDOM from 'react-dom';

// https://reactjs.org/docs/state-and-lifecycle.html

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return (
            <div>
                <h1>Hello World!</h1>
                <h1>It is {this.state.date.toLocaleTimeString()}.</h1>
            </div>
        );
    }
}

//Clock components are independent, so you can call as many as you want...
function App(){
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    )
}

function tick(){
    ReactDOM.render(<App />, 
    document.getElementById('root'));
}

setInterval(tick, 1000);