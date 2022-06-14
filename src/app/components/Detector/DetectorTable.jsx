import React from "react";
import "./DetectorTable.css"

const DetectorTable = ({ serverChoosed }) => {

    // display the table
    const displayTable = () => {
        if (serverChoosed) {
            return (
                <p>the server have been chosed</p>
            )
        } else {
            return (
                <p>You have to chose a server</p>
            )
        }
    }

    // render component
    return (
        <div className="detector-table">
            <h1>detector-table</h1>
            {displayTable()}
        </div>
    )
}

export default DetectorTable;