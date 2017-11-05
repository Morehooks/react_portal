import React from 'react';
import ReactDOM from 'react-dom';

// https://reactjs.org/docs/components-and-props.html

function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}

/*const element = <Welcome name="Jake"/>;
ReactDOM.render(
    element,
    document.getElementById('root')
);*/

function App(){
    return (
        <div>
            <Welcome name="Jake"/>
            <Welcome name="Katie"/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));


