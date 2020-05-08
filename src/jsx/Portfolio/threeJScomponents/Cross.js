import {FontLoader, Vector3, TextBufferGeometry,TextureLoader} from "three"
import React, {useCallback, useRef,useMemo} from "react"
import {useLoader, useFrame} from "react-three-fiber"
import lerp from "lerp"
import state from "../store"
import {Block,useBlock} from "./Block";
import URL from '../../../assets/img/me.jpeg'


function Cross() {
    const ref = useRef()
    const { viewportHeight } = useBlock();
    useFrame(() => {
        const curTop = state.top.current;
        console.log(curTop+ " "+ viewportHeight)
        const nextY = (curTop / ((state.pages - 1) * viewportHeight)) * Math.PI
        ref.current.rotation.z = lerp(ref.current.rotation.z, nextY, 0.1);
    })
    return (
        <group ref={ref}>
            <mesh >
                <boxBufferGeometry attach={'geometry'} args={[1,1,1]}></boxBufferGeometry>
                <meshBasicMaterial attach={'material'} color={'red'}></meshBasicMaterial>
            </mesh>
        </group>
    )
}

export default Cross;