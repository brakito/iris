import { useContext, useEffect } from 'react'
import paletteContext from '../context/paletteContext'
import { useLocation } from "wouter"

export function usePalette() {
  const { palette, setPalette, config, setConfig } = useContext(paletteContext)
  const [location, pushLocation] = useLocation()
  
  useEffect(() => {
    let newConfig = config
    newConfig.paletteLength = palette.length > 0 ? palette.length : 5 
    setConfig(newConfig)
    console.log("Se ejecuto useEfeect en usePalette")
  }, [palette, config])

  return { palette, setPalette, config, setConfig }
}
