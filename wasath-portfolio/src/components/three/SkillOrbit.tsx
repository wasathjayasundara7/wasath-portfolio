import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Torus } from "@react-three/drei";
import * as THREE from "three";

function Ring({ color = "#3b82f6", radius = 2, speed = 0.5 }) {
    const ref = useRef<THREE.Mesh>(null);
    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.rotation.x = clock.getElapsedTime() * speed;
            ref.current.rotation.y = clock.getElapsedTime() * speed * 0.7;
        }
    });
    return (
        <Torus ref={ref} args={[radius, 0.04, 16, 100]}>
            <meshStandardMaterial color={color} wireframe />
        </Torus>
    );
}

export default function SkillOrbit() {
    return (
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            <ambientLight intensity={0.8} />
            <Ring color="#3b82f6" radius={2} speed={0.4} />
            <Ring color="#06b6d4" radius={2.8} speed={0.25} />
            <Ring color="#8b5cf6" radius={1.2} speed={0.6} />
        </Canvas>
    );
}