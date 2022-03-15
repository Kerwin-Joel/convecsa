import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({component, isAuthenticated}) => {
  console.log("private route")
  return isAuthenticated ? component : <Navigate to="/login" />;
}
