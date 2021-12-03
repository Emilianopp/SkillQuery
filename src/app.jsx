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
   
        // const [countries, setCountry] = useState();
      
        // // Fetches countries from API
        // useEffect(() =>{ 
        // req(`country`, "GET").then((data) => {
        //     setCountry(data);
        //     console.log(data, "in request");
        //   });}, [])
        // req(`set_country/${"Canada"}`, "POST")
        // req("get_country").then((data) => {
        //     console.log(data,"DATAAAA")
        // })
      
    return (
        <div>
            {/* <button >{countries}</button> */}
            <Home/> 
        </div>
    )
}
