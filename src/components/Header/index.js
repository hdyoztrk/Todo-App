import React from 'react'
import TodoForm from './Todoform/index.js'

function Header() {
    return (
        <header className="header">
            <h1>TODOS</h1>
           <TodoForm/>
        </header>
    )
}

export default Header