import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
export const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!containerRef.current) return
    // Scene setup
    const scene = new THREE.Scene()
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )
    camera.position.z = 5
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(0, 10, 5)
    scene.add(directionalLight)
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 1500
    const posArray = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3),
    )
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
    })
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)
    // Create wireframe sphere
    const sphereGeometry = new THREE.SphereGeometry(2, 32, 32)
    const wireframe = new THREE.WireframeGeometry(sphereGeometry)
    const line = new THREE.LineSegments(wireframe)
    line.material = new THREE.LineBasicMaterial({
      color: 0x444444,
    })
    scene.add(line)
    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      particlesMesh.rotation.y += 0.001
      line.rotation.y += 0.002
      line.rotation.x += 0.001
      renderer.render(scene, camera)
    }
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    animate()
    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])
  return <div ref={containerRef} className="w-full h-full" />
}
