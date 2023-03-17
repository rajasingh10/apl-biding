import React, { useState, useEffect } from "react";
import "./Table.css";
import Button from "./Button";
import db from "../firebase";
import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";

const teamCollectionRef = collection(db, "teams");



const Row = ({ item }) => {
    const [purse, setPurse] = useState(item.purse);
    const [minus, setMinus] = useState();
    const [plus, setPlus] = useState();
    const docRef = doc(db, "teams", item.id);



    const getData = async () => {
        const data = await getDoc(docRef);
        setPurse(item.purse);
        // console.log(data.data());
    }
    const updatePurse = async (msg) => {
        if (msg == "minus") {
            let difference = purse - minus;
            if (difference >= 0) {
                setPurse(purse - minus)
            } else {
                alert("Insufficient purse balance.")
            }

            await updateDoc(docRef, {
                purse: purse - minus
            });
        }
        else if (msg == "plus") {
            setPurse(parseInt(purse) + parseInt(plus))
            await updateDoc(docRef, {
                purse: parseInt(purse) + parseInt(plus)
            });
        }

    }
    const handleMinus = () => {
        if (minus.length > 0) {
            updatePurse("minus");
        }
    }
    const handlePlus = () => {
        if (plus.length > 0) {
            updatePurse("plus");
        }

    }






    return (
        <tbody>
            <tr>
                <td>{item.name}</td>
                <td><Button name="student" val={item.studentSlot} id={item.id} /></td>
                <td><Button name="faculty" val={item.facultySlot} id={item.id} /></td>
                <td >{purse}
                    <div className="buttons">
                        <div className="button">
                            <input type="Number" value={minus} onChange={(e) => { setMinus(e.target.value) }} />
                            <button onClick={handleMinus}>-</button>
                        </div>
                        <div className="button">
                            <input type="Number" value={plus} onChange={(e) => { setPlus(e.target.value) }} />
                            <button onClick={handlePlus}>+</button>
                        </div>
                    </div></td>
            </tr>
        </tbody>
    )
}

export default Row;