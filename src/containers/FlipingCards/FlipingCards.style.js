import styled from 'styled-components';

import Gambar from '../../assets/DSC00988.JPG';

export const CardContainer = styled.div `
     perspective: 700;
`

export const Card = styled.div `
    position: relative;
    margin: 20px;
    line-height: 200px;
    height: 200px;
    width: 200px;
    transition: all 0.6s ease;
    transform-style: preserve-3d;
    
    &:hover{
        transform: rotateY(180deg);
    }
    
    h1{
        margin:0;
        color:white;
    }
    .front{
        background: radial-gradient(rgba(33,33,33 ,0.2)0%, rgba(69,39,160 , 0.6)50%),
        url(${ Gambar })center center no-repeat;
        background-size:cover;
    }

    .back{
        transform: rotateY(180deg);
        background: #5667fc;
    }
    .front, .back{
        position:absolute;
        top:0;
        left:0;
        width:200px;
        height:200px;
        backface-visibility:hidden;
        border-radius: 10px;
        overflow:hidden;
    }
    img{
        width:200px;
        height:200px;
    }
`