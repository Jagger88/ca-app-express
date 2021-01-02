import React from 'react';
import './itemcard.styles.scss';

const ItemCard = ({id, name, description, imageURL, handleClick}) => (
    <div className='itemcard' id={id} onClick={handleClick}>
        <div className='icon-container'>
            <div className= 'image-container'>
                {imageURL ? <img className='img' src={imageURL} alt="image" /> 
                : <svg className="NavIcon HomeNavIcon" viewBox="0 0 40 40"><path d="M37.9,15L22.2,3.8c-1.3-1-3.1-1-4.4-0.1L2.2,14.4c-0.7,0.5-0.9,1.4-0.4,2.1c0.5,0.7,1.4,0.9,2.1,0.4L6,15.4v12.3c0,4.6,3.7,8.3,8.3,8.3h11.4c4.6,0,8.3-3.7,8.3-8.3V15.9l2.1,1.5c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.2,1.2-0.6C38.7,16.4,38.5,15.5,37.9,15z M31,27.7c0,2.9-2.4,5.3-5.3,5.3H14.3C11.4,33,9,30.6,9,27.7V13.3l10.6-7.2c0.2-0.2,0.5-0.2,0.8,0L31,13.7V27.7z"></path></svg>
                } 
            </div>
            <div className='name'>{name}</div>
            </div>
        <div className='description'>{description}</div>
    </div>
)

export default ItemCard;