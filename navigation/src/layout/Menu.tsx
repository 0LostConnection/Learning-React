import "./Menu.css"
import React from "react"

interface Props { }

export default function Menu(props: Props) {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Sobre</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}