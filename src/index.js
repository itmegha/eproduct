import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Error from './Error';
import Showproduct from './Showproduct';
// import About from './About';
import Contact from './Contact';
import ShowDetail from './ShowDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import ThemeProvider from './MyContext/ThemeProvider';

const About = React.lazy(()=>import('./About'));

const router = createBrowserRouter([ 

      {
        path:'/',
        element:<App />,
        errorElement:<Error />,
        children:[
          {
            index:true,
            element:<Home />
          },
          {
            path:'/home',
            element:<Home />,
          },
          {
            path:'/about',
            element:
            <React.Suspense>
            <About />
            </React.Suspense>
          },
        
          {
            path:'/contact',
            element:<Contact />,
          },
          {
            path:'/showproduct',
            element:<Showproduct />,
          },
          {
            path:'/product/:id',
            element:<ShowDetail />,
          },
         
        ]
      },
      {
        path:'*',
        element:<Home />
      }
     
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <ThemeProvider>
              <RouterProvider router={router} />
       </ThemeProvider>

);

