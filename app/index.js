import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/**
 * Component has:
 *  - State
 *  - Lifecycle
 *  - UI
 */
class App extends React.Component
{
    render()
    {
        return <div>Hello World</div>
    }
}

/**
 * param 1: a React element
 * param 2: Where to render the element to
 */
ReactDOM.render(<App />, document.getElementById('app'));
