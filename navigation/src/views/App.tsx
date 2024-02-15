import Content from '../layout/Content'
import Menu from '../layout/Menu'
import './App.css'
import React from "react"

interface Props { }

export default function App(props: Props) {
    return (
        <div className="App">
            <Menu />
            <Content />
        </div>
    )
}