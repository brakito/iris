import './App.css'
import { PaletteContextProvider } from './context/paletteContext'
import { Route, Switch } from 'wouter'
import CreatePalette from './pages/createPalette/index'
import StartPage from './pages/startPage'
import SideMenu from './components/sideMenu/menu'
import ErrorPage from './pages/errorPage'
/* "./node_modules/standard/eslintrc.json" */

function App() {
  return (
    <PaletteContextProvider>
      <div className='App'>
        {/* <SideMenu /> */}

        <Switch>
          <Route component={StartPage} path='/' />
          <Route component={StartPage} path='/p' />
          <Route component={CreatePalette} path='/p/:urlPalette' />
          <Route component={ErrorPage} />
        </Switch>

      </div>
    </PaletteContextProvider>
  )
}
export default App
