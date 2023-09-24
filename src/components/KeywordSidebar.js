import React from "react";
import "./styles/KeywordSidebar.css";

function KeywordSidebar(props){
    const keywords = props.keywords;

    if (keywords!=undefined){
        if (keywords.length == 0 || keywords[0] == ""){
            return(
                <div className="keyword-sidebar-parent">
                    <p><b><u>Keywords</u></b></p>
                    <p>Enhance the query for improved results!</p>
                </div>
            );
        }
        return(
            <div className="keyword-sidebar-parent">
                <p><b><u>Keywords</u></b></p>
                <div className="keyword-parent">
                    {keywords.map((item, index) => (
                        <div key={index} className="keyword">
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    else{
        <div className="keyword-sidebar-parent">
            <p><b><u>Keywords</u></b></p>
            <p>Enhance the query for improved results!</p>
        </div>
    }
}

export default KeywordSidebar;