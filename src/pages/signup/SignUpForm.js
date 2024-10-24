import './SignUpForm.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {supabase} from "../../supabaseClient.js";

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
    under18: 'no', // Default value
    birth_month: '',
    birth_day: '',
    birth_year: '',
    password: '',
    confirm_password: '',
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

    // Check if passwords match
    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match!");
      return;
  }
    // Sign up the user with Supabase
    const { user, error: signUpError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (signUpError) {
      console.error("Error signing up:", signUpError.message);
      alert(`Error signing up: ${signUpError.message}`); // Display an alert for better UX
      return;
    }

    // If sign up is successful, save additional user data
    const { error: insertError } = await supabase
      .from('usersData')
      .insert([{ // Store the user ID
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
        under18: formData.under18 === 'yes', // Convert to boolean
        birth_month: formData.birth_month,
        birth_day: formData.birth_day,
        birth_year: formData.birth_year,
      }]);

    if (insertError) {
      console.error("Error inserting user data:", insertError.message);
      alert(`Error saving user data: ${insertError.message}`); // Display an alert for better UX
      return;
    }

    // Navigate to another page after successful signup
    navigate('/home'); // Redirect to a success page or home page
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
            {/* Other input fields */}
            <input type="text" name="name" placeholder="First Name" value={formData.name} onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="" disabled hidden>Please Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            <input type="text" name="address1" placeholder="Street Address Line 1" value={formData.address1} onChange={handleChange} required />
            <input type="text" name="address2" placeholder="Street Address Line 2" value={formData.address2} onChange={handleChange} />
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
            <select name="province" value={formData.province} onChange={handleChange} required>
              <option value="" disabled hidden>Select Province</option>
              <option value="Western Cape">Western Cape</option>
              <option value="Gauteng">Gauteng</option>
              <option value="KwaZulu-Natal">KwaZulu-Natal</option>
              {/* Other options */}
            </select>
            <input type="text" name="postalCode" placeholder="Postal/Zip Code" value={formData.postalCode} onChange={handleChange} required />
            <input type="text" name="idnumber" placeholder="ID Number/Passport" value={formData.idnumber} onChange={handleChange} required />
            <input type="date" name="registration_date" value={formData.registration_date} onChange={handleChange} required />
            <input type="text" name="emergency_name" placeholder="Emergency Contact Name" value={formData.emergency_name} onChange={handleChange} required />
            <select name="under18" value={formData.under18} onChange={handleChange} required>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            <input type="month" name="birth_month" value={formData.birth_month} onChange={handleChange} required />
            <input type="number" name="birth_day" placeholder="Day" value={formData.birth_day} onChange={handleChange} required />
            <input type="number" name="birth_year" placeholder="Year" value={formData.birth_year} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <input type="password" name="confirm_password" placeholder="Confirm Password" value={formData.confirm_password} onChange={handleChange} required />
            <button className="SignUp" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
