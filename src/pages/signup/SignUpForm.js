import './SignUpForm.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "../../supabaseClient.js";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    gender: '',
    age: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    idnumber: '',
    registration_date: '',
    emergency_name: '',
    under18: 'no',
    birth_month: '',
    birth_day: '',
    birth_year: '',
    password: '',
    confirm_password: '',
    guardianName: '',
    guardianLastName: '',
    guardianEmail: '',
    guardianPhone: '',
    guardianAlternativeNumber: '',
    guardianRelationship: '',
    healthHistory: '',
    medications: '',
    insurance: '',
    insuranceID: '',
    policyHolderFirstName: '',
    policyHolderLastName: '',
    policyHolderEmail: '',
    policyHolderPhone: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match!");
      return;
    }
    
    const { error: signUpError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (signUpError) {
      console.error("Error signing up:", signUpError.message);
      alert(`Error signing up: ${signUpError.message}`);
      return;
    }

    const { error: insertError } = await supabase
      .from('usersData')
      .insert([{ 
        name: formData.name,
        last_name: formData.lastName,
        gender: formData.gender,
        age: formData.age,
        email: formData.email,
        phone: formData.phone,
        address1: formData.address1,
        address2: formData.address2,
        city: formData.city,
        province: formData.province,
        postal_code: formData.postalCode,
        idnumber: formData.idnumber,
        registration_date: formData.registration_date,
        emergency_name: formData.emergency_name,
        under18: formData.under18 === 'yes',
        // guardian_name: formData.guardianName,
        // guardian_last_name: formData.guardianLastName,
        // guardian_email: formData.guardianEmail,
        // guardian_phone: formData.guardianPhone,
        // guardian_alternative_number: formData.guardianAlternativeNumber,
        // guardian_relationship: formData.guardianRelationship,
        health_history: formData.healthHistory,
        medications: formData.medications,
        insurance: formData.insurance,
        insurance_id: formData.insuranceID,
        policy_holder_first_name: formData.policyHolderFirstName,
        policy_holder_last_name: formData.policyHolderLastName,
        policy_holder_email: formData.policyHolderEmail,
        policy_holder_phone: formData.policyHolderPhone,
      }]);

    if (insertError) {
      console.error("Error inserting user data:", insertError.message);
      alert(`Error saving user data: ${insertError.message}`);
      return;
    }

    navigate('/home');
  };

  return (
    <div className='Main_SignUp'>
      <div className='Body_SignUp'>
        <div className="Sign_Up">
          <div className="Header">Sign-Up</div>
          <div className="Intro">
            <p className="Header_1">New Patient Registration</p>
            <p className="Header_2">Welcome! Please fill in the following form.</p>
          </div>

          <h2 className="Main_Header">Registration</h2>
          <form className="SubmitDate" onSubmit={handleSubmit}>
            <div className="Dateregistration">
              <label className="Date" htmlFor="date"></label>
              <input className="Date" type="date" id="date" name="registration_date" required onChange={handleChange} />
            </div>
            <hr className="Line" />

            <h2 className="Patient_Details">Patient Details</h2>
            <div className="Patient_Details_Form">
              <div className="Patient_Box">
              <input type="text" name="name" placeholder="First Name" required value={formData.name} onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleChange} />
              <select name="gender" required value={formData.gender} onChange={handleChange}>
                <option value="" disabled hidden>Please Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input type="number" name="age" placeholder="Age" required value={formData.age} onChange={handleChange} />
              <input type="number" id="day" name="birth_day" placeholder="Birth Day" required min="1" max="31" onChange={handleChange} />
              <select name="birth_month" placeholder="Birth Month" required onChange={handleChange}>
                  <option value="" >Select Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
              
              </select>
              <input type="number" id="year" name="birth_year" placeholder="Birth Year" required min="1900" onChange={handleChange} />
              <select name="idtype" id="idtype" required>
                <option value="" disabled hidden>Select ID Type</option>
                <option value="National ID">National ID</option>
                <option value="Passport">Passport</option>
                <option value="Driver's License">Driver's License</option>
              </select>
              <input type="text" id="idnumber" name="idnumber" placeholder="ID Number/Passport" required onChange={handleChange} />
              <input type="tel" id="phone" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />
              <select name="Status" id="Status" required>
                <option value=""  >Select Marital Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
              <input type="email" id="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
              <input type="password" id="password1" name="password" placeholder="Password" required onChange={handleChange} />
              <input type="password" id="password2" name="confirm_password" placeholder="Confirm Password" required onChange={handleChange} />
            </div>
              <h3 className="Header_3">Address</h3>
              <div className="Address_Box">
                <input type="text" id="address1" name="address1" placeholder="Street Address Line 1" required onChange={handleChange} />
                <input type="text" id="address2" name="address2" placeholder="Street Address Line 2" onChange={handleChange} />
                <input type="text" id="city" name="city" placeholder="City" required onChange={handleChange} />
                <select name="province" required onChange={handleChange}>
                  <option value="" disabled hidden>Select Province</option>
                  <option value="Western Cape">Western Cape</option>
                  <option value="Gauteng">Gauteng</option>
                  <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                  <option value="Eastern Cape">Eastern Cape</option>
                  <option value="Limpopo">Limpopo</option>
                  <option value="Mpumalanga">Mpumalanga</option>
                  <option value="Northern Cape">Northern Cape</option>
                  <option value="Free State">Free State</option>
                  <option value="North West">North West</option>
                </select>
                <input type="text" id="postalCode" name="postalCode" placeholder="Postal/Zip Code" required onChange={handleChange} />
              </div>
              <h3 className="Header_3">Is the Patient Younger Than 18?</h3>
              <input type="radio" id="under18yes" name="under18" value="yes" onChange={handleChange} />
              <label htmlFor="under18yes">Yes</label>
              <input type="radio" id="under18no" name="under18" value="no" onChange={handleChange} />
              <label htmlFor="under18no">No</label>
              <div className="Guardian">
                {/* <input type="text" id="GuardianName" name="guardianName" placeholder="Guardian Name" required onChange={handleChange} />
                <input type="text" id="GuardianlastName" name="guardianLastName" placeholder="Guardian Last Name" required onChange={handleChange} />
                <input type="text" id="GuardianEmail" name="guardianEmail" placeholder="Guardian Email" required onChange={handleChange} />
                <input type="text" id="GuardianPhone" name="guardianPhone" placeholder="Guardian Phone Number" required onChange={handleChange} />
                <input type="text" id="GuardianAlternativeNumber" name="guardianAlternativeNumber" placeholder="Guardian Alternative Number" required onChange={handleChange} />
                <input type="text" id="GuardianRelationship" name="guardianRelationship" placeholder="Guardian Relationship" required onChange={handleChange} /> */}
              </div>
              <h3 className="Header_3">Health History</h3>
              <textarea className='Text' name="healthHistory" placeholder="Write something.." required onChange={handleChange}></textarea>
              <h3 className="Header_3">Taking Any Medications Currently</h3>
              <input type="radio" id="medicationsYes" name="medications" value="yes" onChange={handleChange} />
              <label htmlFor="medicationsYes">Yes</label>
              <input type="radio" id="medicationsNo" name="medications" value="no" onChange={handleChange} />
              <label htmlFor="medicationsNo">No</label>
              <textarea className='Text_Med' name="medicationsDetails" placeholder="Write something.." required onChange={handleChange}></textarea>
              <h2 className="Header_3">Insurance Information</h2>
              <div className='Insurance_Box'>
                <input type="text" id="insurance" name="insurance" placeholder="Insurance Company" required onChange={handleChange} />
                <input type="text" id="insuranceID" name="insuranceID" placeholder="Insurance ID" onChange={handleChange} />
              </div>
                <h4 className="Header_3">Policy Holder's Details</h4>
              <div className='Insurance_Box'>
                <input type="text" id="policyHolderFirstName" name="policyHolderFirstName" placeholder="First Name" required onChange={handleChange} />
                <input type="text" id="policyHolderLastName" name="policyHolderLastName" placeholder="Last Name" required onChange={handleChange} />
                <input type="text" id="policyHolderEmail" name="policyHolderEmail" placeholder="Email" required onChange={handleChange} />
                <input type="text" id="policyHolderPhone" name="policyHolderPhone" placeholder="Phone Number" required onChange={handleChange} />
              </div>
              <div className="Submit_Box">
                <button className="SignUp" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
