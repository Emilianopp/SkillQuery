async function call(url, method) {
    const response = await fetch(`https://skillquery.herokuapp.com/${url}`, {
      method: method,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      credentials: "include",
    }).catch(function(err){console.log(err,url,method,'ASDFASDFAS');});
    const out = await response.json();

    return out;
  }

export default call
// 