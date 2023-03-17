import React, { useState, useEffect } from "react";
import './Table.css';
import db from "../firebase";
import { updateDoc, doc } from "firebase/firestore";




const Button = ({ name, val, id }) => {
    const docRef = doc(db, "teams", id);

    const [value, setValue] = useState(val);

    const increaseValue = () => {
        if (value < 20) {
            setValue(count => count + 1)
        }
    }

    const decreaseValue = () => {
        if (value > 0) {
            setValue(count => count - 1)
        }
    }

    useEffect(() => {
        updateTeam();

        console.log("button")
    }, [value])

    const updateTeam = async () => {
        if (name === "student") {
            await updateDoc(docRef, {
                studentSlot: value
            });
        }
        else {
            await updateDoc(docRef, {
                facultySlot: value
            });
        }

    }

    return (
        <form>
            <div class="value-button" id="decrease" onClick={decreaseValue} value="Decrease Value">-</div>
            <input type="number" id="number" value={value} />
            <div class="value-button" id="increase" onClick={increaseValue} value="Increase Value">+</div>
        </form>
    )
}

export default Button;