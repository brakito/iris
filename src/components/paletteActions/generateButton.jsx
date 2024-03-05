import { useContext } from 'react'
import './main.css'
import { generataPalette } from '../../services/GenerateRandomHexColor'
import { useLocation } from 'wouter'
import paletteContext from '../../context/paletteContext'

function GenerateButton() {
  const { config } = useContext(paletteContext)
  const [location, pushLocation] = useLocation()

  const handleClick = () => {
    const parsedPalette = generataPalette(config).join("-")
    pushLocation(`/p/${parsedPalette}`)
  }

  return (
    <button
      className='generateBtn'
      onClick={handleClick}
      id='generateButton'
    >
      <span>New Palette</span>
    </button>
  )
}

export default GenerateButton
