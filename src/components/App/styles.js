import styled from 'styled-components';

import MainTitle from '../Title';
    /*
        Reutilizando o componente
        Title do arquivo dentro de src 
        e retfatorando ele com base nas 
        necessidades do componente App.
    */

export const Title = styled(MainTitle)`
    display: block;
    color: 'white';
    font-family: 'Comic Sans MS', cursive;
`;