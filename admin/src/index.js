import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import './index.css';
import App from './components/App';
import { PrivateRoute } from './components/Routers/PrivateRoute';
import { Login } from './components/login/index';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
          {/* <PublicRoute isAuthenticated={true} component={Login} path="/login" exact/> */}
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={
            <PrivateRoute isAuthenticated={true} component={<App/>} />
          }/>
          {/* <Route path='*' element={<Navigate to="/" />}/> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

