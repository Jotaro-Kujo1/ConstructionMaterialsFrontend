import {Button, TextField} from "@mui/material";
import react from 'react';
import './index.css';
import Stack from "@mui/material/Stack";
import * as React from "react";
import {useState} from "react";
import {useEffect} from "react";
import {MetalRender} from "../Renders/MetalRender";


export const MetalTable = () => {
    const[name,setName] = useState('');
    const[hardness,setHardness] = useState('');
    const[meltingTemperature,setMeltingTemperature] = useState('');
    const[electricalConductivity,setElectricalConductivity] = useState('');
    const [ans, setAns] = useState([]);

    const query = async () => {
        let res;
        res = await fetch("http://localhost:8081/metal/getAll");
        const data = await res.json();
        setAns(data);
        console.log(ans);
        //localStorage.setItem("posts", JSON.stringify(data));
    }

    useEffect(()=>{
        query();
    },[]);

    const handleClick = () => {
        const newMetal = {name,hardness,meltingTemperature,electricalConductivity};
        console.log(newMetal);
        fetch("http://localhost:8081/metal/saveMetal",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(newMetal)
            }
        ).then((response) => {
            query();
        })
    }

    return(
        <>
            <Stack spacing={5} direction="row" className="stack">
                <TextField
                    id="standard-textarea"
                    placeholder="Name"
                    multiline
                    variant="standard"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <TextField
                    id="standard-textarea"
                    placeholder="Hardness"
                    multiline
                    variant="standard"
                    value={hardness}
                    onChange={e => setHardness(e.target.value)}
                />
                <TextField
                    id="standard-textarea"
                    placeholder="Melting temperature"
                    multiline
                    variant="standard"
                    value={meltingTemperature}
                    onChange={e => setMeltingTemperature(e.target.value)}
                />
                <TextField
                    id="standard-textarea"
                    placeholder="Electrical conductivity"
                    multiline
                    variant="standard"
                    value={electricalConductivity}
                    onChange={e => setElectricalConductivity(e.target.value)}
                />
                <Button variant="contained" component="label" onClick={handleClick}>Save metal</Button>
            </Stack>
            <div className="tableName">
                <TextField
                id="outlined-read-only-input"
                defaultValue="Id"
                InputProps={{
                readOnly: true,
                    }}
                />
                <TextField
                id="outlined-read-only-input"
                defaultValue="Name"
                InputProps={{
                readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Hardness"
                    InputProps={{
                    readOnly: true,
                }}
                />
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Melting temperature"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Electrical conductivity"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </div>
            <MetalRender data={ans}/>
    </>
    );
}