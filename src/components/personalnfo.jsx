/* eslint-disable react/prop-types */
import { useState } from "react"

export default function PersonalInfo({personalValues, onChange}) {
    const [isFormOpen, setIsFormOpen] = useState(false)

    const openForm = () => {
        setIsFormOpen(false)
    } 

    const closeForm = () => {
        setIsFormOpen(true)
    }

    if(!isFormOpen) {
    return (
        <>
        <div id="personDiv">
            <button onClick={closeForm} className="button">Personal Information</button>
            <div id='personalInfo'>
                <form id="personalInfoForm" action=""> 
                    <div>
                        <label className="personalLabel">First Name:{' '}</label><br />
                        <input type="text" id="firstName" name="firstName" onChange={onChange} value={personalValues.firstName}/>
                    </div>
                    <div>
                        <label className="personalLabel">Last Name: {' '}</label><br />
                        <input type="text" id='lastName' name='lastName' onChange={onChange} value={personalValues.lastName}/>
                    </div>
                    <div>
                        <label className="personalLabel">Phone Number: {' '}</label><br />
                        <input type="number" id='phoneNumber' name='phoneNumber' onChange={onChange} value={personalValues.phoneNumber}/>
                    </div>
                    <div>
                        <label className="personalLabel">Email: {' '}</label><br />
                        <input type="email" id='email' name='email' onChange={onChange} value={personalValues.email}/>
                    </div>
                    <div>
                        <label className="personalLabel">Address: {' '}</label><br />
                        <input type="text" id='address' name='address'onChange={onChange} value={personalValues.address}/>
                    </div>
                </form>
            </div>
        </div>
        </>
    )} else {
        return (
        <div id="personDiv">
            <button onClick={openForm} className="button">Personal Information</button>
        </div>
        )
    }
}
