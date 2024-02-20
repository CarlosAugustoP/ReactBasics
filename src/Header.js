import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props){
    return (
        <header>
            <h1>{props.title}</h1>
            {props.children}
        </header>
    );
}

Header.proptypes = {
    title: PropTypes.string,
    children: PropTypes.node
};

Header.defaultProps = { 
    title: 'Jstack blog'
};