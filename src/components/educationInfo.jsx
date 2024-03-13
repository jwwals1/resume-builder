/* eslint-disable react/prop-types */
import { useState } from "react"

function EducationInfo ({educationValues, onChange}) {
    const [isFormOpen, setIsFormOpen] = useState(false)

    const openForm = () => {
        setIsFormOpen(false)
    } 

    const closeForm = () => {
        setIsFormOpen(true)
    }
    if(isFormOpen) {
    return (
        <>
        <div id="educationDiv">
        <button onClick={openForm} className="button">Education Information</button>
            <div id='education'>
            <form id="educationForm" action="">
                <div>
                    <label className="educationLabel">Name of School:</label><br />
                    <input type="text" id='schoolName' name='schoolName' onChange={onChange} value={educationValues.schoolName}/>
                </div>
                <div>
                    <label className="educationLabel">Location:</label><br />
                    <input type="text" id="schoolLocation" name="schoolLocation" onChange={onChange} value={educationValues.schoolLocation}/>
                </div>
                <div>
                    <label className="educationLabel">Type of Degree:</label><br />
                    <input type="text" name="degreeLevel" id="degreeLevel" onChange={onChange} value={educationValues.degreeLevel}/>
                </div>
                <div>
                    <label className="educationLabel">Date of Graduation:</label><br />
                    <input type="text" id='dateGraduated' name='dateGraduated' onChange={onChange} value={educationValues.dateGraduated}/>
                </div>
            </form>
            </div>
        </div>
        </>
    )
    } else {
        return (
            <>
            <div id="educationDiv">
                <button onClick={closeForm} className="button">Education Information</button>
            </div>
            </>
    )}
}

export default EducationInfo