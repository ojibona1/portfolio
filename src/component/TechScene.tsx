import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text, Sphere, MeshDistortMaterial, Points, PointMaterial, Decal, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { tech } from '../constraint/tech'

function DigitalCore() {
  return (
    <Sphere args={[2.5, 64, 64]}>
      <MeshDistortMaterial
        color="#6366F1"
        speed={2}
        distort={0.4}
        radius={1}
        emissive="#4338CA"
        emissiveIntensity={0.5}
        transparent
        opacity={0.05}
      />
    </Sphere>
  )
}

function StarField() {
  const points = useMemo(() => {
    const p = new Float32Array(500 * 3)
    for (let i = 0; i < 500; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15
      p[i * 3 + 1] = (Math.random() - 0.5) * 15
      p[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return p
  }, [])

  return (
    <Points positions={points}>
      <PointMaterial
        transparent
        color="#818CF8"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  )
}

function TechNode({ position, color, label, index, image }: { position: [number, number, number], color: string, label: string, index: number, image: string }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const texture = useTexture(image)
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
        meshRef.current.position.y = position[1] + Math.sin(t + index) * 0.2
        meshRef.current.rotation.y = t * 0.4
    }
  })
  
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <group position={position}>
        <Sphere ref={meshRef} args={[0.35, 32, 32]}>
          <MeshDistortMaterial
            color={color}
            speed={3}
            distort={0.3}
            radius={1}
            emissive={color}
            emissiveIntensity={0.3}
            transparent
            opacity={0.7}
          />
          <Decal
            position={[0, 0, 0.3]}
            rotation={[0, 0, 0]}
            scale={[0.4, 0.4, 0.4]}
            map={texture}
          />
        </Sphere>
        <Text
          position={[0, -0.45, 0]}
          fontSize={0.14}
          color="white"
          anchorX="center"
          anchorY="middle"
          fillOpacity={0.8}
        >
          {label}
        </Text>
      </group>
    </Float>
  )
}

const TECH_ITEMS = [
  { label: 'React', color: '#61DAFB', image: tech.react },
  { label: 'Node.js', color: '#339933', image: tech.node },
  { label: 'TypeScript', color: '#3178C6', image: tech.typescript },
  { label: 'Three.js', color: '#6366F1', image: tech.javascript }, // Fallback to JS if three icon missing
  { label: 'Python', color: '#3776AB', image: tech.python },
  { label: 'MongoDB', color: '#47A248', image: tech.mongo },
]

export default function TechScene() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#6366F1" />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#818CF8" />
            
            <StarField />
            <DigitalCore />

            {TECH_ITEMS.map((tech, i) => {
            const angle = (i / TECH_ITEMS.length) * Math.PI * 2
            const radius = 4.5
            return (
                <TechNode
                    key={i}
                    index={i}
                    label={tech.label}
                    color={tech.color}
                    image={tech.image}
                    position={[
                        Math.cos(angle) * radius,
                        Math.sin(angle) * radius * 0.5,
                        Math.sin(angle * 2) * 2
                    ]}
                />
            )
            })}
        </Suspense>
      </Canvas>
    </div>
  )
}
