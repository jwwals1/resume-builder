function SideBar() {
    return (
        <div id="sideBar">
        <div id='personalInfo'>
        <h1>Personal Information</h1>
        <form id="personalInfoForm" action="">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id='firstName' name='firstName'/>
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
      )
}

export default SideBar