import React from "react"

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import "./style.css"

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container flex">
                    <div className="footer-links">
                        <h3>POPULAR CATEGORIES</h3>
                        <ul>
                            <li><a href="" >Cars</a></li>
                            <li><a href="" >Flats for rent</a></li>
                            <li><a href="" >Mobile Phones</a></li>
                            <li><a href="" >Jobs</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h3>TRENDING SEARCHES</h3>
                        <ul>
                            <li><a href="" >Bikes</a></li>
                            <li><a href="" >Watches</a></li>
                            <li><a href="" >Books</a></li>
                            <li><a href="" >Dogs</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h3>ABOUT US</h3>
                        <ul>
                            <li><a href="" >About EMPG</a></li>
                            <li><a href="" >OLX Blog</a></li>
                            <li><a href="" >Contact US</a></li>
                            <li><a href="" >OLX for Businesses</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h3>OLX</h3>
                        <ul>
                            <li><a href="" >Help</a></li>
                            <li><a href="" >Sitemap</a></li>
                            <li><a href="" >Terms of use</a></li>
                            <li><a href="" >Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-follow">
                        <h3>FOLLOW US</h3>
                        <a href="" id="social-icon"><FacebookOutlinedIcon /></a>
                        <a href="" id="social-icon"><TwitterIcon /></a>
                        <a href="" id="social-icon"><InstagramIcon /></a>
                        <div className='store-img'>
                            <a href='#'><img src='https://firebasestorage.googleapis.com/v0/b/olx-react-e935c.appspot.com/o/images%2Fapple-appstore.svg?alt=media&token=2e3daef7-271c-4f2b-8a9c-977b04cda818' /></a>
                            <a href='#'><img src='https://firebasestorage.googleapis.com/v0/b/olx-react-e935c.appspot.com/o/images%2Fgoogle-appstore.svg?alt=media&token=3a211d04-dd51-477d-a114-81251fd7ec18' /></a>
                            <a href='#'><img src='https://firebasestorage.googleapis.com/v0/b/olx-react-e935c.appspot.com/o/images%2Fhuawie-appstore.svg?alt=media&token=e6155ce5-47d8-4a9a-ae09-c4cea7492d69' /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
            <div className="container">
                <p>Free Classifieds in Pakistan . © 2006-2022 OLX</p>
            </div>
            </div>
        </>
    )
}

export default Footer