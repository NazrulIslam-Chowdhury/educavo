
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/home/Home';
import Courses from './components/courses/Courses';
import Details from './components/details/Details';
import Blog from './components/blog/Blog';

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
          loader: ({ params }) => {
            fetch(`http://localhost:5000/details/${params.id}`)
          },
          element: <Details></Details>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
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
