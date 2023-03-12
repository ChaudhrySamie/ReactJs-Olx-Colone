import React from "react"
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase"

import Login from "../Screen/Login";
import Signup from "../Screen/Signup";
import Dashboard from "../Screen/Dashboard";
import CreateAd from "../Screen/CreateAd"
import ProductDetails from "../Screen/ProductDetails";
import MyAds from "../Screen/MyAds";
import MyProfile from "../Screen/MyProfile";

function Router() {
    const [user, setUser] = useState()
    const [screen, setScreen] = useState(false)

    //Screen Change function
    const changeScreen = (change) => {
        setScreen(!screen)
    }

    useEffect(() => {
        return (
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.uid;
                    setUser(user)
                } else {
                    setUser()
                }
            })
        )
    }, [])

    const protectedAuthRoute = (component) => {
        if (user) {
            return <Dashboard />
        }
        else {
            return component
        }
    }

    const protectedRoute = (component) => {
        if (!user) {
            return <Login />
        }
        else {
            return component
        }
    }

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={protectedAuthRoute(<Login />)} />
                    <Route path="/login" element={protectedAuthRoute(<Login />)} />
                    <Route path="/signup" element={protectedAuthRoute(<Signup />)} />

                    <Route path="/dashboard" element={protectedRoute(<Dashboard />)} />
                    <Route path="/createad" element={protectedRoute(<CreateAd />)} />
                    <Route path="/myads" element={protectedRoute(<MyAds />)} />
                    <Route path="/myprofile" element={protectedRoute(<MyProfile />)} />
                    <Route path="/productDetails/:adId" element={protectedRoute(<ProductDetails />)} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router