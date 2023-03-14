import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Login from './views/login/login.js';
import CreateAccount from './views/createAccount/CreateAccount.js';
import Quiz from './views/Quiz/Quiz.js';
import Questions from "./views/Questions/Questions.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/createAccount",
        element: <CreateAccount />
      },
      {
        path: "/quiz",
        element: <Quiz />
      },
      {
        path: "/questions",
        element: <Questions />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
