import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Socials() {
  return (
    <div>
        <h1 className='h1-header headers'>Socials</h1>
          <a href="https://github.com/Andrew95496/stat_converter" target='blank'><FontAwesomeIcon icon={faGithub} bounce size="2xl" style={{ color: "#9950cd", }} /></a>
    </div>
  )
}
