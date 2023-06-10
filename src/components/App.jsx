import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { RestrictedRoute, PrivateRoute } from './Routes.jsx';
import { refreshUser } from "store/auth/operations.js";
import useAuth from "hooks";


const SharedLayout = lazy(() => import("./SharedLayout/SharedLayout"));
const Contacts = lazy(() => import("pages/Contacts"));
const Login = lazy(() => import("pages/Login"));
const Home = lazy(() => import("pages/Home"));
const Register = lazy(() => import("pages/Register"));


function App() { 

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return (
    isRefreshing ? ('Fetching user data') : (
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="/register" element={<RestrictedRoute component={<Register />} redirectTo="/contacts" />} />
          <Route path="/login" element={<RestrictedRoute component={<Login />} redirectTo="/contacts" />} />
          <Route path="/contacts" element={<PrivateRoute component={<Contacts />} redirectTo="/login" />} />
        </Route>
      </Routes>
      )
    );
  }


export default App;


