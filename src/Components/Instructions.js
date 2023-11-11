import React from 'react';

const Instructions = ({limitForRemembering}) => {
    return (
        <h1 className="instructions">
            You have {limitForRemembering} seconds to remember <br/>all the animals!
        </h1>
    );
};

export default Instructions;