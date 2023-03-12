import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { createAd } from "../../Config/Firebase";
import { useNavigate } from "react-router-dom";
import { uploadImage } from "../../Config/Firebase"
import Header from "../../Components/Header";
import AppBanner from "../../Components/AppBanner"
import Footer from "../../Components/Footer"
import "./style.css"

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

function CreateAd() {
    const [formData, setFormData] = useState({})
    // console.log(formData)

    const handleclick = async () => {
        const res = await uploadImage(formData.image)
        console.log("Image Return ", res)
        createAd(formData, res)
        navigate("/createad")
    }

    const navigate = useNavigate()
    return (
        <>
            <Header />

            <div className="create-ad">
                <div className="wraper">
                    <div className="login-welcome">
                        <h3>Post an Ad</h3>
                    </div>
                    <div className="loginForm">
                        <TextField
                            sx={{ m: 1 }}
                            fullWidth id="outlined-size-small"
                            size="small" label="Title" variant="outlined"
                            onChange={(event) => setFormData({ ...formData, title: event.target.value })}
                        />
                        <TextField
                            sx={{ m: 1 }}
                            fullWidth id="outlined-size-small"
                            size="small" label="Descryption" variant="outlined"
                            onChange={(event) => setFormData({ ...formData, descryption: event.target.value })}
                        />
                        <TextField
                            sx={{ m: 1 }}
                            fullWidth id="outlined-size-small"
                            size="small" label="Price" variant="outlined"
                            onChange={(event) => setFormData({ ...formData, price: event.target.value })}
                        />
                        <Button
                            variant="outlined"
                            component="label"
                            sx={{ m: 1 }}
                            size="small"
                            fullWidth
                        >
                            Upload File
                            <input
                                type="file"
                                onChange={(event) => setFormData({ ...formData, image: event.target.files })}
                            // hidden
                            />
                        </Button>
                        {/* <Button >Submit Image</Button> */}
                        <Button
                            sx={{ m: 1, width: '100%' }}
                            variant="contained"
                            size="medium"
                            onClick={handleclick}
                        >
                            Post Ad
                        </Button>
                    </div>
                </div>
            </div>

            <AppBanner />
            <Footer />
        </>
    )
}

export default CreateAd