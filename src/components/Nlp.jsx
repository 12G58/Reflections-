import React from 'react'
import {styles} from '../styles'; 
import {net} from '../utils/scripts'; 


const Nlp = () => {
  return (
    <div className = "text-white font-mono"> <h1 className = {`${styles.sectionSubText}`}>Relfections</h1>
    {net()}
    </div>
  )
}

export default Nlp; 