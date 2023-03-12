import React from 'react'

import "./style.css"

function AppBanner() {
    return (
        <>
            <div className='app-banner'>
                <div className='container flex'>
                    <div><img src='https://firebasestorage.googleapis.com/v0/b/olx-react-e935c.appspot.com/o/images%2Fapp-banner-image.webp?alt=media&token=10ee3c84-9f09-4e42-9f3d-a7d9938513bc' /></div>
                    <div className='app-text'>
                        <h2>TRY THE OLX APP</h2>
                        <p>Buy, sell and find just about anything using<br /> the app on your mobile.</p>
                    </div>
                    <div className='app-stores'>
                        <h3>GET YOUR APP TODAY</h3>
                        <div className='store-img'>
                            <a href='#'><img src='https://firebasestorage.googleapis.com/v0/b/olx-react-e935c.appspot.com/o/images%2Fapple-appstore.svg?alt=media&token=2e3daef7-271c-4f2b-8a9c-977b04cda818' /></a>
                            <a href='#'><img src='https://firebasestorage.googleapis.com/v0/b/olx-react-e935c.appspot.com/o/images%2Fgoogle-appstore.svg?alt=media&token=3a211d04-dd51-477d-a114-81251fd7ec18' /></a>
                            <a href='#'><img src='https://firebasestorage.googleapis.com/v0/b/olx-react-e935c.appspot.com/o/images%2Fhuawie-appstore.svg?alt=media&token=e6155ce5-47d8-4a9a-ae09-c4cea7492d69' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppBanner