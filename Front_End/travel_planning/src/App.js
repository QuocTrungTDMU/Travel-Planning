import './App.css';
import React from 'react'
import routes from './Routes/index'
import {  BrowserRouter as Router, Routes, Route}  from "react-router-dom";

const App = () => {
  return (
    <div>
        <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                   <Page />
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App