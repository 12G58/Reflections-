/*import { VerticalTimeline, VerticalTimelineElement} from 
'react-vertical-timeline-component'; 

import {motion} from 'framer-motion'; 

import 'react-vertical-timeline-component/style.min.css'; 
import {styles} from '../styles'; 
import { experiences } from '../constants'; 

import {textVariant } from '../utils/motion'; 

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement contentStyle = {{background: '#1d1836', color: '#fff'}} contentArrowStyle = {{borderRight: '7px solid #232631'}} date = {experience.date} iconStyle = {{background: experience.iconBg}} 
  icon = {<div> 
    <img src = {experience.icon} 
    alt = {experience.company_name} 
    className = "w-[60%] h-[60%] object-contain"/> 
  </div>}>

  </VerticalTimelineElement>
)
const Science = () => {
  return (
    <>
      <motion.div variants = {textVariant()} className = "bg-black">
        <p className = {`${styles.sectionSubText} bg-black`}>
          The formation of thought begins with classification... 
        </p>
        <h2 className = {styles.sectionHeadText}>
          Work Experience 
        </h2>
      </motion.div>

      <div className = "mt-20 flex flex-col">
          <verticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key = {index} experience = {experience} /> 
            ))}
          </verticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Science, "work"); */ 


import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";



function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/logic");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}> Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;