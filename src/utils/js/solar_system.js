import * as THREE from 'three'; 
import{OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'; 

import space from '../assets/square_space.jpg';
import sunTexture from '../assets/sun_texture.jpg';  
import mercuryTexture from '../assets/mercury_texture.jpg'; 
import saturnTexture from '../assets/saturn_texture.jpg'; 
import saturnRingTexture from '../assets/saturnRing_texture.jpg'; 

const renderer = new THREE.WebGLRenderer(); 

export const solar_system = () => {
        renderer.setSize(window.innerWidth, window.innerHeight); 
        renderer.shadowMap.enabled = true; 

        document.body.appendChild(renderer.domElement); 

        const scene = new THREE.Scene(); 
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 ); 

        const orbit = new OrbitControls(camera, renderer.domElement);
        orbit.update();
       

        const axesHelper = new THREE.AxesHelper(10); 
        scene.add(axesHelper); 

        camera.position.set(-10, 30, 30); 

        const ambientLight = new THREE.AmbientLight(0x333333); 
        scene.add(ambientLight)

        const textureLoader = new THREE.TextureLoader(); 

        const sunGeo = new THREE.SphereGeometry(16, 30, 30); 
        const sunMat = new THREE.MeshBasicMaterial({
            map: textureLoader.load(sunTexture)
        }); 
        const sun = new THREE.Mesh(sunGeo, sunMat); 
        scene.add(sun); 

        const mercuryGeo = new THREE.SphereGeometry(3.2, 30, 30); 
        const mercuryMat = new THREE.MeshStandardMaterial({
            map: textureLoader.load(mercuryTexture)
        }); 
        const mercury = new THREE.Mesh(mercuryGeo, mercuryMat); 

        const mercuryObj = new THREE.Object3D(); 
        mercuryObj.add(mercury); 
        scene.add(mercuryObj); 

        mercury.position.x  = 28; 


        const saturnGeo = new THREE.SphereGeometry(5, 30, 30); 
        const saturnMat = new THREE.MeshStandardMaterial({
            map: textureLoader.load(saturnTexture)
        }); 
        const saturn = new THREE.Mesh(saturnGeo, saturnMat); 

        const saturnObj = new THREE.Object3D(); 
        saturnObj.add(saturn); 
        scene.add(saturnObj); 

        saturn.position.x = 138; 

        const saturnRingGeo = new THREE.RingGeometry(10, 15, 32); 
        const saturnRingMat = new THREE.MeshBasicMaterial({
            map: textureLoader.load(saturnRingTexture), 
            side: THREE.DoubleSide 
        }); 
        const saturnRing = new THREE.Mesh(saturnRingGeo, saturnRingMat); 
        saturnObj.add(saturnRing); 
        saturnRing.position.x = 138; 
        saturnRing.rotation.x = -0.5 * Math.PI; 

        const pointLight = new THREE.PointLight(0xFFFFFF, 2, 300); 
        scene.add(pointLight); 

        const cubeTextureLoader = new THREE.CubeTextureLoader(); 
        scene.background = cubeTextureLoader.load([space, space, space, space, space, space]); 

        function animate() {
            sun.rotateY(0.004);
            mercuryObj.rotateY(0.04); 
            saturn.rotateY(0.038);
            saturnObj.rotateY(0.0009); 

            renderer.render(scene, camera); 
        }
        //renderer.render(scene, camera); 

        renderer.setAnimationLoop(animate); 

        window.addEventListener('resize', function(){
            camera.aspect = window.innerWidth / window.innerHeight; 
            camera.updateProjectionMatrix(); 
            renderer.setSize(window.innerWidth, window.innerHeight);
        }); 
};












