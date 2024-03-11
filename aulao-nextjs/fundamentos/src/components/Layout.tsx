import styles from '@/styles/Layout.module.css'
import Link from "next/link"
import React, { PropsWithChildren } from "react"

interface Props extends PropsWithChildren { }

export default function Layout(props: Props) {
    return (
        <div className={styles.layout}>
            <div className={styles._header}>
                <Link href="/">Voltar</Link>
            </div>
            
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}