import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, Float, Sparkles } from '@react-three/drei';
import { useRef, useEffect, useState, useMemo } from 'react';
import * as THREE from 'three';
function Atmosphere({reduced}:{reduced:boolean}) {
 const material=useRef<THREE.ShaderMaterial>(null);
 const uniforms=useMemo(()=>({uTime:{value:0},uPointer:{value:new THREE.Vector2()}}),[]);
 useFrame(({clock,pointer})=>{if(!material.current||reduced)return;material.current.uniforms.uTime.value=clock.elapsedTime;material.current.uniforms.uPointer.value.copy(pointer)});
 return <mesh position={[0,0,-1.4]}><planeGeometry args={[8,8]}/><shaderMaterial ref={material} transparent depthWrite={false} uniforms={uniforms} vertexShader={`varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`} fragmentShader={`varying vec2 vUv;uniform float uTime;uniform vec2 uPointer;void main(){vec2 p=vUv-.5-uPointer*.04;float r=length(p);float wave=sin(r*35.-uTime*.35)*.02;float glow=exp(-r*r*18.)*.13+exp(-pow((r-.27+wave)*30.,2.))*.06;gl_FragColor=vec4(.35,.4,.9,glow);}`}/></mesh>
}
function Sculpture({ reduced }: {reduced:boolean}) {
 const group=useRef<THREE.Group>(null);
 useFrame(({clock,pointer},delta)=>{if(!group.current||reduced)return;group.current.rotation.y=THREE.MathUtils.lerp(group.current.rotation.y,clock.elapsedTime*.12+pointer.x*.3,Math.min(delta*2,1));group.current.rotation.x=THREE.MathUtils.lerp(group.current.rotation.x,.25+pointer.y*.18,Math.min(delta*2,1));});
 return <group ref={group} rotation={[.25,0,-.35]}><Float speed={reduced?0:1.4} rotationIntensity={.12} floatIntensity={.4}>
 <mesh><torusKnotGeometry args={[1.35,.39,220,40,2,3]}/><meshPhysicalMaterial color="#b5bdce" metalness={1} roughness={.16} clearcoat={1}/></mesh>
 <mesh rotation={[Math.PI/2,.3,0]}><torusGeometry args={[2.12,.012,8,180]}/><meshBasicMaterial color="#8b9cff" transparent opacity={.45}/></mesh>
 <mesh scale={.52}><icosahedronGeometry args={[1,1]}/><meshStandardMaterial color="#7082ff" wireframe emissive="#5270ff" emissiveIntensity={2}/></mesh>
 </Float></group>
}
export default function Scene({reduced}:{reduced:boolean}){
 const host=useRef<HTMLDivElement>(null);const [active,setActive]=useState(true);useEffect(()=>{const observer=new IntersectionObserver(([e])=>setActive(e.isIntersecting));if(host.current)observer.observe(host.current);return()=>observer.disconnect()},[]);
 return <div ref={host} style={{width:'100%',height:'100%'}}><Canvas dpr={[1,1.5]} camera={{position:[0,0,6.8],fov:43}} gl={{antialias:true,alpha:true,powerPreference:'low-power'}} frameloop={reduced||!active?'demand':'always'}><Atmosphere reduced={reduced}/><ambientLight intensity={.3}/><pointLight position={[3,2,4]} color="#b2bdff" intensity={30}/><Sculpture reduced={reduced}/><Sparkles count={45} scale={9} size={1.3} speed={reduced?0:.2} color="#bdc5ff"/><Environment resolution={128}><Lightformer intensity={4} position={[-3,2,3]} scale={[2,7,1]}/><Lightformer intensity={3} position={[4,0,1]} scale={[2,8,1]} color="#a7b8ff"/><Lightformer intensity={2} position={[0,-4,2]} scale={[5,1,1]} color="#7864fd"/></Environment></Canvas></div>
}
