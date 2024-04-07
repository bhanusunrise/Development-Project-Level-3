import { Home } from "./components/Home";
import { About } from "./components/About";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Login } from "./components/Login";

const AppRoutes = [
  {
        index: true,
        element: <Home />
  },
   {
       path: '/about',
       element: <About />
   },
   {
       path: '/pricing',
       element: <Pricing />
   },
   {
       path: '/contact',
       element: <Contact />
    },
    {
        path: '/login',
        element: <Login />
    }
];

export default AppRoutes;
