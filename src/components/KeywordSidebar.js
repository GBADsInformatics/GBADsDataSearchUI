import React from "react";
import "./styles/KeywordSidebar.css";

function KeywordSidebar(props){
    const keywords = props.keywords;
    const countries = keywords.country;
    const species = keywords.species;
    const years = keywords.year;
    if (countries!=undefined){
        if (countries.length == 0 && species.length == 0 && years.length == 0){
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
                    {countries.map((item, index) => (
                        <div key={index} className="keyword">
                            <p>{item}</p>
                        </div>
                    ))}
                    {species.map((item, index) => (
                        <div key={index} className="keyword">
                            <p>{item}</p>
                        </div>
                    ))}
                    {years.map((item, index) => (
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