import Home from '~/pages/Home';
import Admin from '~/pages/Admin';
import config from '~/configs';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import AuthLayout from '~/layouts/AuthLayout';

const publicRouter = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.login,
    component: Login,
    layout: AuthLayout,
  },
  {
    path: config.routes.register,
    component: Register,
    layout: AuthLayout,
  },
];

const privateRouter = [
  {
    path: config.routes.admin,
    component: Admin,
  },
];

export { publicRouter, privateRouter };
