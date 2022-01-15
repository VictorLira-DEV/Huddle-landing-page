import React from 'react';
import { StyledCard } from './styles/Card.styled';

interface Props {
    item: {
        id: number;
        title: string;
        body: string;
        image: any;
    };
}

export default function Card(props: Props) {
    const { item } = props;

    return (
        <StyledCard layoult={item.id % 2 === 0 ? 'row-reverse' : null}>
            <div>
                <h2> {item.title} </h2>
                <p> {item.body} </p>
            </div>
            <div>
                <img src={`./images/${item.image}`} alt="" />
            </div>
        </StyledCard>
    );
}
