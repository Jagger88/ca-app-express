import React from 'react';
import './dropdown.styles.scss';

const Dropdown = ({handleChange, items, selectedProject}) => {  
    return (
        <select className='dropdown' defaultvaluename={selectedProject} onChange={handleChange}>
            {items.map(item=> <option className='option' key={item.key} value={item.key}>{item.name} </option>)}
        </select>
)}

export default Dropdown;