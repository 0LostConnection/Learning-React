import React from "react"

interface Props {
    inc: Function
}

function UseCallbackButtons(props: Props) {
    console.log('render...')
    return (
        <div>
            <button className="btn"
                onClick={() => props.inc(6)}>+6</button>
            <button className="btn"
                onClick={() => props.inc(12)}>+12</button>
            <button className="btn"
                onClick={() => props.inc(18)}>+18</button>
        </div>
    )
}

//export default UseCallbackButtons
export default React.memo(UseCallbackButtons)