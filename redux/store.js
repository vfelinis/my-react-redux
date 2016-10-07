import {createStore} from 'redux'
import reducer from './reducer'

let initialState = {
	text: 'Hello World!'
}

export default function configureStore(initialState){
	return createStore(reducer, initialState)
}