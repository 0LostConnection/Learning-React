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
                        <Link to="/">
                            <span>Inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/useState">
                            <span>useState()</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/useEffect">
                            <span>useEffect()</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/useRef">
                            <span>useRef()</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/useMemo">
                            <span>useMemo()</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/useCallback">
                            <span>useCallback()</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/useContext">
                            <span>useContext()</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/useReducer">
                            <span>useReducer()</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/useCustom">
                            <span>useMyHook()</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}