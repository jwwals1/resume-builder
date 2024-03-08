/* eslint-disable react/prop-types */


function EducationInfo ({educationValues, onChange}) {

    return (
        <>
        <h1>Education</h1>
        <div id='education'>
        <form id="educationForm" action="">
            <div>
                <label className="educationLabel">Name of School:{' '}</label><br />
                <input type="text" id='schoolName' name='schoolName' onChange={onChange} value={educationValues.schoolName}/>
            </div>
            <div>
                <label className="educationLabel">Level of Degree:{' '}</label><br />
                <input type="text" name="degreeLevel" id="degreeLevel" onChange={onChange} value={educationValues.degreeLevel}/>
            </div>
            <div>
                <label className="educationLabel">Date of Graduation:{' '}</label><br />
                <input type="text" id='dateGraduated' name='dateGraduated' onChange={onChange} value={educationValues.dateGraduated}/>
            </div>
        </form>
        </div>
        </>
    )
}

export default EducationInfo