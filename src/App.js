
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/home/Home';
import Courses from './components/courses/Courses';
import Details from './components/details/Details';
import Blog from './components/blog/Blog';
import Login from './components/login/Login';
import Register from './components/register/Register';
import PrivateRoute from './layouts/privateroute/PrivateRoute';
import FAQ from './components/faq/FAQ';
import CheackOutPage from './components/cheackoutpage/CheackOutPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/courses',
          loader: () => fetch('https://educavo-server.vercel.app/details'),
          element: <Courses></Courses>
        },

        {
          path: "/course/:id",
          loader: ({ params }) => fetch(`https://educavo-server.vercel.app/course/${params.id}`),
          element: <Details></Details>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/faq',
          element: <PrivateRoute><FAQ></FAQ></PrivateRoute>
        },
        {
          path: '/checkout/:id',
          element: <PrivateRoute><CheackOutPage></CheackOutPage></PrivateRoute>,
          loader: ({ params }) => fetch(`https://educavo-server.vercel.app/course/${params.id}`)
        },
        {
          path: '*',
          element: <p className='text-6xl font-bold text-white'>Page is not found</p>
        }
      ]

    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
