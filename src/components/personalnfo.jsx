// import { useState } from "react" 

export default function PersonalInfo({personalValues, onChange}) {

    return (
        <>
        <div id='personalInfo'>
            <h1>Personal Information</h1>
            <form id="personalInfoForm" action="" > 
                <label>First Name:{' '}
                <input type="text" id="firstName" name="firstName" onChange={onChange} value={personalValues.firstName}/>
                </label>
                <label>Last Name: {' '}</label>
                <input type="text" id='lastName' name='lastName' onChange={onChange} value={personalValues.lastName}/>
                <label>Phone Number: {' '}</label>
                <input type="number" id='phoneNumber' name='phoneNumber' onChange={onChange} value={personalValues.phoneNumber}/>
                <label>Email: {' '}</label>
                <input type="email" id='email' name='email' onChange={onChange} value={personalValues.email}/>
                <label>Address: {' '}</label>
                <input type="text" id='address' name='address'onChange={onChange} value={personalValues.address}/>
            </form>
        </div>
        </>
    )
}
