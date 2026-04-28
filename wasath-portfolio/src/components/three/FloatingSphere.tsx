import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
    const ref = useRef<THREE.Mesh>(null);
    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.rotation.x = clock.getElapsedTime() * 0.2;
            ref.current.rotation.y = clock.getElapsedTime() * 0.3;
        }
    });
    return (
        <Sphere ref={ref} args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
                color="#3b82f6"
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0.1}
                metalness={0.8}
            />
        </Sphere>
    );
}

export default function FloatingSphere() {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} color="#06b6d4" />
            <pointLight position={[-10, -10, -5]} intensity={0.8} color="#3b82f6" />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
    );
}