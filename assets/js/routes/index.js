import {
  Home, Post, Press, About,
} from '../pages';


const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
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
