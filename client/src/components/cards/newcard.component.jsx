import React from 'react';
import './newcard.styles.scss';

const NewCard = ({text, newClick}) => (
    <div className='newcard' onClick={newClick}>
        <div className='icon-container'>
            <svg className="PlusIcon" focusable="false" viewBox="0 0 32 32"><path d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z"></path></svg>
        </div>
        <div className='text'>{text}</div>
    </div>
)

export default NewCard;