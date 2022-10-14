import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import DaisyForm from './components/DaisyForm/DaisyForm';
import Login from './components/Login/Login';
import Main from './layouts/Main';

const router = createBrowserRouter([
  {path: '/',
   element: <Main></Main>,
   children:[
    {path:'/',
     element: <DaisyForm></DaisyForm>  
    },
    {path:'/register',
     element: <DaisyForm></DaisyForm>  
    },
    {path:'/login',
     element: <Login></Login>  
    },
   ]
}
])




function App() {
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
