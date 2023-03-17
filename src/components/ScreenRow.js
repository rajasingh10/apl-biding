import React from "react";


const ScreenRow = ({ item }) => {
    console.log(item)
    return (
        <tbody>
            <tr>
                <td className="tHeading"><img src={item.logo} alt="" width="50px" height="50px" /> <h2>{item.name}</h2></td>
                <td className="rowText"><h2>{item.studentSlot}</h2></td>
                <td className="rowText"><h2>{item.facultySlot}</h2></td>
                <td className="rowText"><h2>{item.purse}</h2></td>
            </tr>
        </tbody>
    )
}

export default ScreenRow;