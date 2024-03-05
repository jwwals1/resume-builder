import { useState } from "react" 

function PersonalInfo() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    return (
        <>
        <div id='personalInfo'>
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
        </div>
            <div id="contactInfo">
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
        </div>
        </>
    )
}

export default PersonalInfo