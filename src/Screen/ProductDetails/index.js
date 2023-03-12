import React, { useState, useEffect } from "react";
import { useParams } from 'react-router'
import { getAdsDetail } from "../../Config/Firebase";

import Header from "../../Components/Header"
import AppBanner from "../../Components/AppBanner"
import Footer from "../../Components/Footer"
import "./style.css"

function ProductDetails() {
    const { adId } = useParams()
    const [adDetails, setAdDetails] = useState()
    // console.log("Param ID", adId)



    const callApi = async () => {
        const result = await getAdsDetail(adId)
        console.log("Document  Get ", result)
        setTimeout(() => {
            setAdDetails(result)
        }, 1000)
    }

    
    // callApi()
    useEffect(() => {
        callApi()
    }, [])

    return (
        <>
            <Header />
            {
                adDetails ?
                    <div className="product-details">
                        <div className="container">
                            <div className="adFlex">
                                <div className="adDetails">
                                    <div className="adImage">
                                        <img src={adDetails.image} alt="this is an img" />
                                    </div>
                                    <div className="postDetail">
                                        <h1>{adDetails.title}</h1>
                                          <br/>                                
                                        <h3>Descryption:</h3>
                                        <br/>
                                        <p>{adDetails.descryption}</p>
                                    </div>
                                </div>
                                <div className="adprice">
                                    <h1>Price:</h1>
                                    <h3>{adDetails.price} pkr</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div>Loading</div>
            }

            <AppBanner />
            <Footer />
        </>
    )
}

export default ProductDetails;