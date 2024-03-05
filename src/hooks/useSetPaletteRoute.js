import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'

export function useSetPaletteRoute () {
    const [location, pushLocation] = useLocation()
    const [palette, setNewPalette] = useState([])
    
    useEffect(() => {
      if (palette.length > 0) {
        console.log("Hablo desde el hook useSetPaletteRoute", palette)
        pushLocation(`/p/${palette.join('-')}`)
      }
    }, [palette])

    return { location, setNewPalette }
}