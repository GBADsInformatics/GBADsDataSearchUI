import React from "react";
import { Container } from "react-bootstrap";
import "./styles/DatasetCell.css";

function DatasetCell(props){
    return(
        <div className="datacell-parent">
            <div className="center-point">
                <p className="dataset-header">Title: </p>
                <p>{props.title}</p>
            </div>
            <div className="center-point">
                <p className="dataset-header">Authors: </p>
                <p>{props.authors}</p>
            </div>
            <div className="center-point">
                <p className="dataset-header">Source: </p>
                <p>{props.source}</p>
            </div>
            <div className="center-point">
                <p className="dataset-header">Year(s): </p>
                <p>{props.startYear} - {props.endYear}</p>
            </div>
        </div>
    );
}

export default DatasetCell;