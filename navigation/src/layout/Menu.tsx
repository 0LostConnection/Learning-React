import "./Menu.css"
import React from "react"
import { Link } from "react-router-dom"

interface Props { }

export default function Menu(props: Props) {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/param/id1"}>Param #01</Link>
                    </li>
                    <li>
                        <Link to={"/param/id2"}>Param #02</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>Sobre</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}