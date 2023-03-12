import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function FullWidthTextField() {
    return (
        <Box
            sx={{
                width: 700,
                maxWidth: '100%',
            }}
        >
            <div style={{ display: "flex" }}>
                <TextField fullWidth label="" id="fullWidth" size='small' placeholder='Find Cars, Mobile Phones and more...' />
                <IconButton aria-label="delete">
                    <SearchIcon />
                </IconButton>
            </div>
        </Box>
    );
}