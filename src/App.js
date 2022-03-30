import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import {Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/header/header.component';
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'
import Checkout from './pages/checkout/checkout.component';

function App(props) {

  let unsubscribeFromAuth = null

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        props.setCurrentUser(userAuth)
      }
    })

    return () => {
      unsubscribeFromAuth()
    }
  },[])

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/signin' exact render={() => props.currentUser ? <Redirect to='/'/> : <SignInAndSignOut/>}/>
        <Route path='/checkout' exact component={Checkout}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
}) 

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
