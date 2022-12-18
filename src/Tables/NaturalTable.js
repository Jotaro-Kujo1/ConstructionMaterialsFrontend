import {Button, TextField} from "@mui/material";
import './index.css';
import Stack from "@mui/material/Stack";
import * as React from "react";
import {useState} from "react";
import {useEffect} from "react";
import {NaturalRender} from "../Renders/NaturalRender";
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import {Delete} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';


export const NaturalTable = () => {
    const[name,setName] = useState('');
    const[size,setSize] = useState();
    const[weight,setWeight] = useState();
    const [ans, setAns] = useState([]);
    const[deleteName, setDeleteName] = useState('');
    const[findName, setFindName] = useState('');

    const query = async () => {
        let res;
        res = await fetch("http://localhost:8081/natural/getAll");
        const data = await res.json();
        setAns(data);
        console.log(ans);
    }

    const querySort = async () => {
        setAns([]);
        let res;
        res = await fetch("http://localhost:8081/natural/getAllSort");
        const data = await res.json();
        setAns(data);
        console.log(ans);
    }

    const deleteHandler = (name) => {
        fetch("http://localhost:8081/natural/deleteNatural/" + name, {
            method: "DELETE",
            body: name
        })
            .then((response) => {
                    console.log("DELETED");
                    console.log(response.status);
                    localStorage.setItem("flag", 3);
                    window.location.assign("http://localhost:3000/MetalTable");
                }
            )
    }

    const findHandler = async (name) => {
        setAns([]);
        let res;
        res = await fetch("http://localhost:8081/natural/getNatural/" + name);
        const data = await res.json();
        setAns(data);
        console.log(ans);
    }

    useEffect(()=>{
        query();
    },[]);


    const handleClick = () => {
        const newNatural = {name,size,weight};
        console.log(newNatural);
        fetch("http://localhost:8081/natural/saveNatural",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(newNatural)
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
                    placeholder="Size"
                    multiline
                    variant="standard"
                    value={size}
                    onChange={e => setSize(e.target.value)}
                />
                <TextField
                    id="standard-textarea"
                    placeholder="Weight"
                    multiline
                    variant="standard"
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                />

                <Button variant="contained" component="label" onClick={handleClick}>Save natural</Button>
            </Stack>
            <div className="deleteBlock">
                <Stack spacing={2} direction="row">
                    <TextField
                        id="standard-textarea"
                        placeholder="Write name"
                        multiline
                        variant="standard"
                        value={deleteName}
                        onChange={e => setDeleteName(e.target.value)}
                    />
                    <IconButton color="primary" aria-label="upload picture" component="label" className="delBtn" onClick={() => deleteHandler(deleteName)}>
                        <Delete/>
                    </IconButton>
                </Stack>
            </div>
            <div className="findBlock">
                <Stack spacing={2} direction="row">
                    <TextField
                        id="standard-textarea"
                        placeholder="Write name"
                        multiline
                        variant="standard"
                        value={findName}
                        onChange={e => setFindName(e.target.value)}
                    />
                    <Button variant="contained" component="label" onClick={() => findHandler(findName)}>Find natural by name</Button>
                </Stack>
            </div>
            <Stack spacing={2} direction = "column">
                <div className="sortArea">
                    <Stack spacing={2} direction="row">
                        <h3 className="tableNamed">Natural Table</h3>
                        <IconButton color="primary" aria-label="upload picture" component="label" className="sortBtn" onClick={querySort}>
                            <SortByAlphaIcon/>
                        </IconButton>
                    </Stack>
                </div>
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
                        defaultValue="Size"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="outlined-read-only-input"
                        defaultValue="Weight"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
            </Stack>
            <NaturalRender data={ans}/>
        </>
    );
}