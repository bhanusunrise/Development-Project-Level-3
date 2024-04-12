import { Home } from "./components/Home";

const AppRoutes = [
  {
        index: true,
        element: <Home />
  },
   {
       path: '/#intro',
       element: '#intro'
    },
    {
        path: '/#about-menu',
        element: '#about-menu'
    }
];

export default AppRoutes;
