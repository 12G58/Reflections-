import React, { useEffect } from 'react';
import {styles} from '../styles'; 
import BlogBalls from '../utils/BlogBalls'; 



const titles = [
  'Blog Post 1',
  'Blog Post 2',
  'Blog Post 3',
  'Blog Post 4',
  // Add more titles as needed
];

// const Nlp = () => {
//   return (
//     <div className = "text-white font-mono"> <h1 className = {`${styles.sectionSubText}`}>Relfections</h1>
//     {net()}
//     </div>
//   )
// }

// export default Nlp; 

// const Nlp = () => {
//   useEffect(() => {
//     // This will mount the BlogBalls component
//     BlogBalls({ titles });
//   }, []);
// };

const Nlp = () => {
  return (
    <div className="text-white font-mono">
      <h1 className={styles.sectionSubText}>Reflections</h1>
      <BlogBalls titles={titles} />
    </div>
  );
};

export default Nlp;