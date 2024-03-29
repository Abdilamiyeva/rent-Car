import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer className='footer'> 
        <div className="container">
            <div className="footerTop">
                <div className="footerLeft">
                    <div className="logo">
                        <h2>MORENT</h2>
                    </div>
                    <p className='text'>Our vision is to provide convenience and help increase your sales business.</p>

                </div>
                <div className="footerRight">
                    <div className="footerRight__link ">
                    <ul className='footerItem'>
                        <h2>About</h2>
                        <li><a href="#">How it works</a></li>
                        <li><a href="#">Featured</a></li>
                        <li><a href="#">Partnership</a></li>
                        <li><a href="#">Bussiness Relation</a></li>
                    </ul>
                    <ul className='footerItem'>
                        <h2>Community</h2>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Podcast</a></li>
                        <li><a href="#"> Invite a friend</a></li>
                    </ul>
                    </div>
                    <ul className='footerItem'>
                        <h2>Socials</h2>
                        <li><a href="#">Socials</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Facebook</a></li>
                    </ul>
                </div>
            </div>
            <div className='hr' />
            <div className="footerBootom">
                <p>©2022 MORENT. All rights reserved</p>
                <div className='footerBottomRight d-flex gap-60'>
                    <p className='text1'>Privacy & Policy</p>
                    <p>Terms & Condition</p>
                </div>
            </div>
        </div>


    </footer>
  )
}

export default Footer