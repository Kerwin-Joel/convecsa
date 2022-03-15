import React from 'react'
import { Navigate, Route } from 'react-router-dom'

export const PublicRoute = ({component:Component, isAuthenticated,...rest}) => {
  console.log("public route")
  return (
    <Route
      {...rest}
      component={(props) => (
        isAuthenticated ? 
        <Route  path='*' element={<Navigate to="/" />}/>
        : 
        <Component {...props} />
        
      )}>
    </Route>
  )
}
