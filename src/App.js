import React, { useReducer, createContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/home/HomePage'
import ClipPage from './pages/clip/ClipPage'
import clipReducer from './flux/reducers/ClipReducer'
import './App.scss'

export const ClipContext = createContext()

const App = () => {
  const [state, dispatch] = useReducer(clipReducer, { clipArticles: [] })

  return (
    // 子コンポーネントでWebクリップ用のstateとdispatchを共有できるように設定
    <ClipContext.Provider value={{ clipState: state, clipDispatch: dispatch }}>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/clip' component={ClipPage} />
        </Switch>
      </div>
    </ClipContext.Provider>
  )
}

export default App
