import React from 'react'
import { useAlert } from '../alert/AlertContext'

export default function Main() {
    const { show/* toggle */ } = useAlert()
    return (
        <>
            <h1>привет в примере с Context</h1>
            <button className="btn btn-success" onClick={() => show('Этот текст из main.js')/* toggle */}>показать alert</button>
        </>
    )
}