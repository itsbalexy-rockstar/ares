import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AresScreen from '../components/ares/AresScreen';
import AuthRouter from './AuthRouter';
import {firebase} from '../firebase/firebase-config';
import { login } from '../actions/auth';
import { useState } from 'react';
import { PrivateRoute, PublicRoute } from './ProtectionRouter';

const AppRouter = () => {

const dispatch = useDispatch()
const [checking, setChecking] = useState(true);
const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  firebase.auth().onAuthStateChanged((user) => {
    if(user?.uid){
      dispatch(login(user.uid, user.displayName))
      setIsLoggedIn(true)
    } else{
      setIsLoggedIn(false)
    }
    setChecking(false)
  })
}, [dispatch, checking, isLoggedIn])

if(checking){
  return (
    <h1>Loanding...</h1>
  )
}


  return (
    <Router>
        <Routes>
            <Route path="/" element={<PrivateRoute isLoggedIn={isLoggedIn}><AresScreen /></PrivateRoute>} 
            />
            <Route path="/*" element={<PublicRoute isLoggedIn={isLoggedIn}><AuthRouter /></PublicRoute>} />
        </Routes>
    </Router>
  )
};

export default AppRouter;
