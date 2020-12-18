// header.component.jsx
import React from 'react';
import './main-header.styles.scss';
import logo from  '../../../assets/logo.png';
// fontawesome
import { faCog } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// utilities
import { Link } from 'react-router-dom';
import {auth} from '../../../firebase/firebase.utils';

// redux
import { connect } from 'react-redux'; // higher level component
import {toggleDebugConsole, addDebugText} from '../../../redux/global/global.action';
import {createStructuredSelector} from 'reselect';
import {selectDebugText} from '../../../redux/global/global.selector';


const Header = ({currentUser, toggleDebugConsole, addDebugText}) => {

const handleclick = () => {
    addDebugText('Toggle Console');
    toggleDebugConsole() ;
};

return (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <img src={logo} alt="Logo" />
        </Link>
        <div className='options'>
            <FontAwesomeIcon name='icon' className='icon' icon={faCog} onClick={handleclick}/>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {currentUser ? 
                <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
                            }
        </div>
    </div>
)}

const mapDispatchToProps = dispatch =>({
    // toggleDebugConsole:() => dispatch(toggleDebugConsole()),
    // addDebugText: global => dispatch(addDebugText(global))
  })

const mapStateToProps = createStructuredSelector ({
    // this is a standard redux convention for referencing a specific value.
    // we pass in state, which is the overall state from the root reducer, then drill into the value 
    // we want. In this case, it is the state (root) then user (which references the userReducer)
    // then the currentUser property which gives us the values for currentuser which at the onset is null
    // currentUser: selectCurrentUser,
    // debugText: selectDebugText,
})

// this uses the higher level component which will go to redux first then pass the value to the function
// the first parameter is the value we want to provide, and the second is the original function we are sending it to. 
export default connect(mapStateToProps,mapDispatchToProps)(Header);