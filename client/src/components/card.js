import React from 'react';

const Card = (props) => {
    <div>
        <p>{props.type}</p>
        <p>{props.author}</p>
        <p>{props.description}</p>
        <p>{props.id}</p>
    </div>
};

export default Card;