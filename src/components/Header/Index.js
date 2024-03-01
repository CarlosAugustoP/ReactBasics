import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styled from 'styled-components';


import {ThemeContext} from '../../Context/ThemeContext'; 

const Title = styled.h1`
   color: hsl(165, 100%, 50%);
`;

export default function Header(props){
    const {onToggleTheme} = useContext(ThemeContext);
    return (
        <div>
        <header>
            <Title>{props.title}</Title>
            <Button onClick = {onToggleTheme}>
                Mudar tema
            </Button>
            {props.children}
        </header> 
        </div>
    );
}

Header.proptypes = {
    title: PropTypes.string,
    children: PropTypes.node
};

Header.defaultProps = { 
    title: 'Jstack blog'
};