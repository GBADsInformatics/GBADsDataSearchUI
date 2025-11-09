import React, { useState } from 'react';
import axios from 'axios';

function Logs(){

    const [logs, setLogs] = useState("");

    const fetchLogsFromAPI = async () => {
        try {
          const baseUrl = "https://www.gbadske.org/api/tail/logs";
    
          const response = await axios.get(baseUrl);
    
          const data = response.data;
          // const refinedResults = refineApiResults(data);
          setLogs(data);
        //   console.log(data);
          // Call sendDataToParent to send keywords back to the parent
        } catch (error) {
          console.error('Error fetching logs:', error);
        }
      };

    fetchLogsFromAPI();

    var messages = logs.split('\n').filter(message => message.trim() !== '');
    messages = messages.reverse();

    return (
    <div>
        <h1 style={{ textAlign: "center", marginTop: "5%" }}>GBADs TAIL Logs</h1>
        <hr style={{ marginLeft: "auto", marginRight: "auto", width: "50%" }} />
        <div style={{
        display: "flex",
        alignItems: "center", // Center vertically
        flexDirection: "column",
        width: "80%", // Limit the width of the container
        margin: "auto", // Center horizontally
        }}>
        {messages.length === 0 || messages[0] === "" ? (
            <p style={{ textAlign: "center", marginBottom: "300px" }}>
            No logs yet. Make a request on <a href="https://gbadske.org/search">https://gbadske.org/search</a>
            </p>
        ) : (
            messages.map((message, index) => (
            <p
                key={index}
                style={{
                textAlign: "center",
                border: "1px solid black",
                width: "50%", // Ensure all elements have the same width
                backgroundColor: index % 2 === 0 ? "#DCDCDC" : "#F5D5A5", // Alternate colors for every two messages
                margin: "0", // Remove margin to ensure elements touch each other
                padding: "10px" // Add padding for spacing between text and border
                }}
            >
                {message}
            </p>
            ))
        )}
        </div>
    </div>
    );
}


export default Logs;