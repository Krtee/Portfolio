import React from 'react';
import '../scss/App.scss';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Main from '../jsx/Portfolio/Main';
import Header from "../jsx/Portfolio/domComponents/Header";
import Skills from "../jsx/Portfolio/domComponents/Skills";
import Timeline from "../jsx/Portfolio/domComponents/Timeline";
import Code from "../jsx/home/Code";
import '../scss/Code.scss';


function App() {
  return (
        <Code></Code>
  );
}

export default App;
