import React from 'react';
import { render } from 'react-dom';
import './style/index.css';

const HelloWorld = () => <div>Hello World!</div>

render( <HelloWorld />, document.getElementById("react-container"));