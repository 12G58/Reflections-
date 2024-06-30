import React from 'react'
import { SectionWrapper } from '../hoc'; 
import {styles} from '../styles'; 
import {net} from '../utils/Indras_Net/src/js/scripts'; 


const Nlp = () => {
  return (
    <div className = "text-white font-mono"> <h1 className = {`${styles.sectionSubText}`}>All thought begins at classification...</h1>
    {net()}
    </div>
  )
}

export default SectionWrapper(Nlp, "nlp"); 