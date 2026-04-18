import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layout/root.jsx';
import Home from './pages/home/Home.jsx';
import FriendDetails from './pages/FriendDetails/FriendDetails.jsx';
import Timeline from './pages/Timeline/Timeline.jsx';
import Stats from './pages/Stats/Stats.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {path:"/",
        index:true,
        Component: Home,
        loader:()=>fetch("/friends.json")
      },
      {
        path:"/friendDetails",
        Component:FriendDetails
      },
      {
        path:"/timeline",
        Component:Timeline
      },
      {
        path:"/stats",
        Component:Stats
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
