import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import styled from "styled-components";

const BackGround=styled.div`
background-color: lightblue;

`
ReactDOM.render(
  <React.StrictMode>
    <BackGround>
    <App />
    </BackGround>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
