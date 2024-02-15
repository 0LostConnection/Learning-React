import "./Content.css"
import React from "react"
import { Routes, Route } from "react-router-dom"

import Home from "../examples/Home"
import About from "../examples/About"
import Param from "../examples/Param"
import NotFound from "../examples/NotFound"

interface Props { }

export default function Content(props: Props) {
    return (
        <main className="Content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/about" element={<About />} />
                <Route path="/param/:id" element={<Param />} />
            </Routes>
        </main>
    )
}