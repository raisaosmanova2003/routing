import React from 'react'
import "./Error.css"
const Error = () => {
  return (
    <div className="error_body">
        <main className="bl_page404">
    <h1 className='error_h1'>Error 404. The page does not exist</h1>
    <p className='error_p'>Sorry! The page you are looking for can not be found. Perhaps the page you requested was moved or deleted. It is also possible that you made a small typo when entering the address. Go to the main page.
    </p>
    <div className="bl_page404__wrapper">
      <img src="https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/cloud_warmcasino.png?raw=true" alt="cloud_warmcasino.png"/>
      <div className="bl_page404__el1"></div>
      <div className="bl_page404__el2"></div>
      <div className="bl_page404__el3"></div>
      <a className="bl_page404__link" href="/">go home</a>
    </div>
  </main>
    </div>
  )
}

export default Error
