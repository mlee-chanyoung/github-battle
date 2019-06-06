import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'

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
        return (
            <div className="container">
                <Popular />
            </div>
        )
    }
}

/**
 * param 1: a React element
 * param 2: Where to render the element to
 */
ReactDOM.render(<App />, document.getElementById('app'));
