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
                    <div className="schoolName" contentEditable='true' data-text="School Name" suppressContentEditableWarning={true}>{educationValues.schoolName}</div>
                    <div className="schoolLocation" contentEditable='true' data-text="School Location" suppressContentEditableWarning={true}>{educationValues.schoolLocation}</div>
                    <div className="degreeLevel" contentEditable='true' data-text="Degree Level" suppressContentEditableWarning={true}>{educationValues.degreeLevel}</div>
                    <div className="dateGraduated" contentEditable='true' data-text="Date Graduated" suppressContentEditableWarning={true}>{educationValues.dateGraduated}</div>
                </div>
                <div className="workInfo">
                    <h2 className="infoTitles">Work History</h2>
                    <div className="jobTitle" contentEditable='true' data-text="Job Title" suppressContentEditableWarning={true}>{workValues.jobTitle}</div>
                    <div className="companyName" contentEditable='true' data-text="Company Name" suppressContentEditableWarning={true}>{workValues.companyName}</div>
                    <div className="jobDetails" contentEditable='true' data-text="Job Details" suppressContentEditableWarning={true}>{workValues.jobDetails}</div>
                    <div className="startDate" contentEditable='true' data-text="Start Date" suppressContentEditableWarning={true}>{workValues.startDate}</div>
                    <div className="endDate" contentEditable='true' data-text="End Date" suppressContentEditableWarning={true}>{workValues.endDate}</div>
                </div>
            </div>
        </>
    )
}


