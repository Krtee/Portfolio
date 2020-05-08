import React, {Component, createRef, useEffect, useState} from "react";
import '../../../scss/header.scss';


function Header() {

        return (
            <div className="container-fluid header">
                <div className={'myblockno2'}></div>

                <div className={'myblockno1'}>
                </div>

                <div className={'row'}>
                    <div className={'col-lg-5 col-md-5 col-sm-12 name order-md-2'}>
                        <h1 className="display-1">MINH VU<br></br>NGUYEN</h1>

                    </div>
                    <div className={'col-lg-7 col-md-7 col-sm-12 text-right order-md-1'}>
                        <div className={'d-none emptySpace'}></div>
                        <div className="description">
                            <p className="lead display-4">I am a prospective Developer, <br/> currently studying Software <br/>
                                Engineering and Media in Stuttgart, <br/> who loves videogames, <br/>noodlesoup and
                                Nietzsche. <br></br> Feel
                                free to check me out!</p>
                        </div>
                    </div>

                </div>
            </div>
        );
}

export default Header;
