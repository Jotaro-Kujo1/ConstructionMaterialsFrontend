import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Menu, MenuItem} from "@mui/material";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ConcreteTable} from "./Tables/ConcreteTable";
import {MetalTable} from "./Tables/MetalTable";
import {NaturalTable} from "./Tables/NaturalTable";
import {SolutionTable} from "./Tables/SolutionTable";
import {ThermalInsulationTable} from "./Tables/ThermalInsulationTable";



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

    return (
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
                    window.location.assign('http://localhost:3000/concreteTable');
                }}>Concrete</MenuItem>
                <MenuItem onClick={() => {
                    window.location.assign('http://localhost:3000/metalTable');
                }}>Metal</MenuItem>
                <MenuItem onClick={() => {
                    window.location.assign('http://localhost:3000/naturalTable');
                }}>Natural</MenuItem>
                <MenuItem onClick={() => {
                    window.location.assign('http://localhost:3000/solutionTable');
                }}>Solution</MenuItem>
                <MenuItem onClick={() => {
                    window.location.assign('http://localhost:3000/thermalInsulation');
                }}>Thermal insulation</MenuItem>
            </Menu>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                {label}
            </Typography>
            <Router>
                <Routes>
                    <Route path="/concreteTable" element={<ConcreteTable/>}/>
                    <Route path="/metalTable" element={<MetalTable/>}/>
                    <Route path="/naturalTable" element={<NaturalTable/>}/>
                    <Route path="/solutionTable" element={<SolutionTable/>}/>
                    <Route path="/thermalInsulation" element={<ThermalInsulationTable/>}/>
                </Routes>
            </Router>
        </Toolbar>
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
    return (
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static" color="primary">
                    {appBarLabel('Developed by Lebedev Vadim')}
                </AppBar>
            </ThemeProvider>
        </Stack>
    );
}