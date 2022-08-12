import { createApp } from 'vue';
import DashBoard from './components/DashBoard.vue';

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(DashBoard);
  app.mount(el);
};

// If in develpmengt(iso) call mount immeditately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// running in container -> export the mount function
export { mount };
