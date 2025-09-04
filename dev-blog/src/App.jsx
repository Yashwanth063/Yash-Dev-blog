import React, { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Login from './Pages/Login';
import Register from './Pages/Register';
import Single from './Pages/Single';
import Write from './Pages/Write';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const Layout = ({ posts, setPosts }) => {
  return (
    <>
      <Navbar />
      <Outlet context={{ posts, setPosts }} />
      <Footer />
    </>
  );
};

const API = import.meta.env.VITE_API_BASE_URL;

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${API}`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  const router = createBrowserRouter([
    {  
      path: "/", 
      element: <Layout posts={posts} setPosts={setPosts} />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/post/:id", element: <Single /> },
        { path: "/write", element: <Write /> }
      ]
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);

  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
