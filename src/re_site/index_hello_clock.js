import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName : 'Jake',
    lastName : 'Watson'
};

function tick(){
    const element = (
        <div>
            <h1>Hello, {formatName(user)} </h1>
            <h2>Its is {new Date().toLocaleTimeString()}.</h2>
        </div>
        
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick , 1000);


