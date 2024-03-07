function WorkInfo({workValues, onChange}) {

    return (
        <>
        <div id='workHistory'>
        <form action="" id="workHistoryForm">
        <h1>Work History</h1>
            <label >Job Title{' '}</label>
            <input type="text" id='jobTitle' name='jobTitle' onChange={onChange} value={workValues.jobTitle}/> 
            <label>Name of Company{' '}</label>
            <input type="text" id='companyName' name='companyName' onChange={onChange} value={workValues.companyName}/> 
            <label>Job Details{' '}</label>
            <input type="text" id='jobDetails' name='jobDetails' onChange={onChange} value={workValues.jobDetails}/> 
            <label>Start Date{' '}</label>
            <input type="text" id='startDate' name='startDate' onChange={onChange} value={workValues.startDate}/> 
            <label>End Date{' '}</label>
            <input type="text" id='endDate' name='endDate'onChange={onChange} value={workValues.endDate}/> 
        </form>
        </div>
        </>
    )
}

export default WorkInfo