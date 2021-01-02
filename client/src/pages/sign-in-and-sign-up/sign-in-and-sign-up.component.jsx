import React, { useState } from 'react';
import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';


const SignInAndSignUpPage = () => {
  const [flag, setFlag] = useState(true);

  return (
  <>
  <div className='authpage'>
    {flag ? 
    <>
      <SignIn />
      <div className='toggle'>Don't have an account? <span onClick={()=>setFlag(false)}>Sign up</span></div> 
    </>
    : 
    <>
    <SignUp />
    <div className='toggle'>Have an account? <span onClick={()=>setFlag(true)}>Sign In</span></div> 
    </>
    }
  </div>
  </>
)};

export default SignInAndSignUpPage;