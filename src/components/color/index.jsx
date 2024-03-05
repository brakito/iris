import React from 'react'
import './main.css'
import { isDarkness } from '../../services/VerifyColorIsDarkness'
import ColorActionsBar from '../colorToolBar/index'
import { hexToCMYK, hexToHSL, hexToRGB } from '../../services/changeColorMode'

function Color ({ color, index }) {
  const theme = isDarkness(color) ? 'isLigth' : 'isDark'
  const ColorStatus = ''
  
  const HSL = hexToHSL(color)
  const CMYK = hexToCMYK(color)
  const RGB = hexToRGB(color)

  const colorStyle = {
    background: '#' + color,
  }

  return (
    <div className={'color ' + theme} style={colorStyle}>
      <span className='span'>{ColorStatus}</span>
      <ColorActionsBar color={color} theme={theme} index={index}/>
      <div className='tagContainer'>
        <h2 className='tag'>#{color}</h2>
        <p>RGB: {`${RGB.r}, ${RGB.g}, ${RGB.g}`}</p>
        <p>CMYK: {`${CMYK.c}, ${CMYK.m}, ${CMYK.y}, ${CMYK.k}`}</p>
        <p>HSL: {`${HSL.h}, ${HSL.s}, ${HSL.l}`}</p>
      </div>
    </div>
  )
}

export default Color
