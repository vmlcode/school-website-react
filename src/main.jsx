import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Root } from './routes/root';
import Home from './routes/home';
import { Calendar } from './routes/calendar';
import { Exams } from './routes/exam';
import { HomeWorks } from './routes/homeworks';
import logo from './assets/dog.gif'
import { Error } from './routes/error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/calendar",
        element: <Calendar/>,
      },
      {
        path: "/exams",
        element: <Exams/>,
      },
      {
        path: "/homeworks",
        element: <HomeWorks/>,
      },
      {
        path: "/homework/:id",
        element: <><p>dinamic route: this is not ready</p> <img src={logo} alt="loading my favorite meme" /> </>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
