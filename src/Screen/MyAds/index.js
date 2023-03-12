import React from "react"
import { useState, useEffect } from "react";
import { getCurrentUserAds } from "../../Config/Firebase"

import Header from "../../Components/Header";
import AdSlider from "../../Components/AdSlider"
import CardAd from "../../Components/CardAd";
import AppBanner from "../../Components/AppBanner";
import Footer from "../../Components/Footer";

function MyAds() {
    const [allAds, setAllAds] = useState()

    const callApi = async () => {
        const result = await getCurrentUserAds()
        setAllAds(result.data)
    }

    // callApi()
    useEffect(() => {
        callApi()
    }, [])
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
                                // onClick={() => navigate(`/productDetails/${item.docId}`)}
                                >
                                    <CardAd
                                        title={item.title}
                                        price={item.price}
                                        descryption={item.descryption}
                                        image={item.image}
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

export default MyAds