import React, {useEffect, useState} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import MenuItem from "./MenuItem";

const menuItems = {
    about: 0,
    projects: null,
    contact: null,
}

const Navigation = (props) =>{

    const [activeItem,setActiveItem] =useState()

    useEffect(()=>{
        const observer = new MutationObserver(getAnchorPoints);
        observer.observe(document.getElementById('root'),{
            childList: true,
            subtree:true,
        });
        window.addEventListener('scroll',handleScroll);
    },[]);

    const getAnchorPoints = () => {
        const curScroll = window.scrollY - 100;
        const viewPortHeight = Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0
        );
        for (const key in menuItems) {
            menuItems[key] =
                document.getElementById(key).getBoundingClientRect().top + curScroll;
        }
        const bottom = document.body.offsetHeight;
        handleScroll();
    };

    const handleScroll = ()=>{
        const curPos = window.scrollY;
        let curSection =null;

        for (const section in menuItems) {
            curSection = menuItems[section] >= curPos? section:curSection
            if(curSection !== section){
                break
            }
        }
        if(curSection !== activeItem){
            setActiveItem(curSection)
        }
    };

    const menuList =Object.keys(menuItems).map((e,i) =>
    <MenuItem itemName={e} key={`menuitem_${i}`} active={e === activeItem ? true : false} />
    )

    return (
        <Navbar fixed={'top'} bg="dark" expand="lg" variant={'light'} className="navigation">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
                <Nav className={"ml-auto"} id={"navigationItems"}>
                    <ul>
                        {menuList}
                    </ul>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;