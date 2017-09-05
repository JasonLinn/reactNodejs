import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk';

/**
 * Class
 */
import App from './components/App'
import reducers from './reducers'

/**
 * Const
 */
const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
    <Provider store={store}><App /></Provider>, // provider讓包在裡面的class擁有store
    document.querySelector('#root')
)
