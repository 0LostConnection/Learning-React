import "./Menu.css"
import React from "react"
import { Link } from "react-router-dom"

interface Props { }

export default function Menu(props: Props) {
    return (
        <aside className="Menu">
            <div>
                <h1>Navegação</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/param/id1"}>
                            <span>Param #01</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/param/id2"}>
                            <span>Param #02</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/about"}>
                            <span>Sobre</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}