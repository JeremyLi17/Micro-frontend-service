import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

// for generate random classname
const generateClassName = createGenerateClassName({
  // whenever classname with prefix 'ma'
  productionPrefix: 'au',
});

const App = ({ history, onSignIn }) => {
  return (
    <div>
      {/* StylesProvide is a React compontent is used to customize 
      all CSS & JS generation stuff */}
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
