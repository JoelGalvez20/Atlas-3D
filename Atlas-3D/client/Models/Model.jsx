import { useGLTF } from '@react-three/drei'

function Argentina(props) {
  const { scene } = useGLTF('/models/Argentina.glb')

  return (
    <primitive
      object={scene}
      {...props}
    />
  )
}

export default Argentina