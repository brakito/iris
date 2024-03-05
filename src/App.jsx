import './App.css'
import { PaletteContextProvider } from './context/paletteContext'
import { Redirect, Route, Switch } from 'wouter'
import CreatePalette from './pages/createPalette/index'
import StartPage from './pages/startPage'
import SideMenu from './components/sideMenu/menu'
/* "./node_modules/standard/eslintrc.json" */

function App() {
  return (
    <PaletteContextProvider>
      <div className='App'>
        <SideMenu />

        <Switch>
          <Route
            component={StartPage}
            path='/'
          />

          <Route
            component={CreatePalette}
            path='/:urlPalette'
          />
        </Switch>

      </div>
    </PaletteContextProvider>
  )
}
export default App
