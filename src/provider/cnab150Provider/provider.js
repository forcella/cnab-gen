import * as React from 'react'

import cnab150Reducer from "./reducer"

const Cnab150StateContext = React.createContext()
const Cbnab150DispatchContext = React.createContext()

function Cnab150Provider({ children }) {
    const [state, dispatch] = React.useReducer(cnab150Reducer, { registros: [] })
    return (
        <Cnab150StateContext.Provider value={state}>
            <Cbnab150DispatchContext.Provider value={dispatch}>
                {children}
            </Cbnab150DispatchContext.Provider>
        </Cnab150StateContext.Provider>
    )
}

function useCnab150State() {
    const context = React.useContext(Cnab150StateContext)
    if (context === undefined) {
        throw new Error('useCountState must be used within a CountProvider')
    }
    return context
}
function useCbnab150Dispatch() {
    const context = React.useContext(Cbnab150DispatchContext)
    if (context === undefined) {
        throw new Error('useCountDispatch must be used within a CountProvider')
    }
    return context
}


function useCbnab150Context() {
    return [useCnab150State(), useCbnab150Dispatch()]
}

export { Cnab150Provider, useCbnab150Context }