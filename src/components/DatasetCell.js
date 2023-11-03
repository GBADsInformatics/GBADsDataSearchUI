import React from "react";
// import { Container } from "react-bootstrap";
import "./styles/DatasetCell.css";

function DatasetCell(props){
    return(
        <div className="datacell-parent">
            <div className="center-point">
                <p><b>{props.title}</b></p>
            </div>

            <div className="organize-year-author">
                <div>
                    {props.startYear}-{props.endYear}
                </div>
                <span style={{marginRight: '5px', marginLeft: '5px'}}> | </span>
                <div>
                    {props.authors}
                </div>
            </div>
            {props.source}
        </div>
    );
}

export default DatasetCell;