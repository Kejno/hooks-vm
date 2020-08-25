import React, { useContext, useState, useReducer } from 'react'

export const AlertContext = React.createContext()
// export const AlertToggleContext = React.createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}

// export const useAlertToggle = () => {
//     return useContext(AlertToggleContext)
// }

const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

const reducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT: return { ...state, visible: true, text: action.text }
        case HIDE_ALERT: return { ...state, visible: false }
        default: return false
    }
}

export const AlertProvider = ({ children }) => {
    // const [alert, setAlert] = useState(false)
    // const toggle = () => setAlert(prev => !prev)

    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: ''
    })

    const show = (text) => dispatch({ type: 'show', text })
    const hide = () => dispatch({ type: 'hide' })

    return (
        <AlertContext.Provider value={{
            visible: state.visible,
            // toggle
            show,
            hide,
            text: state.text
        }}>

            {children}
        </AlertContext.Provider>
    )
}