import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './styles/global';
import App from './components/App';

// In react, we can use functions or classes to create components.
// A created component will work as an html tag.

ReactDOM.render(
    <>
    <GlobalStyle />
    <App />,
    </>,
    
    document.getElementById('root')
);

