import styled from 'styled-components';
import img from '../assets/DSC00988.JPG';

export const ContainerCard = styled.div `
    margin:10px;
    perspective: 700;
    display:flex;
`

export const CardBox = styled.div `
    width: 200px ;
    height: 200px;
    transition:all 0.6s ease;
    transform-style: preserve-3d;
    cursor: pointer;
    margin: 5px;

    &:hover{
        transform: rotateY(180deg);
    }
    .back{
        transform: rotateY(180deg);
        background: blue;
    }
    .front{
        background: linear-gradient(to top, rgba(103,58,183,.6)0%, rgba(156,39,176,.6)50%), url(${img});
        background-size:cover;
        color: white;
    }

    .front, .back{
        position: absolute;
        width: 200px;
        height: 200px;
        border-radius:10px;
        backface-visibility:hidden;
        display: flex;
        align-items:center;
        justify-content:center;
        box-shadow: 0px 2px 5px gray;
    }
`
