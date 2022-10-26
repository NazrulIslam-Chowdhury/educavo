
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/home/Home';
import Courses from './components/courses/Courses';
import Details from './components/details/Details';
import Blog from './components/blog/Blog';
import Login from './components/login/Login';
import Register from './components/register/Register';

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
          loader: () => fetch('http://localhost:5000/courses'),
          element: <Courses></Courses>
        },
        // {
        //   path: '/courses/:id',
        //   loader: ({ params }) => {
        //     fetch(`http://localhost:5000/courses/${params.id}`)
        //   },
        //   element: <Details></Details>
        // },
        {
          path: '/details/:id',
          loader: () => {
            fetch(`http://localhost:5000/details/06bcd6ea-ab97-4046-a70b-3ad2ad5dcc4a`)
          },
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
          path: '*',
          element: <p className='text-6xl font-bold'>Page is not found</p>
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
