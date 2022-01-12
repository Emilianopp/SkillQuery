import React from 'react'

function completedCalls(components) {

    let hasLoaded = (val) => val.loaded == true; 
    let check =  components.every(hasLoaded);
    
    return (
         check
    )
}

export default completedCalls
