import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function Camera3d() {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)
  const modelRef = useRef(null)
  const scrollRef = useRef(0)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    // Load GLTF model
    const loader = new GLTFLoader()
    loader.load(
      '/scene.gltf', // Replace with your model path
      (gltf) => {
        const model = gltf.scene
        model.rotation.y = Math.PI / 2 // Initial rotation (facing right)
        scene.add(model)
        modelRef.current = model
        console.log(model)
      },
      undefined,
      (error) => console.error('An error occurred loading the model:', error)
    )

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      if (modelRef.current) {
        // Calculate scroll percentage
        const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
        scrollRef.current = scrollPercentage

        // Rotate towards screen
        if (scrollPercentage > 0.1) {
          const rotationY = Math.PI / 2 - (scrollPercentage - 0.1) * Math.PI
          modelRef.current.rotation.y = THREE.MathUtils.lerp(modelRef.current.rotation.y, rotationY, 0.1)
        }

        // Zoom in
        if (scrollPercentage > 0.5) {
          const positionZ = 5 - (scrollPercentage - 0.5) * 10
          const scale = 1 + (scrollPercentage - 0.5) * 3
          modelRef.current.position.z = THREE.MathUtils.lerp(modelRef.current.position.z, positionZ, 0.1)
          modelRef.current.scale.setScalar(THREE.MathUtils.lerp(modelRef.current.scale.x, scale, 0.1))
        }
      }

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return
      cameraRef.current.aspect = window.innerWidth / window.innerHeight
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
    }
  }, [])

  return (
    <div style={{ height: '300vh' }}>
      <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh' }} />
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'opacity 0.5s ease-in-out',
          opacity: scrollRef.current > 0.8 ? 1 : 0,
          pointerEvents: scrollRef.current > 0.8 ? 'auto' : 'none',
        }}
      >
        <h2 className="text-4xl font-bold">Next Section</h2>
      </div>
    </div>
  )
}