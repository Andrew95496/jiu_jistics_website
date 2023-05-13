import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'

export default function Socials() {
  return (
    <div>
        <h1 className='h1-header headers'>Socials</h1>
        <div className='socials'>
          <a href="https://github.com/Andrew95496/stat_converter" target='blank'><FontAwesomeIcon icon={faGithub} bounce size="2xl" style={{ color: "#9950cd", }} /></a>
        <a href="https://discord.gg/jNpxBtdadw" target='blank'><FontAwesomeIcon icon={faDiscord} bounce size="2xl" style={{ color: "#7b84e0", }} /></a>
        </div>
    </div>
  )
}
