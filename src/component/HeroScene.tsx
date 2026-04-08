import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei'
import * as THREE from 'three'
import { useScrollProgress } from '../context/ScrollContext'
import { useTransform } from 'framer-motion'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)
  const scrollYProgress = useScrollProgress()

  // Map scroll to sphere properties (Chapter I: 0.0 - 0.25)
  const scale = useTransform(scrollYProgress, [0, 0.25], [2.2, 6])
  const opacity = useTransform(scrollYProgress, [0.18, 0.25], [1, 0])
  const positionY = useTransform(scrollYProgress, [0, 0.25], [0, 4])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.cos(t / 4) / 8
    meshRef.current.rotation.y = Math.sin(t / 4) / 8
    meshRef.current.rotation.z = Math.sin(t / 4) / 8
    meshRef.current.position.y = (1 + Math.sin(t / 1.5)) / 10 + positionY.get()
    meshRef.current.scale.setScalar(scale.get())
    
    if (meshRef.current.material instanceof THREE.Material) {
      meshRef.current.material.opacity = opacity.get()
      meshRef.current.material.transparent = true
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere
        args={[1, 100, 200]}
        scale={2.2}
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={hovered ? "#818CF8" : "#6366F1"}
          attach="material"
          distort={0.25}
          speed={1.5}
          roughness={0.05}
          metalness={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>
    </Float>
  )
}

export default function HeroScene() {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[500px] cursor-pointer">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#9857d3" intensity={2} />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}
