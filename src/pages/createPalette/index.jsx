import React, { useEffect } from 'react'
import './main.css'
import Palette from '../../components/palette/index'
import { usePalette } from '../../hooks/usePalette'
import PaletteActions from '../../components/paletteActionsContainer'
import { useParams } from 'wouter'

function CreatePalette() {
  const { urlPalette } = useParams()
  console.log(urlPalette)
  const { palette, setPalette } = usePalette()

  useEffect(() => {
    setPalette(urlPalette.split('-'))
  }, [urlPalette])

  return (
    <section className='createPalette'>
      <Palette palette={palette} />
      <PaletteActions />
    </section>
  )
}

export default CreatePalette
