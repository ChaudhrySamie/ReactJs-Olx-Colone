import React from "react"
import { auth, getAllAds } from "../../Config/Firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { Container } from "@mui/system"


import Button from '@mui/material/Button';
import "./style.css"

import CountrySelect from "../CountrySelect"
import FullWidthTextField from "../SearchInput"
import ProfileIcon from "../ProfileIcon";


export default function Header() {

    const navigate = useNavigate()
    return (
        <>
            {/* Header Top Bar */}
            <div className="nav-top">
                <div className="container">
                    <div className="flex">
                        <div className="olx-logo">
                            <a href="" onClick={() => navigate("/dashboard")}><img src="https://firebasestorage.googleapis.com/v0/b/olx-react-e935c.appspot.com/o/images%2Folx-logo.png?alt=media&token=8a68ef0f-d8bd-40f8-bce7-5629b88a54b5" /></a>
                        </div>
                        <div className="link-top">
                            <a href="" >Motor</a>
                            <a href="" >Property</a>
                        </div>
                    </div>
                </div>

                {/* Action Nav Bar */}

                <div className="action-nav">
                    <div className="container">
                        <div className="flex">
                            <div className="olx-logo2">
                            <a href="" onClick={() => navigate("/dashboard")}><img src="https://firebasestorage.googleapis.com/v0/b/olx-react-e935c.appspot.com/o/images%2Folx-logo-dark.png?alt=media&token=07d6c0ae-5bb0-45f7-815c-5bed335cdf37" /></a>
                            </div>
                            <div className="country-field">
                                <CountrySelect />
                            </div>
                            <div className="serch-input">
                                <FullWidthTextField />
                            </div>
                            
                            <div className="btn-sell">
                                <button onClick={() => navigate("/createad")}>Sell</button>
                            </div>
                            <div><ProfileIcon /></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header Category Bar */}
            <div className="category-nav">
                <div className="container flex">
                    <div className="all-category"><Button variant="outlined" size="medium">all categories</Button></div>
                    <div className="main-category">
                        <Button href="#text-buttons">Mobile Phones</Button>
                        <Button href="#text-buttons">Cars</Button>
                        <Button href="#text-buttons">Motorcycles</Button>
                        <Button href="#text-buttons">House</Button>
                        <Button href="#text-buttons">TV-Audio-Video</Button>
                        <Button href="#text-buttons">Tablets</Button>
                        <Button href="#text-buttons">Land & Plots</Button>

                    </div>
                </div>
            </div>




        </>
    )
}