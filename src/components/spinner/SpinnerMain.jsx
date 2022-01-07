import React from 'react'
import { Spinner } from 'react-bootstrap'
import content from 'content/content.json'
export default function SpinnerMain() {
    let styles  = {
      spinnerCont : {
        width : '100%',
        height: "100%",
        position : 'relative'

      },
      spin: {
     
        position:'absolute',
        color: content.colors.green,
        top : "50%",
        left: "50%"
        
      }
    }
    return (
        <div style = {styles.spinnerCont} className="SpinnerBox">
          <Spinner style = {styles.spin} className="Spinner" animation="border" />
        </div>
    )
}
