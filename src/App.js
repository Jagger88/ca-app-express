import React from 'react';
import './App.scss';
// import router-dom
import { Switch, Route, Redirect  } from 'react-router-dom';

// import pages and components
import Header from './components/headers/main_header/main-header.component';
// import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import DebugPanel from './components/debug-panel/debug-panel.component';
import ImportJSONPage from './pages/importJSON/importjson.page';
import EditorPage from './pages/editor-page/editor-page.component';
import Footer from './components/footers/main-footer/main-footer.component';
import LandingPage from './pages/landing-page/landing-page.component';

// import firebase components
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

// import redux, selectors and actions
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {setCurrentUser} from './redux/user/user.action';
import {selectToggleDebug} from './redux/global/global.selector';
import {selectCurrentUser} from './redux/user/user.selector';

class App extends React.Component {
  // ------------------------------------------------------------------------------------
  // Firebase Authentication variable
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    // Deconstruct the this.props.setCurrentUser to just setCurrentUser
    const {setCurrentUser} = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if signed in... 
      if (userAuth) {
        // get document ref
        const userRef = await createUserProfileDocument(userAuth);
        // get document snapshot which is the data 
        userRef.onSnapshot(snapShot => {
          // change this.setset with REDUX function... 
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            })
          });

          //this.addToLog(' Signed in: ' + this.state.currentUser.displayName);
      } 
        setCurrentUser(userAuth);
  
    });
  }

  componentWillUnmount() {
    // before React unmounts, call the unsubscript from Auth.  
    this.unsubscribeFromAuth();
  }

  render() {
    // need to make the toggle available to the return 
    const {toggleDebug} = this.props;
    return (
    <div>
      <Header />
      {toggleDebug ? <DebugPanel /> : null}
      <Switch>
        <Route exact path='/'
          render={() => 
            this.props.currentUser ? (
              <Redirect to='/ic' />
            ) : (
              <LandingPage />
            )} />
        <Route path='/ic' render={() => 
            !this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
              <EditorPage />
            )} />
        <Route exact path='/import' component={ImportJSONPage} />
      </Switch>
      <Footer />
    </div>
  )}
};

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = createStructuredSelector ({
  toggleDebug: selectToggleDebug,
  currentUser: selectCurrentUser
})

export default connect (mapStateToProps, mapDispatchToProps)(App);


