import { useState } from 'react'
import './App.css'
import Body from './Components/Body'
import Header from './Components/Header'
import { Provider } from 'react-redux'
import store from './store'

function App() {

  return (
    <> 
    <Provider store={store}>
  <Body/>
  </Provider>
  </>)

}

export default App
