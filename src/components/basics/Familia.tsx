import React from 'react'

interface Parameters {
    surname: string
    children: any
}

export default function Familia(params: Parameters) {
    return (
        <>
            {/* {
                React.Children.map(params.children, child => {
                    return React.cloneElement(child, params)
                })
            } */}
            {
                params.children.map((child, i) => {
                    return React.cloneElement(child, { ...params, key: i })
                })
            }
        </>
    )
}