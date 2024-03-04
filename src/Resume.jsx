// import SideBar from "./Sidebar"
import { useState } from "react"


function Resume() {
    const [firstName, setFirstName] = useState(' ')
    return (
    <>
        <div id="sideBar">
        <div id='personalInfo'>
        <h1>Personal Information</h1>
        <form id="personalInfoForm" action="" > 
        <label htmlFor="firstName">First Name</label>
        <input type="text" id='firstName' name='firstName' onChange={(event) => setFirstName(event.target.value)}/>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id='lastName' name='lastName'/>
        <label htmlFor="phone">Phone Number</label>
        <input type="text" id='phone' name='phone'/>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' name='email'/>
        <label htmlFor="address">Address</label>
        <input type="text" id='address' name='address'/>
        </form>
        </div>
        <div id='education'>
        <h1>Education</h1>
        <form id="educationForm" action="">
        <label htmlFor="schoolName">Name of School</label>
        <input type="text" id='schoolName' name='schoolName'/>  
        <label htmlFor="degreeTitle">Title of Degree</label>
        <input type="text" id='degreeTitle' name='degreeTitle'/>
        <label htmlFor="dateGraduated">Date of Graduation</label>
        <input type="text" id='dateGraduated' name='dateGraduated'/>
        </form>
        </div>
        <div id='workHistory'>
        <form action="" id="workHistoryForm">
            <h1>Work History</h1>
        <label htmlFor="jobTitle">Job Title</label>
        <input type="text" id='jobTitle' name='jobTitle'/> 
        <label htmlFor="companyName">Name of Company</label>
        <input type="text" id='companyName' name='companyName'/> 
        <label htmlFor="jobDetails">Job Details</label>
        <input type="text" id='jobDetails' name='jobDetails'/> 
        <label htmlFor="startDate">Start Date</label>
        <input type="text" id='startDate' name='startDate'/> 
        <label htmlFor="endDate">End Date</label>
        <input type="text" id='endDate' name='endDate'/> 
        </form>
        </div>
        </div>
        <div id="resume">
            <div id="contactInfo">
                <h2>Contact Information</h2>
                <label htmlFor="firstNameResult">First Name:</label>
                <input
                    type="text"
                    value={firstName}/>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div id="educationInfor">
                <h2>Education:</h2>
                <div>School Name:</div>
                <div>Title of Graduation: </div>
                <div>Date of Graduation: </div>
            </div>
            <div id="workHistoryInfo">
                <h2>Work Information</h2>
                <div>Job Title:</div>
                <div>Job Title:</div>
                <div>Job Details:</div>
                <div>Start Date:</div>
                <div>End Date:</div>
            </div>
        </div>
        </>
    )
    }
export default Resume

// function Resume() {
//     const [personalValues, setPersonalValues] = useState({firstName: 'Joe'})
//     const personalChange =() => {
//       setPersonalValues(personalValues)
//     }
//     return (
//         <div id="resume">
//             <div id="contactInfo">
//                 <h2>Contact Information</h2>
//                 <input
//                     type="text"
//                 />
//                 <div></div>
//                 <div></div>
//                 <div></div>
//             </div>
//             <div id="educationInfor">
//                 <h2>Education:</h2>
//                 <div>School Name:</div>
//                 <div>Title of Graduation: </div>
//                 <div>Date of Graduation: </div>
//             </div>
//             <div id="workHistoryInfo">
//                 <h2>Work Information</h2>
//                 <div>Job Title:</div>
//                 <div>Job Title:</div>
//                 <div>Job Details:</div>
//                 <div>Start Date:</div>
//                 <div>End Date:</div>
//             </div>
//         </div>
//     )
// }

// export default Resume