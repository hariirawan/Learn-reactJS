import React, { Component } from 'react';
import { CardBox, ContainerCard } from './Card.style';

class Card extends Component {
    constructor(){
        super();
        this.state = {
            galery:["Ikmayoni", "Hari Irawan", "Adham"]
        }
    }
    render() {
        return (
            <ContainerCard>
                {
                    this.state.galery.map((data, key) => {
                        return(
                            <CardBox key={key}>
                                <div className='front'>
                                    {data}
                                </div>
                                <div className='back'>
                                    Profile
                                </div>
                            </CardBox>
                        )
                    })
                }
            </ContainerCard>
        );
    }
}

export default Card;