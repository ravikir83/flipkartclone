import { createStore } from 'redux'
import rootReducer from '../reducers'

const store = createStore((state={name:'Ravi'},action)=>{
    return state
})

export default store
