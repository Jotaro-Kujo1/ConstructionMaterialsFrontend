import {Button, TextField} from "@mui/material";
import './index.css';
import Stack from "@mui/material/Stack";
import * as React from "react";
import {useState} from "react";
import {useEffect} from "react";
import {SolutionRender} from "../Renders/SolutionRender";
import {Delete} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';


export const SolutionTable = () => {
    const[name,setName] = useState('');
    const[mobility,setMobility] = useState('');
    const[solidificationRate,setSolidificationRate] = useState('');
    const[waterRetention,setWaterRetention] = useState('');
    const [ans, setAns] = useState([]);
    const[deleteName, setDeleteName] = useState('');
    const[findName, setFindName] = useState('');

    const query = async () => {
        let res;
        res = await fetch("http://localhost:8081/solution/getAll");
        const data = await res.json();
        setAns(data);
        console.log(ans);
    }

    const querySort = async () => {
        setAns([]);
        let res;
        res = await fetch("http://localhost:8081/solution/getAllSort");
        const data = await res.json();
        setAns(data);
        console.log(ans);
    }

    const deleteHandler = (name) => {
        fetch("http://localhost:8081/solution/deleteSolution/" + name, {
            method: "DELETE",
            body: name
        })
            .then((response) => {
                    console.log("DELETED");
                    console.log(response.status);
                    localStorage.setItem("flag", 4);
                    window.location.assign("http://localhost:3000/MetalTable");
                }
            )
    }

    const findHandler = async (name) => {
        setAns([]);
        let res;
        res = await fetch("http://localhost:8081/solution/getSolution/" + name);
        const data = await res.json();
        setAns(data);
        console.log(ans);
    }

    useEffect(()=>{
        query();
    },[]);


    const handleClick = () => {
        const newSolution = {name,mobility,solidificationRate,waterRetention};
        console.log(newSolution);
        fetch("http://localhost:8081/solution/saveSolution",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(newSolution)
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
                    placeholder="Mobility"
                    multiline
                    variant="standard"
                    value={mobility}
                    onChange={e => setMobility(e.target.value)}
                />
                <TextField
                    id="standard-textarea"
                    placeholder="Solidification rate"
                    multiline
                    variant="standard"
                    value={solidificationRate}
                    onChange={e => setSolidificationRate(e.target.value)}
                />
                <TextField
                    id="standard-textarea"
                    placeholder="Water retention"
                    multiline
                    variant="standard"
                    value={waterRetention}
                    onChange={e => setWaterRetention(e.target.value)}
                />
                <Button variant="contained" component="label" onClick={handleClick}>Save solution</Button>
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
                    <Button variant="contained" component="label" onClick={() => findHandler(findName)}>Find solution by name</Button>
                </Stack>
            </div>
            <Stack spacing={2} direction = "column">
                <div className="sortArea">
                    <Stack spacing={2} direction="row">
                        <h3 className="tableNamed">Metal Table</h3>
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
                        defaultValue="Mobility"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="outlined-read-only-input"
                        defaultValue="Solidification rate"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="outlined-read-only-input"
                        defaultValue="Water retention"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
            </Stack>
            <SolutionRender data={ans}/>
        </>
    );
}