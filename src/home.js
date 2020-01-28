import React from "react";
import ReactDOM from "react-dom";
import './styles/App1.scss'
import Header from "./components/Header/index.jsx";
import MyRouter from "./router";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <div>
        <BrowserRouter>
            <Header/>
            <MyRouter/>
        </BrowserRouter>
    </div>,
    document.querySelector("body")
)
