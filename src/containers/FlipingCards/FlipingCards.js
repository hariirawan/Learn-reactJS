import React, { Component } from 'react';


import { CardContainer, Card } from './FlipingCards.style';


class FlipingCards extends Component {
    render() {
        return (
            <CardContainer>
                <Card>
                    <div className='front'>
                        <h1>Wisuda VI</h1>
                    </div>
                    <div className='back'>
                        <h1> Hallo </h1>
                    </div>
                </Card>
            </CardContainer>
        );
    }
}

export default FlipingCards;