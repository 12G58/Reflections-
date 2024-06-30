import React from 'react'; 
import { motion } from 'framer-motion'; 
import { styles } from '../styles'; 
import {Tilt} from 'react-tilt';
import { fadeIn, textVariant} from '../utils/motion'; 

import { SectionWrapper } from '../hoc'; 

/*const ServiceCard = ({index, title, icon }) => {
  return (
    <Tilt className = "xs:w-[250px] w-full">
      <motion.div variants = {fadeIn("right", "spring", 0.5 * index, 0.75)} className = "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options = {{
          max: 45, 
          scale: 1, 
          speed: 450
        }} className = "bg-tertiary rounded-[10px] py-10 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src = {icon} alt= {title} className = "w-16 h-16 object-contain"/>
          <h3 className = "text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}*/ 



import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  
  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              <div> 
                <h1>{post.author.id}</h1>
              </div>
              <div>
                <h1>{auth.currentUser.uid}</h1>
              </div> 
              <div>
                <h1>{isAuth}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default SectionWrapper(Home, "H");

 