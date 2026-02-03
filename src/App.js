import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
// import Footer from './components/Footer';



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />  
      {/* <Footer /> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// When Router is not used, then use the below line to render the AppLayout component
// root.render(<AppLayout />);
// When Router is used, then use the below line to render the RouterProvider component
root.render(<RouterProvider router={appRouter} />);