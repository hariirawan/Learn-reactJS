import React, { Component } from 'react';
import { Card, CardContainer } from './Fliping.style';

class FlipingCard extends Component {
    render() {
        return (
            <CardContainer>
            <Card>
                <div className='depan'>
                    Oyon
                </div>
                <div className='belakang'>
                    Hari
                </div>
            </Card>
            </CardContainer>
        );
    }
}

export default FlipingCard;