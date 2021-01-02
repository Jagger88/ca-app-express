import React from 'react';
import './upgradecard.styles.scss';

const UpgradeCard = ({name, text}) => ( 
    <div className='card'>
        <svg className="icon PortfolioNavIcon" viewBox="0 0 40 40"><path d="M10,32.5c0,0.8-0.7,1.5-1.5,1.5l0,0C7.7,34,7,33.3,7,32.5v-27C7,4.7,7.7,4,8.5,4l0,0C9.3,4,10,4.7,10,5.5V32.5z M18,17.5  c0-0.8-0.7-1.5-1.5-1.5l0,0c-0.8,0-1.5,0.7-1.5,1.5v15c0,0.8,0.7,1.5,1.5,1.5l0,0c0.8,0,1.5-0.7,1.5-1.5V17.5z M26,9.5  C26,8.7,25.3,8,24.5,8l0,0C23.7,8,23,8.7,23,9.5v23c0,0.8,0.7,1.5,1.5,1.5l0,0c0.8,0,1.5-0.7,1.5-1.5V9.5z M34,24.5  c0-0.8-0.7-1.5-1.5-1.5l0,0c-0.8,0-1.5,0.7-1.5,1.5v8c0,0.8,0.7,1.5,1.5,1.5l0,0c0.8,0,1.5-0.7,1.5-1.5V24.5z"></path></svg>
  
        <div className='title'>{name} </div>
        <div className='text'  dangerouslySetInnerHTML={{__html: text}}></div>
    </div>
)

export default UpgradeCard;