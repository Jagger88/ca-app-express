// header.component.jsx
import React from 'react';
import './main-header.styles.scss';
import Logo from  '../../branding/logo.component';

// fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// utilities
import { Link } from 'react-router-dom';
import {auth} from '../../../firebase/firebase.utils';

// redux
import { connect } from 'react-redux'; 
import {toggleDebugConsole, addDebugText} from '../../../redux/global/global.action';
import {createStructuredSelector} from 'reselect';
import {selectDebugText} from '../../../redux/global/global.selector';
import {selectCurrentUser} from '../../../redux/user/user.selector';



const Header = ({currentUser, toggleDebugConsole, addDebugText}) => {

const handleclick = (e) => {
    // console.log(e.target.id);
    addDebugText('Settings Icon Clicked');
    toggleDebugConsole() ; // currently this opens the debug panel... 
};

return (
    
    <div className='header'>
         {currentUser ? 
         <>
         <Link className='logo-container' to='/'>
            <Logo />
        </Link>
        <div className='options'>
             <div className='option'>Welcome {currentUser.displayName}</div>
             <FontAwesomeIcon id='myId' name='myname' className='icon rotate' icon={faCog} onClick={handleclick}/>
            {/* <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link> */}
            {/* <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div> */}
            <FontAwesomeIcon name='icon' className='icon grow' icon={faSignOutAlt} onClick={()=> auth.signOut()}/>
        </div> </> : null}
    </div>
)}

const mapDispatchToProps = dispatch =>({
    toggleDebugConsole:() => dispatch(toggleDebugConsole()),
    addDebugText: global => dispatch(addDebugText(global))
  })

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    debugText: selectDebugText,
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);