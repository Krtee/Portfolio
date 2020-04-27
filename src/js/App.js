import React from 'react';
import '../scss/App.scss';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Navigation from '../jsx/Portfolio/Main';
import Header from "../jsx/Portfolio/Header";
import Skills from "../jsx/Portfolio/Skills";
import Timeline from "../jsx/Portfolio/Timeline";
import Code from "../jsx/home/Code";
import '../scss/Code.scss';


function App() {
  return (
        <Code></Code>
  );
}

export default App;
