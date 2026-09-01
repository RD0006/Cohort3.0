import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './context/MyContext.jsx'

createRoot(document.getElementById('root')).render(<ContextProvider><App /></ContextProvider>)

// ContextAPI - higher order functional component

// 2 things in context
// 1. Consumer - createContext()
// 2. Provider - contextProvider = ({children}) => {return <Consumer.Provider>{children}</Consumer.Provider>}

// useEffect hook - used for handling side effects - controls side effects
// component life cycle - creation phase -> updation -> unmounting (destruction) phase

// Phase-1: component mounting phase - component enters render tree
// Phase-2: updation phase - updating - re-render
// Phase-3: unmounting phase - deleted - removed from render tree

// need to control side-effects of components --- useEffect hook
// useEffect - 2 parameters - callback, dependency array
// if blank array - once
// [count] - whenever count updates
// unmounting phase - handles / tackles unmounting phase - when component is leaving render tree --- only use when component leaks some memory and if you want to track any updates 