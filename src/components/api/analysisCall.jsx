import axios from "axios";

async function analysisCall(url, method,setLoaded,setData,params) {
   
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
            setLoaded(true)
            console.log(req.data,'DATA')
            setData(req.data)
    }
    ).catch(function(err){console.log(err,url,method,'ASDFASDFAS');});
   
  }

export default analysisCall
// 