/* eslint-disable react/prop-types */
export default function Resume({personalValues, educationValues, workValues}) {
    return (
        <>
            <div className="resume">
                <div className="personalInfo">
                <div className="nameTitle">
                    <div className="firstName">{personalValues.firstName}</div><p>&nbsp;</p>
                    <div className="lastName">{personalValues.lastName}</div>
                </div>
                    <div className="personalContent">
                        <div className="phoneNumber">{personalValues.phoneNumber}</div>
                        <div className="email">{personalValues.email}</div>
                        <div className="address">{personalValues.address}</div>
                    </div>
                </div>
                <div className="educationInfo">
                <h2 className="infoTitles">Education</h2>
                    <div>
                        <div className="resumeInputs schoolName">{educationValues.schoolName}</div><br />
                        <div className="resumeInputs schoolLocation">{educationValues.schoolLocation}</div>
                    </div>
                    <div>
                        <div className="resumeInputs degreeLevel">{educationValues.degreeLevel}</div><br />
                        <div className="resumeInputs dateGraduated">{educationValues.dateGraduated}</div>
                    </div>
                </div>
                <div className="workInfo">
                    <h2 className="infoTitles">Work History</h2>
                    <div>
                        <div className="resumeInputs jobTitle">{workValues.jobTitle}</div><br />
                        <div className="resumeInputs companyName">{workValues.companyName}</div>
                    </div>
                    <div>
                        <div className="resumeInputs workDates">{workValues.startDate} - {workValues.endDate}</div><br />
                        <div className="resumeInputs jobDetails">{workValues.jobDetails}</div>  
                    </div>
                </div>
            </div>
        </>
    )
}


