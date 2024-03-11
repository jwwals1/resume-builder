import { useState } from "react";
import EducationInfo from "./educationInfo";
import PersonalInfo from "./personalnfo";
import WorkInfo from "./workInfo"
import Resume from "./Resume";

export default function Layout() {
    const [personalValues, setPersonalValues] = useState({firstName: '', lastName: '', phoneNumber:'', email: '', address: ''});
    function changePersonal (event) {
        setPersonalValues({ ...personalValues, [event.target.id]: event.target.value})
    }
    const [educationValues, setEducationValues] = useState({schoolName: '', schoolLocation: '', degreeLevel: '', graduationDate:''}) 
        function changeEducation (event) {
            setEducationValues({...educationValues, [event.target.id]: event.target.value})
    }
    const [workValues, setWorkValues] = useState({jobTitle:'', companyName:'', jobDetails:'', startDate: '', endDate:''})
    function changeWork (event) {
        setWorkValues({...workValues, [event.target.id]: event.target.value})
    }

    return (
        <>
        <div className="mainContainer">
            <div className="userInput">
                <h3 id="yourInfoTitle">Enter Your Information Below</h3>
                <PersonalInfo
                    personalValues={personalValues} onChange={changePersonal}/>
                <EducationInfo 
                    educationValues={educationValues} onChange={changeEducation}/>
                <WorkInfo 
                    workValues={workValues} onChange={changeWork}/>
            </div>
            <div className="resumeContainer">
                <Resume personalValues={personalValues}
                educationValues={educationValues}
                workValues={workValues}/>
            </div>
        </div>
        </>
    )
}