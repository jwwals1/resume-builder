// import { useState } from "react";

function EducationInfo ({educationValues, onChange}) {

    return (
        <>
        <div id='education'>
        <h1>Education</h1>
        <form id="educationForm" action="">
            <label>Name of School{' '}</label>
            <input type="text" id='schoolName' name='schoolName' onChange={onChange} value={educationValues.schoolName}/>  
            <label>Level of Degree{' '}</label>
            <input type="text" name="degreeLevel" id="degreeLevel" onChange={onChange} value={educationValues.degreeLevel}/>
            <label htmlFor="dateGraduated">Date of Graduation</label>
            <input type="text" id='dateGraduated' name='dateGraduated' onChange={onChange} value={educationValues.dateGraduated}/>
        </form>
        </div>
        </>
    )
}

export default EducationInfo