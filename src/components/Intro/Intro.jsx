import React from "react";
import content from "content/content.json";
import WaveBG from "./WaveBG";
import { Col,Button } from "react-bootstrap";


export default function Intro({setSubmit}) {
  const styles = {

    title: {
      fontSize: 50,
      color: content.colors.black,
      
      width: "100%",
      position: "relative",
      paddingTop: "10vh",
      fontWeight: "bold"
    },
    textContainer:{
      paddingLeft: '5vw',
      width: "85vw"
    },
    body:{
      fontSize:30,
      color: content.colors.black
    },
    start: {
      marginLeft: '0vw',
      backgroundColor: content.colors.green,
      color: 'white',
      padding: '1vw',
      borderRadius : '5%', 
      padding: "2vw",
      borderColor: content.colors.green,
      fontSize: 25  
    },
    buttonCont:{
      marginTop:'2vh',
      textAlign: 'left',
      
      
      
    }
  };
  return (
    <>
      <div style = {styles.textContainer}> 
      <h1 style={styles.title}>{content.Intro.title}</h1>
      <p style={styles.body}>
        
        {content.Intro.body}
      


      

    
      </p>
      <div style = {styles.buttonCont}> <Button onClick = {() => setSubmit(true)} style ={styles.start}> Get Started </Button>   </div>
      
    
      </div>
      

      <WaveBG />
    </>
  );
}
