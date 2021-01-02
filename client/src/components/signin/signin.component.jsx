import React from 'react';
import FormInput from '../form/forminput/forminput.component';
import SquareButton from '../buttons/squarebutton/squarebutton.component';
import {auth} from '../../firebase/firebase.utils';
import GoogleLogin from '../buttons/googlelogin/googlelogin.component';

import './signin.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {email, password}=this.state;
    if (!email|!password) return;
    try{
      await auth.signInWithEmailAndPassword(email, password);
      // alert('Successfully Signed in');
      this.setState({ email: '', password: '' });
    }
    catch(error) {
      alert(error.message);
    }    
    
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in' >
        <GoogleLogin />
        <div className="form-option">
          <span>or</span>
        </div>
        {/* <span>Sign in with your email and password</span> */}
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <SquareButton type='submit'> Sign in with Email </SquareButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;