import React from "react";
import "./DetectorTable.css"

const DetectorTable = ({ serverChoosed, getDetectors, detectors }) => {

    const deleteDetector = (id) => {
        fetch("/api/user/detector/" + id, {
            method: "DELETE"
        })
            .then(res => {
                if (res.status === 200)
                    getDetectors();
            });
    }

    // display the table
    const displayTable = () => {
        if (serverChoosed && detectors) {
            return (
                <table className="detector-table">
                    <thead>
                        <tr>
                            <th>Is Mutli</th>
                            <th>Word</th>
                            <th>Probability</th>
                            <th>Response Type</th>
                            <th>Response</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            detectors.map((detector) => {
                                return (
                                    <tr key={detector.id}>
                                        <td>{detector.isMulti}</td>
                                        <td>{detector.word}</td>
                                        <td>{detector.probability}</td>
                                        <td>{detector.responseType}</td>
                                        <td>{detector.response}</td>
                                        <td><button onClick={() => deleteDetector(detector.id)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
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