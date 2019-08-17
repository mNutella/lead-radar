import {
  Home, Jobs, Post, Press, About,
} from '../pages';


const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/jobs',
    component: Jobs,
  },
  {
    path: '/post',
    component: Post,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/press',
    component: Press,
  },
];

export default routes;
