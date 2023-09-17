import React from "react";
import "./styles/KeywordSidebar.css";

function KeywordSidebar(props){
    return(
        <div className="keyword-sidebar-parent">
            <p>Keywords</p>
            <div className="keyword-parent">
            {props.keywords.map((item, index) => (
                <div key={index} className="keyword">
                    <p>{item}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export default KeywordSidebar;