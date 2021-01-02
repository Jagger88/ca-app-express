import React from 'react';
import './card.styles.scss';

const Card = ({name, text}) => (
    <div className='card'>
        <div className='title'>{name} </div>
        <div className='text'  dangerouslySetInnerHTML={{__html: text}}></div>
    </div>
)

export default Card;