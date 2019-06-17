import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'
import Battle from './components/Battle'
import {ThemeProvider} from "./contexts/theme"
import Nav from "./components/Nav"

/**
 * Component has:
 *  - State
 *  - Lifecycle
 *  - UI
 */
class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            theme: "light",
            toggleTheme: () => (
                this.setState(({theme}) => ({
                    theme: theme === "light"
                        ? "dark"
                        : "light"
                }))
            )
        }
    }
    render()
    {
        return (
            <ThemeProvider value={this.state}>
                <div className={this.state.theme}>
                    <div className="container">
                        <Nav />
                        <Popular />
                    </div>
                </div>
            </ThemeProvider>
        )
    }
}

/**
 * param 1: a React element
 * param 2: Where to render the element to
 */
ReactDOM.render(<App />, document.getElementById('app'));
