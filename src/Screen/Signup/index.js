import React from "react";
import { useState } from "react"
import { signUp } from "../../Config/Firebase"
import { uploadImage } from "../../Config/Firebase"
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';


function Signup() {
    const [formData, setFormData] = useState({})
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const navigate = useNavigate()

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    // console.log(formData)

    const handleclick = async () => {
        const profilePic = await uploadImage(formData.image)
        const result = await signUp(formData, profilePic)
        console.log("result", result)
        if (result.error) {
            swal("Error!", result.message, "error");
        } else {
            swal("Success!", result.message, "success");
        }
    }
    return (
        <>

            <div className="login">
                <div className="wraper">
                    <div><img src="https://firebasestorage.googleapis.com/v0/b/olx-react-e935c.appspot.com/o/images%2Folx-logo-dark.png?alt=media&token=07d6c0ae-5bb0-45f7-815c-5bed335cdf37" alt="This is an img"/></div>
                    <div className="login-welcome">
                        <p>The trusted community of <br />buyers and sellers.</p>
                    </div>
                    <div className="loginForm">
                        <TextField
                            sx={{ m: 1 }}
                            fullWidth id="outlined-size-small"
                            size="small"
                            label="Name"
                            variant="outlined"
                            onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                        />
                        
                        <TextField
                            sx={{ m: 1 }}
                            fullWidth id="outlined-size-small"
                            size="small"
                            label="Email"
                            variant="outlined"
                            onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                        />

                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                size="small"
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <Button
                            variant="outlined"
                            component="label"
                            sx={{ m: 1 }}
                            size="small"
                            fullWidth
                        >
                            Upload Picture
                            <input
                                type="file"
                                onChange={(event) => setFormData({ ...formData, image: event.target.files })}
                            // hidden
                            />
                        </Button>
                        <Button
                        sx={{ m: 1, width: '100%' }}
                        variant="contained"
                        size="medium"
                        onClick={handleclick}>
                            Sign Up
                        </Button>
                    </div>
                    <div className="signup-text">
                        <p>Already have an account?
                            <p className="signup-text-p" onClick={() => navigate("/login")}>Go To Login Page</p>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup