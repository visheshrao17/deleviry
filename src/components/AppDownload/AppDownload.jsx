import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br />Tomato App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} onClick={()=>{alert("Sorry for inconvience our app available soon.......")}} alt="Play Store" />
                <img src={assets.app_store} onClick={()=>{alert("Sorry for inconvience our app available soon.......")}}alt="" />
            </div>
        </div>
    )
}

export default AppDownload
