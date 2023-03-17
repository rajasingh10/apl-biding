import React, { useState, useEffect } from 'react'
import ScreenRow from './ScreenRow';
import db from "../firebase";
import { doc, collection, query, where, onSnapshot } from "firebase/firestore";

const teamCollectionRef = collection(db, "teams");



const Screening = () => {
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



    return (
        <table>
            <thead>
                <tr>
                    <th className='tableHeading'>Team Name</th>
                    <th className='tableHeading'>Student Slot</th>
                    <th className='tableHeading'>Faculty Slot</th>
                    <th className='tableHeading'>Remaining Purse</th>
                </tr>
            </thead>
            {
                teamDetails.map((item, index) => (<ScreenRow key={index} item={item} />))
            }

        </table>
    )
}

export default Screening;