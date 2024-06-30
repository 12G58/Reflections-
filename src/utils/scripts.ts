import * as THREE from 'three'; 
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

import xpos from '../img/dawnmountain-xpos.png'; 
import xneg from '../img/dawnmountain-xneg.png'; 
import ypos from '../img/dawnmountain-ypos.png'; 
import yneg from '../img/dawnmountain-yneg.png'; 
import zpos from '../img/dawnmountain-zpos.png'; 
import zneg from '../img/dawnmountain-zneg.png'; 

const renderer = new THREE.WebGLRenderer(); 

export const net = () => {
    renderer.setSize(window.innerWidth, window.innerHeight); 
    document.body.appendChild(renderer.domElement); 

    const scene = new THREE.Scene(); 

    const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1, 
    1000
    ); 

    const orbit = new OrbitControls(camera, renderer.domElement);
    // const axesHelper = new THREE.AxesHelper(5); 
    // scene.add(axesHelper); 

    camera.position.set(0,2,5); 
    orbit.update(); 


    const ambientLight = new THREE.AmbientLight(0x333333); 
    scene.add(ambientLight); 

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8); 
    scene.add(directionalLight); 
    directionalLight.position.set(-30, 50, 0); 

    // const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5); 
    // scene.add(dLightHelper); 

    const cubeTextureLoader = new THREE.CubeTextureLoader(); 
    scene.background = cubeTextureLoader.load([
    xpos,
    xneg,
    ypos,
    yneg,
    zpos,
    zneg
    ]); 

    const mirrorSphereCameras: any[] = [];
    for (let k = 0; k < 3; k++ ){
    for ( let j = 0; j < 3; j++){
        for (let i = 0; i < 3; i++) {
            const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(128, {
                generateMipmaps: true,
                minFilter: THREE.LinearMipmapLinearFilter,
            })
            
            const sphereGeom =  new THREE.SphereGeometry( 1, 32, 16 ); // radius, segmentsWidth, segmentsHeight
            const mirrorSphereCamera = new THREE.CubeCamera(0.5, 100, cubeRenderTarget);
                // mirrorCubeCamera.renderTarget.minFilter = THREE.LinearMipMapLinearFilter;
            scene.add( mirrorSphereCamera );
            mirrorSphereCameras.push(mirrorSphereCamera); 
        
            const mirrorSphereMaterial = new THREE.MeshBasicMaterial( { envMap: cubeRenderTarget.texture } );
            const mirrorSphere = new THREE.Mesh( sphereGeom, mirrorSphereMaterial );
            mirrorSphere.position.set(7*i,7*j,7*k);
            mirrorSphereCamera.position.copy(mirrorSphere.position); 
        
            scene.add(mirrorSphere);
            
        }
    }
    }


    // for ( let i = 0; i < 5; i++ ){
    //     const boxGeometry = new THREE.BoxGeometry(); 
    //     const boxMaterial = new THREE.MeshStandardMaterial({color: 0x00FF00});
    //     const box = new THREE.Mesh(boxGeometry, boxMaterial); 
    //     box.position.set(0,0,5*i); 
    //     scene.add(box); 
    // }

    function updateReflections (){
    mirrorSphereCameras.forEach((camera) => {
        camera.update(renderer, scene); 
    }); 
    } 


    function animate() {
    requestAnimationFrame(animate);
    // Update the orbit controls
    orbit.update();
    updateReflections() 
    renderer.render(scene, camera);
    }

    animate();


}


