import React from 'react';
import './forminput.styles.scss';

// reusable input filed that has a shrinking label
// handleChange is passed in to handle the event onchange.... 
// calling component will need to use onChnage then capture the value to update state

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;