import React from 'react'
import './layout.css'
function Footer() {
    return (
        <div className='footer'>
            <div className='leftFooter'>
                <h4>Download App</h4    >
                <p>Download App For IOS And Android</p>
                <img src="https://www.pikpng.com/pngl/b/238-2388525_download-button-transparent-clipart-app-store-download-buttons.png" alt="PlayStore" />
            </div>
            <div className='midFooter'>
                <h1>Ecommerce</h1>
                <p>High Quality is our first priority</p>
                <p>Copyrights 2022 &copy; Hanzala Irfan</p>
            </div>
            <div className='rightFooter'>
                <h4>Follow Us</h4>
                <a href="https://www.instagram.com/hanzala_irfan/">Instagram</a>
                <a href="https://www.facebook.com/hanzala.irfan.9/">Facebook</a>
                <a href="https://www.youtube.com/channel/UCBFM0NFWfYgE7RMtR7-kEjA">Youtube</a>
            </div>
        </div>
    )
}

export default Footer

