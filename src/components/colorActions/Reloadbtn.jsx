import { useState, useContext } from 'react'
import Icon from '../icons/index'
import paletteContext from '../../context/paletteContext'
import { generateHex } from '../../services/GenerateRandomHexColor'
import { useSetPaletteRoute } from '../../hooks/useSetPaletteRoute'

function ReloadButton({ theme, index }) {
  const [reload, setReload] = useState(false)
  const { palette } = useContext(paletteContext)
  const { setNewPalette } = useSetPaletteRoute()

  const handleReload = () => {
    try {
      let newPalette = [...palette];
      newPalette[index] = generateHex()
      console.log(newPalette)

      setNewPalette(newPalette);

      setReload(true)
      setTimeout(() => setReload(false), 1000)
    } catch (err) {
      console.error('Failed to reload color: ', err)
    }
  }

  return (
    <button
      className={'actionButton reloadButton ' + theme}
      onClick={handleReload}
    >
      {
        reload
          ? <Icon name='done' classes='actionIcon reloadIcon' />
          : <Icon name='reload' classes='actionIcon reloadIcon' />
      }
    </button>
  )
}

export default ReloadButton
