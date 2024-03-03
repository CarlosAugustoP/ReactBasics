import styled, {css} from 'styled-components';

export const Container = styled.article `
    margin-bottom: 24px;
    /* opacity: ${(props) => props.removed ? 0.5 : 1.0}; */
    ${(props)=>css `
        color: ${props.removed ? 'red' : 'black'};
        opacity: ${props.removed ? 0.5 : 1.0};
    `}
`; 

export const Subtitle = styled.h2`
    display: block;
    color: hsl(165, 100%, 50%);
`;
export const Rate = styled.span`
    color: hsl(165, 100%, 50%);
    opacity: 0.5;
`;

