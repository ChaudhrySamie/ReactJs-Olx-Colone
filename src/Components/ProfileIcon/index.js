import React from "react"

import { auth } from "../../Config/Firebase"
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { getCurrentUserData } from "../../Config/Firebase"

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ProfileIcon() {
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
    }, [])

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate()

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src={userData.profilePic} />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    <MenuItem onClick={() => navigate("/myprofile")}>
                        <Typography textAlign="center"  >Profile</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => navigate("/myads")} >
                        <Typography textAlign="center"  >My Ads</Typography>
                    </MenuItem>
                    <MenuItem onClick={async () => {
                        // props.setUserData()
                        await signOut(auth)
                        navigate('/login')
                    }}>
                        <Typography textAlign="center"

                        >Logout</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        </>
    )
}

export default ProfileIcon