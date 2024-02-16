import "./App.css"
import React from "react"
import { BrowserRouter } from "react-router-dom"

import Content from '../components/layout/Content'
import Menu from '../components/layout/Menu'

interface Props { }

export default function App(props: Props) {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu/>
                <Content/>
            </BrowserRouter>
        </div>
    )
}