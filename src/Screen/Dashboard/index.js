import React, { useState, useEffect } from "react";
import { auth, getAllAds } from "../../Config/Firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import "./style.css"
import Header from "../../Components/Header";
import CardAd from "../../Components/CardAd";
import AppBanner from "../../Components/AppBanner";
import Footer from "../../Components/Footer";
import AdSlider from "../../Components/AdSlider";


// const logOut = () => {
//     signOut(auth).then(() => {
//         // Sign-out successful.
//         console.log("Signed Out")
//     }).catch((error) => {
//         // An error happened.
//         console.log("Signed Out Error", error)
//     });
// }

function Dashboard() {
    const navigate = useNavigate()
    const [allAds, setAllAds] = useState()

    const callApi = async () => {
        const result = await getAllAds()
        setAllAds(result.data)
    }

    // callApi()
    useEffect(() => {
        callApi()
    }, [])


    if (!allAds) {
        return (
            <Box sx={{ display: 'flex',height:"100vh", alignItems: "center", justifyContent:"center" }}>
                <CircularProgress />
            </Box>
        )
    }

    return (
        <>

            <Header />
            <AdSlider />
            <div className="card-section">
                {
                    allAds?.map((item, index) => {
                        return (
                            <>
                                <div key={index}
                                    onClick={() => navigate(`/productDetails/${item.docId}`)}
                                >
                                    <CardAd
                                        image={item.image}
                                        title={item.title}
                                        price={item.price}
                                        descryption={item.descryption}
                                    />
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <AppBanner />
            <Footer />
        </>
    )
}

export default Dashboard