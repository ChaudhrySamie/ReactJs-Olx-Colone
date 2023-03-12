import { useState, useEffect } from "react"
import React from "react"
import { getCurrentUserData } from "../../Config/Firebase"
import Header from "../../Components/Header"
import AppBanner from "../../Components/AppBanner"
import Footer from "../../Components/Footer"

import "./style.css"

function MyProfile() {
    const [userData, setUserData] = useState({})

    const callApi = async () => {
        const result = await getCurrentUserData()
        console.log("Result====>", result)
        setUserData(result)
        console.log(userData)
    }

    // callApi()
    useEffect(() => {
        callApi()
    }, []);
    
    return (
        <>
            <Header />
            <div className="Profile-Section">
                <div className="wrapper">
                    <h1 >User Profile</h1>
                    <br/>
                    <img src={userData.profilePic} alt="this is an img"/>
                    <br/><br/>
                    <h1>Hii {userData.name} !</h1>
                    <h2>Email: {userData.email}</h2>
                </div>
            </div>

            <AppBanner />
            <Footer />
        </>
    )
}

export default MyProfile