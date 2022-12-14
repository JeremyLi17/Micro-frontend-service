import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

// for generate random classname
const generateClassName = createGenerateClassName({
  // whenever classname with prefix 'ma'
  productionPrefix: 'ma',
});

const App = ({ history }) => {
  return (
    <div>
      {/* StylesProvide is a React compontent is used to customize 
      all CSS & JS generation stuff */}
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
