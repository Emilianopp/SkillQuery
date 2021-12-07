import {React,useState,useEffect} from 'react'
import Home from './components/Home/Home'



async function req(url, method) {
    const response = await fetch(`https://skillquery.herokuapp.com/${url}`, {
      method: method,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": 'true',
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Access-Control-Allow-Headers': 'Content-Type,Authorization'
      },
      credentials: 'include'
    });
    const out = await response.json();
  
    return out;
  }
  
export default function App() {
   

      
    return (
        <div>
         
            <Home/> 
        </div>
    )
}
