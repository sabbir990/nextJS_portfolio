"use client"

import React, { createContext, useState } from 'react'

export const StateContext = createContext(null)

export default function StateProvider({children}) {
    const [pathName, setPathName] = useState('/');
    const stateObject = {
        pathName,
        setPathName
    }
  return (
    <StateContext.Provider value={stateObject}>
        {
            children
        }
    </StateContext.Provider>
  )
}
