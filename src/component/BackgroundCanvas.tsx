import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useScrollProgress } from '../context/ScrollContext'
import { useTransform } from 'framer-motion'

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const scrollYProgress = useScrollProgress()
  
  // Map scroll to particle rotation and scale (pulses at transitions)
  const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4])
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1, 1.4, 1.1, 1.3, 1])

  // Create random points in a sphere
  const particles = useMemo(() => {
    const temp = new Float32Array(4000 * 3)
    for (let i = 0; i < 4000; i++) {
      const x = (Math.random() - 0.5) * 15
      const y = (Math.random() - 0.5) * 15
      const z = (Math.random() - 0.5) * 15
      temp.set([x, y, z], i * 3)
    }
    return temp
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.y = t * 0.01 + rotationY.get()
    ref.current.rotation.x = t * 0.005
    ref.current.scale.setScalar(scale.get())
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#818CF8"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.4}
        />
      </Points>
    </group>
  )
}

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={['#0B0D17']} />
        <ParticleField />
      </Canvas>
    </div>
  )
}
