// import * as THREE from 'three'; 
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

// import xpos from './img/dawnmountain-xpos.png'; 
// import xneg from './img/dawnmountain-xneg.png'; 
// import ypos from './img/dawnmountain-ypos.png'; 
// import yneg from './img/dawnmountain-yneg.png'; 
// import zpos from './img/dawnmountain-zpos.png'; 
// import zneg from './img/dawnmountain-zneg.png'; 

// const renderer = new THREE.WebGLRenderer(); 

// export const net = ({titles}) => {
//     renderer.setSize(window.innerWidth, window.innerHeight); 
//     document.body.appendChild(renderer.domElement); 

//     const scene = new THREE.Scene(); 

//     const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth/window.innerHeight,
//     0.1, 
//     1000
//     ); 

//     const orbit = new OrbitControls(camera, renderer.domElement);
//     // const axesHelper = new THREE.AxesHelper(5); 
//     // scene.add(axesHelper); 

//     camera.position.set(0,2,5); 
//     orbit.update(); 


//     const ambientLight = new THREE.AmbientLight(0x333333); 
//     scene.add(ambientLight); 

//     const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8); 
//     scene.add(directionalLight); 
//     directionalLight.position.set(-30, 50, 0); 

//     // const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5); 
//     // scene.add(dLightHelper); 

//     const cubeTextureLoader = new THREE.CubeTextureLoader(); 
//     scene.background = cubeTextureLoader.load([
//     xpos,
//     xneg,
//     ypos,
//     yneg,
//     zpos,
//     zneg
//     ]); 

//     const mirrorSphereCameras: any[] = [];
//     for (let k = 0; k < 3; k++ ){
//     for ( let j = 0; j < 3; j++){
//         for (let i = 0; i < 3; i++) {
//             const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(128, {
//                 generateMipmaps: true,
//                 minFilter: THREE.LinearMipmapLinearFilter,
//             })
            
//             const sphereGeom =  new THREE.SphereGeometry( 1, 32, 16 ); // radius, segmentsWidth, segmentsHeight
//             const mirrorSphereCamera = new THREE.CubeCamera(0.5, 100, cubeRenderTarget);
//                 // mirrorCubeCamera.renderTarget.minFilter = THREE.LinearMipMapLinearFilter;
//             scene.add( mirrorSphereCamera );
//             mirrorSphereCameras.push(mirrorSphereCamera); 
        
//             const mirrorSphereMaterial = new THREE.MeshBasicMaterial( { envMap: cubeRenderTarget.texture } );
//             const mirrorSphere = new THREE.Mesh( sphereGeom, mirrorSphereMaterial );
//             mirrorSphere.position.set(7*i,7*j,7*k);
//             mirrorSphereCamera.position.copy(mirrorSphere.position); 
        
//             scene.add(mirrorSphere);
            
//         }
//     }
//     }


//     // for ( let i = 0; i < 5; i++ ){
//     //     const boxGeometry = new THREE.BoxGeometry(); 
//     //     const boxMaterial = new THREE.MeshStandardMaterial({color: 0x00FF00});
//     //     const box = new THREE.Mesh(boxGeometry, boxMaterial); 
//     //     box.position.set(0,0,5*i); 
//     //     scene.add(box); 
//     // }

//     function updateReflections (){
//     mirrorSphereCameras.forEach((camera) => {
//         camera.update(renderer, scene); 
//     }); 
//     } 


//     function animate() {
//     requestAnimationFrame(animate);
//     // Update the orbit controls
//     orbit.update();
//     updateReflections() 
//     renderer.render(scene, camera);
//     }

//     animate();


// }
// -------------------




// import React, { useEffect } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import xpos from './img/dawnmountain-xpos.png';
// import xneg from './img/dawnmountain-xneg.png';
// import ypos from './img/dawnmountain-ypos.png';
// import yneg from './img/dawnmountain-yneg.png';
// import zpos from './img/dawnmountain-zpos.png';
// import zneg from './img/dawnmountain-zneg.png';

// const renderer = new THREE.WebGLRenderer();

// const BlogBalls = ({ titles }) => {
//     useEffect(() => {
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         document.body.appendChild(renderer.domElement);

//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(
//             75,
//             window.innerWidth / window.innerHeight,
//             0.1,
//             1000
//         );

//         const orbit = new OrbitControls(camera, renderer.domElement);
//         camera.position.set(0, 2, 5);
//         orbit.update();

//         const ambientLight = new THREE.AmbientLight(0x333333);
//         scene.add(ambientLight);

//         const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
//         scene.add(directionalLight);
//         directionalLight.position.set(-30, 50, 0);

//         const cubeTextureLoader = new THREE.CubeTextureLoader();
//         scene.background = cubeTextureLoader.load([xpos, xneg, ypos, yneg, zpos, zneg]);

//         const mirrorSphereCameras: any[] = [];

//         // Create balls based on titles array
//         titles.forEach((title, index) => {
//             const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(128, {
//                 generateMipmaps: true,
//                 minFilter: THREE.LinearMipmapLinearFilter,
//             });

//             const sphereGeom = new THREE.SphereGeometry(1, 32, 16); // radius, segmentsWidth, segmentsHeight
//             const mirrorSphereCamera = new THREE.CubeCamera(0.5, 100, cubeRenderTarget);
//             scene.add(mirrorSphereCamera);
//             mirrorSphereCameras.push(mirrorSphereCamera);

//             const mirrorSphereMaterial = new THREE.MeshBasicMaterial({ envMap: cubeRenderTarget.texture });
//             const mirrorSphere = new THREE.Mesh(sphereGeom, mirrorSphereMaterial);
//             mirrorSphere.position.set(
//                 (index % 5) * 3,
//                 Math.floor(index / 5) * 3,
//                 0
//             ); // Arrange in a grid
//             mirrorSphereCamera.position.copy(mirrorSphere.position);

//             scene.add(mirrorSphere);

//             // Add title display on hover
//             const div = document.createElement('div');
//             div.className = 'label';
//             div.style.position = 'absolute';
//             div.style.backgroundColor = 'white';
//             div.innerHTML = title;
//             div.style.display = 'none';
//             document.body.appendChild(div);

//             mirrorSphere.userData = { title, element: div };

//             const raycaster = new THREE.Raycaster();
//             const mouse = new THREE.Vector2();

//             function onMouseMove(event) {
//                 mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//                 mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//                 raycaster.setFromCamera(mouse, camera);
//                 const intersects = raycaster.intersectObjects(scene.children);

//                 intersects.forEach(intersect => {
//                     if (intersect.object === mirrorSphere) {
//                         intersect.object.userData.element.style.display = 'block';
//                         intersect.object.userData.element.style.top = `${event.clientY}px`;
//                         intersect.object.userData.element.style.left = `${event.clientX}px`;
//                     } else {
//                         intersect.object.userData.element.style.display = 'none';
//                     }
//                 });
//             }

//             window.addEventListener('mousemove', onMouseMove);
//         });

//         function updateReflections() {
//             mirrorSphereCameras.forEach((camera) => {
//                 camera.update(renderer, scene);
//             });
//         }

//         function animate() {
//             requestAnimationFrame(animate);
//             orbit.update();
//             updateReflections();
//             renderer.render(scene, camera);
//         }

//         animate();

//         return () => {
//             window.removeEventListener('mousemove', onMouseMove);
//             document.body.removeChild(renderer.domElement);
//             scene.clear();
//         };
//     }, [titles]);

//     return null;
// };

// export default BlogBalls



// import React, { useEffect } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import xpos from './img/dawnmountain-xpos.png';
// import xneg from './img/dawnmountain-xneg.png';
// import ypos from './img/dawnmountain-ypos.png';
// import yneg from './img/dawnmountain-yneg.png';
// import zpos from './img/dawnmountain-zpos.png';
// import zneg from './img/dawnmountain-zneg.png';


// const renderer = new THREE.WebGLRenderer();

// const BlogBalls = ({ titles }) => {
//     useEffect(() => {
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         document.body.appendChild(renderer.domElement);

//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(
//             75,
//             window.innerWidth / window.innerHeight,
//             0.1,
//             1000
//         );

//         const orbit = new OrbitControls(camera, renderer.domElement);
//         camera.position.set(0, 2, 5);
//         orbit.update();

//         const ambientLight = new THREE.AmbientLight(0x333333);
//         scene.add(ambientLight);

//         const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
//         scene.add(directionalLight);
//         directionalLight.position.set(-30, 50, 0);

//         const cubeTextureLoader = new THREE.CubeTextureLoader();
//         scene.background = cubeTextureLoader.load([xpos, xneg, ypos, yneg, zpos, zneg]);

//         const mirrorSphereCameras: THREE.CubeCamera[] = [];
//         const labels: HTMLElement[] = [];

//         // Create balls based on titles array
//         titles.forEach((title, index) => {
//             const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(128, {
//                 generateMipmaps: true,
//                 minFilter: THREE.LinearMipmapLinearFilter,
//             });

//             const sphereGeom = new THREE.SphereGeometry(1, 32, 16); // radius, segmentsWidth, segmentsHeight
//             const mirrorSphereCamera = new THREE.CubeCamera(0.5, 100, cubeRenderTarget);
//             scene.add(mirrorSphereCamera);
//             mirrorSphereCameras.push(mirrorSphereCamera);

//             const mirrorSphereMaterial = new THREE.MeshBasicMaterial({ envMap: cubeRenderTarget.texture });
//             const mirrorSphere = new THREE.Mesh(sphereGeom, mirrorSphereMaterial);
//             mirrorSphere.position.set(
//                 (index % 5) * 3,
//                 Math.floor(index / 5) * 3,
//                 0
//             ); // Arrange in a grid
//             mirrorSphereCamera.position.copy(mirrorSphere.position);

//             scene.add(mirrorSphere);

//             // Add title display on hover
//             const div = document.createElement('div');
//             div.className = 'label';
//             div.style.position = 'absolute';
//             div.style.padding = '5px 10px';
//             div.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
//             div.style.color = 'white';
//             div.style.borderRadius = '5px';
//             div.style.pointerEvents = 'none';
//             div.style.transition = 'opacity 0.2s';
//             div.style.opacity = '0';
//             div.innerHTML = title;
//             document.body.appendChild(div);
//             labels.push(div);

//             mirrorSphere.userData = { title, element: div };
//         });

//         const raycaster = new THREE.Raycaster();
//         const mouse = new THREE.Vector2();

//         const onMouseMove = (event) => {
//             mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//             mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//             raycaster.setFromCamera(mouse, camera);
//             const intersects = raycaster.intersectObjects(scene.children);

//             labels.forEach(label => {
//                 label.style.opacity = '0';
//             });

//             intersects.forEach(intersect => {
//                 if (intersect.object.userData.element) {
//                     const { element } = intersect.object.userData;
//                     element.style.opacity = '1';
//                     element.style.top = `${event.clientY + 15}px`;
//                     element.style.left = `${event.clientX + 15}px`;
//                 }
//             });
//         };

//         window.addEventListener('mousemove', onMouseMove);

//         function updateReflections() {
//             mirrorSphereCameras.forEach((camera) => {
//                 camera.update(renderer, scene);
//             });
//         }

//         function animate() {
//             requestAnimationFrame(animate);
//             orbit.update();
//             updateReflections();
//             renderer.render(scene, camera);
//         }

//         animate();

//         return () => {
//             window.removeEventListener('mousemove', onMouseMove);
//             document.body.removeChild(renderer.domElement);
//             labels.forEach(label => document.body.removeChild(label));
//             scene.clear();
//         };
//     }, [titles]);

//     return null;
// };

// export default BlogBalls;



import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import xpos from './img/dawnmountain-xpos.png';
import xneg from './img/dawnmountain-xneg.png';
import ypos from './img/dawnmountain-ypos.png';
import yneg from './img/dawnmountain-yneg.png';
import zpos from './img/dawnmountain-zpos.png';
import zneg from './img/dawnmountain-zneg.png';

const renderer = new THREE.WebGLRenderer();

const BlogBalls = ({ titles }) => {
    useEffect(() => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        const orbit = new OrbitControls(camera, renderer.domElement);
        camera.position.set(0, 2, 5);
        orbit.update();

        const ambientLight = new THREE.AmbientLight(0x333333);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
        scene.add(directionalLight);
        directionalLight.position.set(-30, 50, 0);

        const cubeTextureLoader = new THREE.CubeTextureLoader();
        scene.background = cubeTextureLoader.load([xpos, xneg, ypos, yneg, zpos, zneg]);

        const mirrorSphereCameras: THREE.CubeCamera[] = [];
        const labels: HTMLElement[] = [];

        // Create balls based on titles array
        titles.forEach((title, index) => {
            const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(128, {
                generateMipmaps: true,
                minFilter: THREE.LinearMipmapLinearFilter,
            });

            const sphereGeom = new THREE.SphereGeometry(1, 32, 16); // radius, segmentsWidth, segmentsHeight
            const mirrorSphereCamera = new THREE.CubeCamera(0.5, 100, cubeRenderTarget);
            scene.add(mirrorSphereCamera);
            mirrorSphereCameras.push(mirrorSphereCamera);

            const mirrorSphereMaterial = new THREE.MeshBasicMaterial({ envMap: cubeRenderTarget.texture });
            const mirrorSphere = new THREE.Mesh(sphereGeom, mirrorSphereMaterial);
            mirrorSphere.position.set(
                (index % 5) * 3,
                Math.floor(index / 5) * 3,
                0
            ); // Arrange in a grid
            mirrorSphereCamera.position.copy(mirrorSphere.position);

            scene.add(mirrorSphere);

            // Add title display on hover
            const div = document.createElement('div');
            div.className = 'label';
            div.style.position = 'absolute';
            div.style.padding = '5px 10px';
            div.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            div.style.color = 'white';
            div.style.borderRadius = '5px';
            div.style.pointerEvents = 'none';
            div.style.transition = 'opacity 0.2s';
            div.style.opacity = '0';
            div.innerHTML = title;
            document.body.appendChild(div);
            labels.push(div);

            mirrorSphere.userData = { title, element: div };
        });

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        const onMouseMove = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(scene.children);

            labels.forEach(label => {
                label.style.opacity = '0';
            });

            intersects.forEach(intersect => {
                if (intersect.object.userData.element) {
                    const { element } = intersect.object.userData;
                    element.style.opacity = '1';
                    element.style.top = `${event.clientY + 15}px`;
                    element.style.left = `${event.clientX + 15}px`;
                }
            });
        };

        window.addEventListener('mousemove', onMouseMove);

        function updateReflections() {
            mirrorSphereCameras.forEach((camera) => {
                camera.update(renderer, scene);
            });
        }

        function animate() {
            requestAnimationFrame(animate);
            orbit.update();
            updateReflections();
            renderer.render(scene, camera);
        }

        animate();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.body.removeChild(renderer.domElement);
            labels.forEach(label => {
                if (label.parentNode === document.body) {
                    document.body.removeChild(label);
                }
            });
            scene.clear();
        };
    }, [titles]);

    return null;
};

export default BlogBalls;

