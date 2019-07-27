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
    path: '/post_job',
    component: Post,
  },
  {
    path: '/press',
    component: Press,
  },
  {
    path: '/about',
    component: About,
  },
];

export default routes;
