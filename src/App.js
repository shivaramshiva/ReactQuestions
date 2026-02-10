import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestroMenu from './components/RestroMenu';

// import Footer from './components/Footer';

// Chunking
// Lazy loading 
// Code Splitting
// Dynamic Bundling
// On Demand Loading 
// Dynamic Import
// All the above terms are same and are used interchangeably in the industry
//  to refer to the technique of splitting code into smaller chunks that can be loaded on demand,
//  improving performance and reducing initial load time.

const About = lazy(() => import('./components/About'));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <Suspense fallback={<div>Loading...</div>}><About /></Suspense>,
          // Due to Suspense, we can show a fallback UI (like a loading spinner or message) 
          // while the About component is being loaded asynchronously. 
          // This enhances the user experience by providing immediate feedback 
          // during the loading process. Also it will load of code of About only during its trigger
          // Can be verified in Network Tab by reloading the page and then clicking on About link,
          // we can see that the code for About component is loaded only during its trigger and 
          // not during the initial load of the application. This is the main advantage of using Suspense for lazy loading components.
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurant/:resId",
          element: <RestroMenu />,
        },
      ],
      errorElement: <Error />,
    },
  ],
  {
    future: {
      v7_startTransition: true
    }
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
// When Router is not used, then use the below line to render the AppLayout component
// root.render(<AppLayout />);
// When Router is used, then use the below line to render the RouterProvider component
root.render(<RouterProvider router={appRouter} />);