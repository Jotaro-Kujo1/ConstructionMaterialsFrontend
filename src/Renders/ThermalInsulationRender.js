import {TextField} from "@mui/material";
import * as React from "react";
import './index.css';

export const ThermalInsulationRender = (props) => {
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
                        defaultValue={record["thermalConductivity"]}
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
                        defaultValue={record["porosity"]}
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
                    defaultValue={records["thermalConductivity"]}
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
                    defaultValue={records["porosity"]}
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