import { useState } from 'react'

import UpdateList from "./UpdateList";

export default function Updates() {
  const [blogs, setBlogs] = useState([{ title: "Started Project VOID Jiu Jistics Stat Converter", post: "Void is a CLI that always for faster translation of opponent stats.", link: "'https://github.com/Andrew95496/stat_converter'", id: 1 } ]);
  return (
    <UpdateList blogs={blogs} />
  )
}


{/* <div>
  <div>
    <h1 className='h1-header headers'>Updates</h1>
  </div>
  <div className='updates-wrapper'>
    <h2 className='update-headers'><span className='date'>5-10-2023: </span><i className='update-i'>Started Project VOID Jiu Jistics Stat Converter</i></h2>
    <p className='update-text'>Void is a CLI that always for faster translation of opponent stats.</p> <br />
    <a className='update-text' href='https://github.com/Andrew95496/stat_converter' target='blank'>Github</a>
  </div>
</div> */}