// import ForceGraph3D from '3d-force-graph';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ForceGraph({ wcontainer, hcontainer }) {
    const canvasRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);

    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        if (!isInitialized) {
            // console.log('force graph');
            if (canvasRef.current == null) {
                return
            }

            const scene = new THREE.Scene();
            sceneRef.current = scene;
            const camera = new THREE.PerspectiveCamera(75, wcontainer / hcontainer, 0.1, 1000);
            camera.position.z = 5;
            cameraRef.current = camera;

            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
            // renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setSize(wcontainer, hcontainer);
            rendererRef.current = renderer;
            canvasRef.current.appendChild(renderer.domElement);

            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            const animate = () => {
                requestAnimationFrame(animate);
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                renderer.render(sceneRef.current, cameraRef.current);
            };

            animate();

            return () => {
                renderer.remove()
                scene.remove()
                camera.remove()
                canvasRef.remove()
            }
            setIsInitialized(true)
        }
    }, [wcontainer, hcontainer, isInitialized]);


    return (
        <div ref={canvasRef}></div>
    );
}
