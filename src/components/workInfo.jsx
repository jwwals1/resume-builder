import { useState } from "react";

function WorkInfo() {
    const [jobTitle, setJobTitle] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [jobDetails, setJobDetails] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    return (
        <>
        <div id='workHistory'>
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
        </div>
        <div id="workHistoryInfo">
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
            </div>
        </>
    )
}

export default WorkInfo