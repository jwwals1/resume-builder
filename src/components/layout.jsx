import { useState } from "react";
import EducationInfo from "./educationInfo";
import PersonalInfo from "./personalnfo";
import WorkInfo from "./workInfo"

function Layout() {
    const [personalValues, setPersonalValues] = useState({firstName: '', lastName: '', phoneNumber:'', email: '', address: ''})
    function changePersonal () {
        setPersonalValues({...personalValues, [event.target.id]: event.target.value})
    }
    const [educationValues, setEducationValues] = useState({schoolName: '', degreeLevel: '', graduationDate:''}) 
        function changeEducation () {
            setEducationValues({...educationValues, [event.target.id]: event.target.value})
    }
    const [workValues, setWorkValues] = useState({jobTitle:'', companyName:'', jobDetails:'', startDate: '', endDate:''})
    function changeWork () {
        setWorkValues({...workValues, [event.target.id]: event.target.value})
    }

    return (
        <>
        <div id="layout">
            <PersonalInfo
                personalValues={personalValues} onChange={changePersonal}/>
            <EducationInfo 
                educationValues={educationValues} onChange={changeEducation}/>
            <WorkInfo 
                workValues={workValues} onChange={changeWork}/>
        </div>
        </>
    )
}

export default Layout