import React from 'react'
import PropsExampleComponent from './PropsExampleComponent'

function Header() {
    return(
        <header>
            <h1>This is a H1 header</h1>
            <PropsExampleComponent name="myname" />
        </header>
    )
}

export default Header