
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useRef } from "react";

function CoreObject() {
  const group = useRef(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.22;
      group.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.4) * 0.12;
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.75}
          roughness={0.2}
          flatShading
        />
      </mesh>

      <mesh rotation={[0.5, 0.2, 0.2]} scale={1.35}>
        <torusGeometry args={[1, 0.018, 12, 100]} />
        <meshStandardMaterial
          color="#67e8f9"
          metalness={0.7}
          emissive="#0891b2"
          emissiveIntensity={0.5}
        />
      </mesh>

      <mesh rotation={[1.1, 0.7, 0.4]} scale={1.55}>
        <torusGeometry args={[1, 0.012, 10, 100]} />
        <meshStandardMaterial
          color="#c4b5fd"
          metalness={0.6}
          roughness={0.25}
        />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="h-[320px] w-full sm:h-[430px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <pointLight position={[3, 3, 4]} intensity={35} color="#a78bfa" />
        <pointLight position={[-3, -2, 2]} intensity={20} color="#22d3ee" />

        <Suspense fallback={null}>
          <Stars radius={40} depth={25} count={450} factor={2} fade />
          <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.7}>
            <CoreObject />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
