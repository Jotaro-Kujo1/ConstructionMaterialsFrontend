import {TextField} from "@mui/material";
import * as React from "react";
import './index.css';

export const MetalRender = (props) => {
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
                defaultValue={record["hardness"]}
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                id="outlined-read-only-input"
                defaultValue={record["meltingTemperature"]}
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                id="outlined-read-only-input"
                defaultValue={record["electricalConductivity"]}
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
                    defaultValue={records["hardness"]}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-read-only-input"
                    defaultValue={records["meltingTemperature"]}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-read-only-input"
                    defaultValue={records["electricalConductivity"]}
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