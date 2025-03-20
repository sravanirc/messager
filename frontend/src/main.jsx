import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import AddNewMessage from './pages/AddNewMessage.jsx'
import DeleteMessage from './pages/DeleteMessage.jsx'
import EditMessage from './pages/EditMessage.jsx'
import AllMessages from './pages/AllMessages.jsx'


import { createBrowserRouter , RouterProvider } from 'react-router-dom' ;

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
    children: [{
      path:"/addNewMessage",
      element: <AddNewMessage />
    }, {
      path:"/deleteMessage",
      element: <DeleteMessage />
    }, {
      path:"/editMessage",
      element: <EditMessage />
    },{
      path:"/allMessages",
      element: <AllMessages />
    }]
  }, 
  
  {
    path: "*",
    element: <h2>Page Not Found</h2>

  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
)
