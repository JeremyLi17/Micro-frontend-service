import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const AuthApp = ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory(); // copy of Browser history

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        // console.log(nextPathname);

        // update history object in container
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn: () => {
        // callback for signin
        onSignIn();
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
