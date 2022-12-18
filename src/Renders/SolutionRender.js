import {TextField} from "@mui/material";
import * as React from "react";
import './index.css';

export const SolutionRender = (props) => {
    var records = props.data;
    let elements = null;
    elements = Array.isArray(records) ? records.map(record =>
            <>
                <div className="oneRecordRender">
                    <TextField
                        id="outlined-read-only-input"
                        defaultValue={record["id"]}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="outlined-read-only-input"
                        defaultValue={record["name"]}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="outlined-read-only-input"
                        defaultValue={record["mobility"]}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="outlined-read-only-input"
                        defaultValue={record["solidificationRate"]}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="outlined-read-only-input"
                        defaultValue={record["waterRetention"]}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
            </>
        ) :
        <>
            <div className="oneRecordRender">
                <TextField
                    id="outlined-read-only-input"
                    defaultValue={records["id"]}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-read-only-input"
                    defaultValue={records["name"]}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-read-only-input"
                    defaultValue={records["mobility"]}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-read-only-input"
                    defaultValue={records["solidificationRate"]}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-read-only-input"
                    defaultValue={records["waterRetention"]}
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </div>
        </>

    return(
        <>
            {elements}
        </>
    );
}