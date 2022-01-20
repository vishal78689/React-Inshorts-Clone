
import React from 'react'
import SwipeableTemporaryDrawer from './Drawer';
import './Header.css';
function Header({setcategory}) {
    return (
        <div className='nav'>
            <div className='icon'>
               <SwipeableTemporaryDrawer
                   setcategory={setcategory}
               />
            </div>
            <img className='img1'
             src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png'
             
          alt="logo"  
            />

        </div>
    )
}

export default Header
