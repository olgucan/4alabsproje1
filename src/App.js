
import './App.css';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import React, { useState } from 'react'
import Deneme from './Deneme';
import User from './pages/User';
import Shared from './pages/Shared';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LineChart2 from './components/Linechart2';
import Home from './pages/Home';
import styled from "styled-components"
import Products from './pages/Products';
import Blog from './pages/Blog';
function App() {
  
  
  return (
    
          
          <>
          <BrowserRouter>
         
              <Routes>
             
             <Route  path="/" element={<Shared />} > 
             <Route  index element={<Home />} /> 
            
             <Route path='reports' element={<User/>}></Route>
             <Route path="deneme" element={<Deneme/>}></Route>
             <Route path="dashboard" element={<Dashboard/>} ></Route>
             <Route path="blog" element={<Blog/>} ></Route>
             <Route path="products" element={<Products/>}></Route>
             </Route>
             <Route path="login" element={<Login/>}></Route>
                </Routes>
                 
           
          
        
         
          </BrowserRouter>
         
          </> 
       
     
   
  );
}

export default App;
const AppContainer=styled.div `
      
  display:grid;
  grid-template-columns:300px auto;


`
const RightSideMain =styled.div `
  position:relative;
`

