import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props){
    console.log(props.theme);
    return (
        <button onClick = {props.onClick}>
            {props.children}
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    theme: PropTypes.string.isRequired
}