import {Button, TextField} from "@mui/material";
import './index.css';
import Stack from "@mui/material/Stack";
import * as React from "react";
import {useState} from "react";
import {useEffect} from "react";
import {ConcreteRender} from "../Renders/ConcreteRender";
import {Delete} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';


export const ConcreteTable = () => {
    const[name,setName] = useState('');
    const[density,setDensity] = useState('');
    const[color,setColor] = useState('');
    const [ans, setAns] = useState([]);
    const[deleteName, setDeleteName] = useState('');
    const[findName, setFindName] = useState('');

    const query = async () => {
        let res;
        res = await fetch("http://localhost:8081/concrete/getAll");
        const data = await res.json();
        setAns(data);
        console.log(ans);
    }

    const querySort = async () => {
        setAns([]);
        let res;
        res = await fetch("http://localhost:8081/concrete/getAllSort");
        const data = await res.json();
        setAns(data);
        console.log(ans);
    }

    const deleteHandler = (name) => {
        fetch("http://localhost:8081/concrete/deleteConcrete/" + name, {
            method: "DELETE",
            body: name
        })
            .then((response) => {
                    console.log("DELETED");
                    console.log(response.status);
                    localStorage.setItem("flag", 1);
                    window.location.assign("http://localhost:3000/MetalTable");
                }
            )
    }

    const findHandler = async (name) => {
        setAns([]);
        let res;
        res = await fetch("http://localhost:8081/concrete/getConcrete/" + name);
        const data = await res.json();
        setAns(data);
        console.log(ans);
    }

    useEffect(()=>{
        query();
    },[]);


    const handleClick = () => {
        const newConcrete = {name,density,color};
        console.log(newConcrete);
        fetch("http://localhost:8081/concrete/saveConcrete",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(newConcrete)
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
                    placeholder="Density"
                    multiline
                    variant="standard"
                    value={density}
                    onChange={e => setDensity(e.target.value)}
                />
                <TextField
                    id="standard-textarea"
                    placeholder="Color"
                    multiline
                    variant="standard"
                    value={color}
                    onChange={e => setColor(e.target.value)}
                />
                <Button variant="contained" component="label" onClick={handleClick}>Save concrete</Button>
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
                    <Button variant="contained" component="label" onClick={() => findHandler(findName)}>Find concrete by name</Button>
                </Stack>
            </div>
            <Stack spacing={2} direction = "column">
                <div className="sortArea">
                    <Stack spacing={2} direction="row">
                        <h3 className="tableNamed">Concrete Table</h3>
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
                        defaultValue="Density"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="outlined-read-only-input"
                        defaultValue="Color"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
            </Stack>
            <ConcreteRender data={ans}/>
        </>
    );
}