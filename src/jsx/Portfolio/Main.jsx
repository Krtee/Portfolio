import React, {Component, useRef, useEffect, useState,Suspense} from "react";
import Header from "./domComponents/Header";
import Timeline from "./domComponents/Timeline";
import '../../scss/index.scss';
import '../../scss/nav.scss';
import { Canvas, Dom, useLoader, useFrame } from "react-three-fiber"
import { TextureLoader, LinearFilter } from "three"
import state from "./store"
import {Block, useBlock} from "./threeJScomponents/Block";
import HeaderThree from "./threeJScomponents/HeaderThree";


function Main (){
    const scrollArea = useRef()
    const onScroll = e => (state.top.current= e.target.scrollTop)

    useEffect(() => void onScroll({ target: scrollArea.current }), [])

        return (
            <div>
                <Canvas orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
                    <Suspense fallback={<Dom center className="loading" children="Loading..." />}>
                        <HeaderThree></HeaderThree>
                    </Suspense>
                </Canvas>
                <div ref={scrollArea} onScroll={onScroll}>
                    {new Array(state.sections).fill().map((_, index) => (
                        <div key={index} id={"0" + index} style={{ height: `${(state.pages / state.sections) * 100}vh` }} />
                    ))}
                </div>
            </div>
        );
}

export default Main;
