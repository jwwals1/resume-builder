/* eslint-disable react/prop-types */
export default function Resume({personalValues, educationValues, workValues}) {
    return (
        <>
            <div className="container">
                <div className="personalInfo">
                    <div className="firstName">{personalValues.firstName}</div>
                    <div className="lastName">{personalValues.lastName}</div>
                    <div className="phoneNumber">{personalValues.phoneNumber}</div>
                    <div className="email">{personalValues.email}</div>
                    <div className="address">{personalValues.address}</div>
                </div>
                <div className="educationInfo">
                    <div className="schoolName">{educationValues.schoolName}</div>
                    <div className="degreeLevel">{educationValues.degreeLevel}</div>
                    <div className="dateGraduated">{educationValues.dateGraduated}</div>
                </div>
                <div className="workInfo">
                    <div className="jobTitle">{workValues.jobTitle}</div>
                    <div className="companyName">{workValues.companyName}</div>
                    <div className="jobDetails">{workValues.jobDetails}</div>
                    <div className="startDate">{workValues.startDate}</div>
                    <div className="endDate">{workValues.endDate}</div>
                </div>
            </div>
        </>
    )
}



// import { useState } from "react"


// function Resume() {
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [phoneNumber, setPhoneNumber] = useState('')
    // const [email, setEmail] = useState('')
    // const [address, setAddress] = useState('')

    // const [schoolName, setSchoolName] = useState('')
    // const [degreeLevel, setDegreeLevel] = useState('')
    // const [graduationDate, setGraduationDate] = useState('')

    // const [jobTitle, setJobTitle] = useState('')
    // const [companyName, setCompanyName] = useState('')
    // const [jobDetails, setJobDetails] = useState('')
    // const [startDate, setStartDate] = useState('')
    // const [endDate, setEndDate] = useState('')


    // return (
    // <div id="container">
    //     <div id="sideBar">
        {/* <div id='personalInfo'>
        <h1>Personal Information</h1>
        <form id="personalInfoForm" action="" > 
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' name='firstName' onChange={(event) => setFirstName(event.target.value)}/>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' name='lastName' onChange={(event) => setLastName(event.target.value)}/>
            <label htmlFor="phone">Phone Number</label>
            <input type="number" id='phone' name='phone' onChange={(event) => setPhoneNumber(event.target.value)}/>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' onChange={(event) => setEmail(event.target.value)}/>
            <label htmlFor="address">Address</label>
            <input type="text" id='address' name='address'onChange={(event) => setAddress(event.target.value)}/>
        </form>
        </div> */}
        {/* <div id='education'>
        <h1>Education</h1>
        <form id="educationForm" action="">
            <label htmlFor="schoolName">Name of School</label>
            <input type="text" id='schoolName' name='schoolName' onChange={(event) => setSchoolName(event.target.value)}/>  
            <label htmlFor="degreeLevel">Level of Degree</label>
            <input type="text" name="degreeLevel" id="degreeLevel" onChange={(event) => setDegreeLevel(event.target.value)} />
            <label htmlFor="dateGraduated">Date of Graduation</label>
            <input type="text" id='dateGraduated' name='dateGraduated' onChange={(event) => setGraduationDate(event.target.value)}/>
        </form>
        </div> */}
        {/* <div id='workHistory'>
        <form action="" id="workHistoryForm">
        <h1>Work History</h1>
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" id='jobTitle' name='jobTitle' onChange={(event) => setJobTitle(event.target.value)}/> 
            <label htmlFor="companyName">Name of Company</label>
            <input type="text" id='companyName' name='companyName' onChange={(event) => setCompanyName(event.target.value)}/> 
            <label htmlFor="jobDetails">Job Details</label>
            <input type="text" id='jobDetails' name='jobDetails' onChange={(event) => setJobDetails(event.target.value)}/> 
            <label htmlFor="startDate">Start Date</label>
            <input type="text" id='startDate' name='startDate' onChange={(event) => setStartDate(event.target.value)}/> 
            <label htmlFor="endDate">End Date</label>
            <input type="text" id='endDate' name='endDate'onChange={(event) => setEndDate(event.target.value)}/> 
        </form>
        </div> */}
        // </div>
        // <div id="resume">
            {/* <div id="contactInfo">
                <h2>Contact Information</h2>
                <label htmlFor="firstNameValue"></label>
                <input type="text" name="firstNameValue" id="firstNameValue" value={firstName} placeholder="First Name"/>
                <label htmlFor="lastNameValue"></label>
                <input type="text"  name="lastNameValue" id="lastNameValue" value={lastName} placeholder="Last Name"/>
                <label htmlFor="phoneNumberValue"></label>
                <input type="number" name="phoneNumberValue" id="phoneNumberValue" value={phoneNumber} placeholder="Phone Number"/>
                <label htmlFor="emailValue"></label>
                <input type="email" name="emailValue"  id="emailValue" value={email} placeholder="Email"/>
                <label htmlFor="addressValue"></label>
                <input type="text" name="addressValue" id="addressValue" value={address} placeholder="Address"/>
            </div> */}
            {/* <div id="educationInfor">
                <h2>Education</h2>
                <label htmlFor="schoolNameValue"></label>
                <input type="text" value={schoolName} name="schoolNameValue" id="schoolNameValue" placeholder="School Name"/>
                <label htmlFor="degreeLevelValue"></label>
                <input type="text"  value={degreeLevel} name="degreeLevelValue" id="degreeLevelValue" placeholder="Level of Degree"/>
                <label htmlFor="graduationDateVaule"></label>
                <input type="text" value={graduationDate} name="graduationDateVaule" id="graduationDateVaule" placeholder="Date of Graduation"/>
            </div> */}
            {/* <div id="workHistoryInfo">
                <h2>Work Information</h2>
                <label htmlFor="jobTitleValue"></label>
                <input type="text" value={jobTitle} name="jobTitleValue" id="jobTitleValue" placeholder="Job Title"/>
                <label htmlFor="companyValue"></label>
                <input type="text" value={companyName} name="companyValue" id="companyValue" placeholder="Company Name"/>
                <label htmlFor="jobDetailsValue"></label>
                <input type="text" value={jobDetails} name="jobDetailsValue" id="jobDetailsValue" placeholder="Job Details"/>
                <label htmlFor="startDateValue"></label>
                <input type="text" value={startDate} name="startDateValue" id="startDateValue" placeholder="Start Date"/>
                <label htmlFor="endDateValue"></label>
                <input type="text" value={endDate} name="endDateValue" id="endDateValue" placeholder="End Date"/>
            </div> */}
//         </div>
//         </div>
//     )
//     }
// export default Resume
