import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './Header.scss';

import {ThemeContext} from '../../Context/ThemeContext'; 

export default function Header(props){
    const {onToggleTheme} = useContext(ThemeContext);
    return (
        <div>
        <header>
            <h1 className={styles.title}>{props.title}</h1>
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