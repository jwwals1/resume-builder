/* eslint-disable react/prop-types */
import { useState } from "react"

function WorkInfo({workValues, onChange}) {
    const [isFormOpen, setIsFormOpen] = useState(false)

    const openForm = () => {
        setIsFormOpen(false)
    } 

    const closeForm = () => {
        setIsFormOpen(true)
    }

    if (isFormOpen) {
    return (
        <>
        <div id="workDiv">
            <button onClick={openForm} className="button">Work Information</button>
            <div id='workHistory'>
            <form action="" id="workHistoryForm">
                <div>
                    <label className="workLabel">Job Title:</label><br />
                    <input type="text" id='jobTitle' name='jobTitle' onChange={onChange} value={workValues.jobTitle}/> 
                </div>
                <div>
                    <label className="workLabel">Name of Company:</label><br />
                    <input type="text" id='companyName' name='companyName' onChange={onChange} value={workValues.companyName}/> 
                </div>
                <div>
                    <label className="workLabel">Job Details:</label><br />
                    <input type="text" id='jobDetails' name='jobDetails' onChange={onChange} value={workValues.jobDetails}/> 
                </div>
                <div>
                    <label className="workLabel">Start Date:</label><br />
                    <input type="text" id='startDate' name='startDate' onChange={onChange} value={workValues.startDate}/> 
                </div>
                <div>
                    <label className="workLabel">End Date:</label><br />
                    <input type="text" id='endDate' name='endDate'onChange={onChange} value={workValues.endDate}/> 
                </div>
            </form>
            </div>
        </div>
        </>
    )} else {
        return (
            <div id="workDiv">
                <button onClick={closeForm} className="button">Work Information</button>
            </div>
            )
    }
}

export default WorkInfo