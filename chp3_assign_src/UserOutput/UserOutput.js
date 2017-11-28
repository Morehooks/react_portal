import React from 'react';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hello from:</p>
            <p>{props.userName}</p>
            
        </div>
    )
};

export default userOutput;