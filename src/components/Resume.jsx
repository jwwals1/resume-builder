/* eslint-disable react/prop-types */
export default function Resume({personalValues, educationValues, workValues}) {
    return (
        <>
            <div className="resume">
                <div className="personalInfo">
                <div className="nameTitle">
                    <div className="firstName" contentEditable='true' data-text="First Name" suppressContentEditableWarning={true}>{personalValues.firstName}</div><p>&nbsp;</p>
                    <div className="lastName" contentEditable='true' data-text="Last Name" suppressContentEditableWarning={true}>{personalValues.lastName}</div>
                </div>
                    <div className="personalContent">
                        <div className="phoneNumber" contentEditable='true' data-text="Phone Number" suppressContentEditableWarning={true}>{personalValues.phoneNumber}</div>
                        <div className="email" contentEditable='true' data-text="Email" suppressContentEditableWarning={true}>{personalValues.email}</div>
                        <div className="address" contentEditable='true' data-text="Address" suppressContentEditableWarning={true}>{personalValues.address}</div>
                    </div>
                </div>
                <div className="educationInfo">
                <h2 className="infoTitles">Education</h2>
                    <div>
                        <div className="resumeInputs schoolName" contentEditable='true' data-text="School Name" suppressContentEditableWarning={true}>{educationValues.schoolName}</div><br />
                        <div className="resumeInputs schoolLocation" contentEditable='true' data-text="School Location" suppressContentEditableWarning={true}>{educationValues.schoolLocation}</div>
                    </div>
                    <div>
                        <div className="resumeInputs degreeLevel" contentEditable='true' data-text="Degree Level" suppressContentEditableWarning={true}>{educationValues.degreeLevel}</div><br />
                        <div className="resumeInputs dateGraduated" contentEditable='true' data-text="Date Graduated" suppressContentEditableWarning={true}>{educationValues.dateGraduated}</div>
                    </div>
                </div>
                <div className="workInfo">
                    <h2 className="infoTitles">Work History</h2>
                    <div>
                        <div className="resumeInputs jobTitle" contentEditable='true' data-text="Job Title" suppressContentEditableWarning={true}>{workValues.jobTitle}</div><br />
                        <div className="resumeInputs companyName" contentEditable='true' data-text="Company Name" suppressContentEditableWarning={true}>{workValues.companyName}</div>
                    </div>
                    <div>
                        <div className="resumeInputs workDates" contentEditable='true' data-text="Start Date" suppressContentEditableWarning={true}>{workValues.startDate} - {workValues.endDate}</div><br />
                        <div className="resumeInputs jobDetails" contentEditable='true' data-text="Job Details" suppressContentEditableWarning={true}>{workValues.jobDetails}</div>  
                    </div>
                </div>
            </div>
        </>
    )
}


