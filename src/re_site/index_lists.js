import React from 'react';
import ReactDOM from 'react-dom';

// https://reactjs.org/docs/lists-and-keys.html

//simple example, no components needed.
/*const numbers = [1, 2, 3, 4, 5]
const listItems = numbers.map((number) => <li>{number}</li>);

ReactDOM.render(<ul>{listItems}</ul>, document.getElementById('root'));*/

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number => <li  key={number.toString()}>{number}</li>));

    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5]

ReactDOM.render(
    <NumberList numbers={numbers}/>, 
    document.getElementById('root')
);
