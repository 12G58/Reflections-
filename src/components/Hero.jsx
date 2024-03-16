import React from 'react'; 
import { motion } from 'framer-motion'; 
import { styles } from '../styles'; 
import { ComputersCanvas } from './canvas'; 


const Hero = () => {
  return ( 
    <section className = "relative w-full h-screen mx-auto">
      <div className = {`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className= "flex flex-col justify-center items-right mt-5">
        <p>
          <br/><br/><br/><br/><br/><br/><br/> 
        </p>
      <p className = "justify-center text-white text-[25px] bold font-serif"> 
            <h1 className = "text-[35px] bold">Certain themes have governed experience since millennia.</h1> <br/>
          </p> 
        </div>
      </div>
    </section> 
  )
}

export default Hero
