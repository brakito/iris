import React, { useEffect } from 'react'
import './main.css'
import Palette from '../../components/palette/index'
import { usePalette } from '../../hooks/usePalette'
import PaletteActions from '../../components/paletteActionsContainer'
import { useParams, useLocation } from 'wouter'

function CreatePalette() {
  const [ location ] = useLocation()
  const { palette, setPalette } = usePalette()
  const { urlPalette } = useParams()

  console.log({
    declaracion: location !== `/p/${palette.join('-')}`,
    location,
    miRuta: `/p/${palette.join('-')}`
  })
  
  useEffect(() => {
    const readedPalette = urlPalette.split('-')
    console.log("Se acaba de establecer una nueva paleta desde useEffect de pagina create palette", readedPalette)
    setPalette(readedPalette)
  }, [location])

  return (
    <section className='createPalette'>
      <Palette palette={palette} />
      <PaletteActions />
    </section>
  )
}

export default CreatePalette
