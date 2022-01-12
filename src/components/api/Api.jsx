import { set } from 'js-cookie'
import React, { useEffect } from 'react'
import call from "./call"
function Api({selectMethod, selectEndpoint,stateSetter}) {
    
    const handleSelect = () =>{
            call((selectEndpoint,selectMethod)).then((data) => {
                stateSetter(data);
            })
    
 
   
}

return handleSelect;
}

export default Api;
