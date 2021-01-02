import React from 'react';
import './pricecards.styles.scss';
import PriceCard from '../cards/pricecard.component';

const PriceCards = ({selectPlans}) => {
    function handleClick(e) {
      alert.log(e.currentTarget.id + ' was clicked');
    }

    return (
        <div className='pricecards'>
            {selectPlans.map(plan=> 
            <PriceCard key={plan.key} unit={plan.unit} buttontext={plan.buttontext} price={plan.price} id={plan.key} name={plan.name} description={plan.description} handleClick={handleClick} imageURL={plan.imageURL}/>)}
        </div>
        )   
        
};

export default PriceCards;

