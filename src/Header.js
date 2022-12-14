import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Menu, MenuItem} from "@mui/material";
import {Route, Router} from "react-router-dom";
import ConcreteTable from "./Tables/ConcreteTable";
import MetalTable from "./Tables/MetalTable";
import {NaturalTable} from "./Tables/NaturalTable";
import {SolutionTable} from "./Tables/SolutionTable";
import {ThermalInsulationTable} from "./Tables/ThermalInsulationTable";
import {useEffect} from "react";




function appBarLabel(label: string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handeFlagTo1 = () => {
        localStorage.setItem("flag", 1);
        window.location.reload();
    }

    const handeFlagTo2 = () => {
        localStorage.setItem("flag", 2);
        window.location.reload();
    }

    const handeFlagTo3 = () => {
        localStorage.setItem("flag", 3);
        window.location.reload();
    }

    const handeFlagTo4 = () => {
        localStorage.setItem("flag", 4);
        window.location.reload();
    }

    const handeFlagTo5 = () => {
        localStorage.setItem("flag", 5);
        window.location.reload();
    }

    return (
        <>
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                <MenuIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => {
                    handeFlagTo1()
                }}>Concrete</MenuItem>
                <MenuItem onClick={() => {
                    handeFlagTo2()
                }}>Metal</MenuItem>
                <MenuItem onClick={() => {
                    handeFlagTo3()
                }}>Natural</MenuItem>
                <MenuItem onClick={() => {
                    handeFlagTo4()
                }}>Solution</MenuItem>
                <MenuItem onClick={() => {
                    handeFlagTo5()
                }}>Thermal insulation</MenuItem>
            </Menu>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                {label}
            </Typography>
        </Toolbar>
    </>
    );
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});


export default function Header() {
    useEffect(() => {
        localStorage.setItem("flag", 1);
    },[]);
    return (
        <>
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static" color="primary">
                    {appBarLabel('Developed by Lebedev Vadim')}
                </AppBar>
            </ThemeProvider>
        </Stack>
            {localStorage.getItem("flag") == 1 &&<ConcreteTable/>}
            {localStorage.getItem("flag") == 2 &&<MetalTable/>}
        </>
    );
}