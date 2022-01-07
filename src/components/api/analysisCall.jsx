import axios from "axios";

async function analysisCall(url, method,setLoaded,setData,params) {
    setLoaded(false)
    const response = await axios.get(`https://skillquery.herokuapp.com/${url}`, {
      params: params,
      method: method,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Content-Type': 'application/json',
      },
      credentials: "include",
    }).then(
        (req) => {
            setData(req.data)
            setLoaded(true)
    }
    ).catch(function(err){console.log(err,url,params,method,'ASDFASDFAS');});
   
  }

export default analysisCall
// 