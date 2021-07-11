import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Profile from '../routes/Profile';
import Navigation from 'components/Navigation';

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route expact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route expact path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
            </Route>
            <Redirect from="*" to="/" />
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
            <Redirect from="*" to="/" />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
