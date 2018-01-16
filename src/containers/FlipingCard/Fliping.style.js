import styled from 'styled-components';

export const CardContainer = styled.div `
    perspective: 600;
`

export const Card = styled.div `
    position:relative;
    height: 200px;
    width: 200px;
    background: green;
    transition: all 0.6s ease;
    transform-style: preserve-3d;
    margin: 20px;
    &:hover{
        transform: rotateY(180deg);
    }

    .belakang{
        transform : rotateY(180deg);
    }

    .depan, .belakang{
        position: absolute;
        width: 200px;
        height: 200px;
        backface-visibility: hidden;
    }

`