import React from 'react';

var buttonStyle = {
    margin: '30px 30px 30px 30px',
    color: '#f34700',
    backgroundcolor: "#ffffff",
    padding: '10px 20px 10px 20px',
    fontsize: '24px',
    fontfamily: 'monospace'
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