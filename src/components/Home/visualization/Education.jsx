import React from 'react'

export default function Education(props) {
    if(props.data != 0){
    return (
        <div>
            {props.data}
        </div>
    )
    }
    else{

    return(<></>)
    }
}
