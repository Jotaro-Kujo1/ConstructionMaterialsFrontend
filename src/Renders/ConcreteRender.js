import {TextField} from "@mui/material";
import * as React from "react";
import './index.css';

export const ConcreteRender = (props) => {
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
                        defaultValue={record["density"]}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="outlined-read-only-input"
                        defaultValue={record["color"]}
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
                    defaultValue={records["density"]}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-read-only-input"
                    defaultValue={records["color"]}
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