import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
// import "tailwindcss";
import { MeshBasicMaterial } from 'three'
import {Center, OrbitControls} from '@react-three/drei'
import Argentina from '../Models/Model'

function App() {
  return (
    <>
    <div style={{backgroundColor: "black", width: '100vw', height: '100vh', margin: 0, overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 6],fov:60 }}>
        <Center>
          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            {/* Este material brilla en la oscuridad, no necesita luces */}
            <meshStandardMaterial emissive="#8e00b2" flatShading={true} color="#0ea5e9" wireframe={true} />
          </mesh>
          <Argentina scale={4} position={[1, 0, 0]} />
          <OrbitControls />
          <ambientLight intensity={1}/>
        </Center>
      </Canvas>
    </div>
    </>
  )
}

// createRoot(document.getElementById('root')).render(<App />)
export default App
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
// import { useRef, useEffect } from 'react'
// import * as THREE from 'three'

// function MapaArgentinaSolido() {
//   const geomRef = useRef()

//   useEffect(() => {
//     if (!geomRef.current) return

//     const pos = geomRef.current.attributes.position
//     const v = new THREE.Vector3()

//     for (let i = 0; i < pos.count; i++) {
//       // Leemos el vértice desde el atributo de posición
//       v.fromBufferAttribute(pos, i)

//       const yNormalizado = v.y 

//       // Lógica de esculpido geográfico (Límites de Argentina)
//       let limiteIzquierdo = -0.3
//       let limiteDerecho = 0.3

//       if (yNormalizado > 0.3) {
//         limiteIzquierdo = -0.5 + (yNormalizado * 0.2) 
//         const bultoMisiones = Math.sin((yNormalizado - 0.3) * 4) * 0.4
//         limiteDerecho = 0.4 + bultoMisiones
//       } 
//       else if (yNormalizado <= 0.3 && yNormalizado > -0.4) {
//         limiteIzquierdo = -0.4 + (yNormalizado * 0.1)
//         const panzaBsAs = Math.cos(yNormalizado * 3) * 0.25
//         limiteDerecho = 0.25 + panzaBsAs
//       } 
//       else {
//         const factorEmbudo = (yNormalizado + 1.5) / 1.1
//         limiteIzquierdo = -0.15 * factorEmbudo
//         limiteDerecho = 0.15 * factorEmbudo
        
//         if (yNormalizado < -1.3) {
//           limiteIzquierdo -= 0.05
//           limiteDerecho += 0.03
//         }
//       }

//       // Restringimos los vértices del plano a los límites del mapa
//       if (v.x < limiteIzquierdo) v.x = limiteIzquierdo
//       if (v.x > limiteDerecho) v.x = limiteDerecho

//       // Relieve montañoso continuo en el Oeste (Cordillera)
//       if (v.x < (limiteIzquierdo + limiteDerecho) / 2) {
//         const cercaniaOeste = (v.x - limiteIzquierdo)
//         // Usamos una función suave para el relieve sólido
//         v.z = Math.sin(v.y * 6) * Math.cos(v.x * 4) * 0.12 * (1 - cercaniaOeste)
//       } else {
//         v.z = 0 // Llanura perfectamente plana para evitar artefactos visuales sólidos
//       }

//       // Guardamos la nueva posición modificada
//       pos.setXYZ(i, v.x, v.y, v.z)
//     }

//     // AVISOS CRUCIALES PARA FORMAS SÓLIDAS:
//     pos.needsUpdate = true
//     // Recalcula los vectores de luz para que el sombreado 3D se vea suave y realista
//     geomRef.current.computeVertexNormals() 
//   }, [])

//   return (
//     // Cambiamos <points> por <mesh> para rellenar las caras
//     <mesh castShadow receiveShadow>
//       {/* Mantenemos la rejilla de alta definición */}
//       <planeGeometry ref={geomRef} args={[2.5, 3.2, 120, 120]} />
      
//       {/* Material sólido con propiedades de brillo holográfico */}
//       <meshStandardMaterial 
//         color="#0ea5e9"           // Color celeste base
//         emissive="#0284c7"        // Luz interna difusa (holograma)
//         roughness={0.2}           // Superficie ligeramente pulida
//         metalness={0.5}           // Toque metalizado de interfaz cibernética
//         flatShading={true}        // Resalta las caras poligonales de las montañas al rotar
//         side={THREE.DoubleSide}   // Hace que se vea por adelante y por atrás
//       />
//     </mesh>
//   )
// }

// export default function App() {
//   return (
//     <div style={{ width: '100vw', height: '100vh', backgroundColor: '#020617', margin: 0, overflow: 'hidden' }}>
//       <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
//         {/* Iluminación clave para destacar el relieve sólido */}
//         <ambientLight intensity={0.4} />
//         <pointLight position={[5, 5, 5]} intensity={1.5} />
//         <directionalLight position={[-5, 3, 2]} intensity={1} />
        
//         <MapaArgentinaSolido />

//         <OrbitControls enableZoom={true} />
//       </Canvas>
//     </div>
//   )
// }