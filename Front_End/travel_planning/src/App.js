import "./App.css";
import React from "react";
import routes from "./Routes/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {homeRoute,  authRoute} from "./Routes/index";
import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout/>}>
              {
                homeRoute.map((item,index)=>{return <Route key={index} path={item.path} element={<item.page/>}/>})
              }
          </Route>
          <Route path="/account">
              {
                authRoute.map((item,index)=>{return <Route key={index} path={item.path} element={<item.page/>}/>})
              }
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
