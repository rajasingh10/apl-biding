import React, { useState, useEffect } from "react";
import "./Table.css";
import Row from "./Row";
import db from "../firebase";
import { doc, collection, query, where, onSnapshot } from "firebase/firestore";

const teamCollectionRef = collection(db, "teams");



const Table = () => {
    const [teamDetails, setTeamDetails] = useState([]);

    useEffect(() => {
        const q = query(teamCollectionRef)
        const unsub = onSnapshot(q, (data) => {
            console.log("Data", data.docs.map(d => d.data()));
            setTeamDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        });
        return () => {
            unsub()
        }
    }, []);

    // const getTeams = async () => {
    //     const data = await getDocs(teamCollectionRef);

    //     setTeamDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    // }

    return (
        <table>
            <thead>
                <tr>
                    <th>Team Name</th>
                    <th>Student Slot</th>
                    <th>Faculty Slot</th>
                    <th>Remaining Purse</th>
                </tr>
            </thead>
            {
                teamDetails.map((item, index) => (<Row key={index} item={item} />))
            }

        </table>
    )
}

export default Table;