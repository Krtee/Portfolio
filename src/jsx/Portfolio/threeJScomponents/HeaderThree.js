import {FontLoader, Vector3, TextBufferGeometry} from "three"
import React, {useCallback, useRef, Suspense} from "react"
import usePromise from "react-promise-suspense"
import lerp from "lerp"
import state from "../store"
import {Block, useBlock} from "./Block";
import {Canvas, Dom, useLoader, useFrame} from "react-three-fiber";
import {Text, MultilineText} from "./Text";
import '../../../scss/header.scss';
import Cross from "./Cross";
import Container from "react-bootstrap/Container";
import Header from "../domComponents/Header";


function HeaderThree() {

    const {contentMaxWidth: w, canvasWidth, canvasHeight, mobile} = useBlock()

    return (
        <>
            <Block factor={1.0} offset={0}>
                <Block factor={1.2}>
                    <MultilineText size={mobile ? w*0.6:w * 0.25} position={[mobile ? -w/1.7 : w/20, 0.2, -1]} color="#FFFFFF" text={'MINH VU\nNGUYEN'} lineHeight={mobile ? w/1.7:w/4} font={'Morganite_Thin.json'}></MultilineText>
                </Block>
                <Block factor={1.2} offset={0.4}>
                   <MultilineText size={mobile ? w*0.1:w * 0.25} position={[mobile ? -w/1.5:-w /2 , 0.1, -1]} lineHeight={1} font={'Hero_Regular.json'}text={"I am a prospective Developer,\n  currently studying Software Engineering\n and Media in Stuttgart,\n who loves videogames, noodlesoup and Nietzsche.\n Feel free to check me out!"}></MultilineText>
                </Block>
            </Block>
        </>
    )
}

export default HeaderThree; 