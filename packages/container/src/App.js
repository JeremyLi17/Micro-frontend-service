import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Progress from './conponents/Progress';
import Header from './conponents/Header';

const MarketingLazy = lazy(() => import('./conponents/MarketingApp'));
const AuthLazy = lazy(() => import('./conponents/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              {/* <Route path="/auth" component={AuthLazy} /> */}
              {/* <Route path="/" component={MarketingLazy} /> */}
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/">
                <MarketingLazy />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
