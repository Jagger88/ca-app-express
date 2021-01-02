import React from 'react';
import './landing-page.styles.scss'
import hero from  '../../assets/workspace.png';
import SignInAndSignUpPage from '../sign-in-and-sign-up/sign-in-and-sign-up.component';


const LandingPage = () => (
    <>
    <div className='landingpage'>
        <div className='hero'>
            <img src={hero} alt="heroimage" />
        </div>
        <h1>All-in-one workspace</h1>
        <h2>One tool for your whole team. Write, plan, and get organized.</h2>
    </div>
    <SignInAndSignUpPage />
    </>
)

export default LandingPage;
