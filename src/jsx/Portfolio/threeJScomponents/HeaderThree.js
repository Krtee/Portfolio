import { FontLoader, Vector3, TextBufferGeometry } from "three"
import React, { useCallback, useRef,Suspense} from "react"
import usePromise from "react-promise-suspense"
import lerp from "lerp"
import state from "../store"
import {Block,useBlock} from "./Block";
import { Canvas, Dom, useLoader, useFrame } from "react-three-fiber";
import {Text,MultilineText} from "./Text";
import '../../../scss/header.scss';
import Cross from "./Cross";




function HeaderThree () {

    const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()

    return (
        <Block factor={1.0} offset={0}>
            <Block factor={1.2}>
                    <Text size={w * 0.08} position={[-w / 3.2, 0.5, -1]} color="#d40749">Hallooo</Text>
            </Block>
            <Block factor={1.5}>
                <Dom position={[-w / 3.2, -w * 0.08 + 0.25, -1]}>
                    <div className={'description'}>
                        I am a prospective Developer, <br/> currently studying Software <br/>
                        Engineering and Media in Stuttgart, <br/> who loves videogames, <br/>noodlesoup and
                        Nietzsche. <br></br> Feel
                        free to check me out!
                    </div>
                </Dom>
            </Block>
        </Block>
    )
}
export default HeaderThree;