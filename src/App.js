import generateStore from "./redux/store"
import { Provider } from 'react-redux'
import "./App.scss"

function App() {

    const store = generateStore()

    return (
        <Provider store={store}>
            <h1>React + Webpack + SASS</h1>
            <p>Mi primer proyecto de React con Webpack</p>
        </Provider>
    )
}

export default App