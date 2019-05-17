import React from 'react';

var buttonStyle = {
    margin: '10px 10px 10px 0'
  };

/*Button.jsx */
const Button = (props) => {
    return (
        <button
            name={props.name}
            value={props.value}
            onClick={props.onClick}
            style={buttonStyle}>
            {props.title}
        </button>
    )
}

export default Button;