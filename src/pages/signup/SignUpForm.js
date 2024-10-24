import React, { useState } from "react";
import {supabase} from "../../supabaseClient.js";
//import './SignUpForm.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    gender: "",
    age: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    idnumber: "",
    date: "",
    emergencyName: "",
    under18: "no",
    month: "",
    day: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sign up the user with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password1, // Assuming the password is collected earlier
      });

      if (authError) {
        console.error("Error signing up:", authError.message);
        return;
      }

      const userId = authData.user.id;

      // Insert additional user data into the 'users' table
      const { error: dbError } = await supabase
        .from('users')
        .insert({
          user_id: userId,
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
          registration_date: formData.date,
          emergency_name: formData.emergencyName,
          under18: formData.under18 === "yes", // convert to boolean
          birth_month: formData.month,
          birth_day: formData.day,
          birth_year: formData.year,
        });

      if (dbError) {
        console.error("Error inserting user data:", dbError.message);
      } else {
        console.log("User signed up and additional data stored.");
        // Redirect or show success message
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className='Main_SignUp'>
      <div className='Body_SignUp'>
        <div className="Sign_Up">
          <h2 className="Main_Header">Registration</h2>
          <form className="SubmitDate" onSubmit={handleSubmit}>
            <div className="Patient_Details_Form">
              <input
                type="text"
                name="name"
                placeholder="First Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>Please Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="address1"
                placeholder="Street Address Line 1"
                value={formData.address1}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="address2"
                placeholder="Street Address Line 2"
                value={formData.address2}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <select
                name="province"
                value={formData.province}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>Select Province</option>
                <option value="Western Cape">Western Cape</option>
                <option value="Gauteng">Gauteng</option>
                <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                {/* Add other provinces */}
              </select>
              <input
                type="text"
                name="postalCode"
                placeholder="Postal/Zip Code"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="idnumber"
                placeholder="ID Number/Passport"
                value={formData.idnumber}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="date"
                placeholder="Registration Date"
                value={formData.date}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="emergencyName"
                placeholder="Emergency Contact Name"
                value={formData.emergencyName}
                onChange={handleChange}
                required
              />
              <label>Is the patient younger than 18?</label>
              <input
                type="radio"
                name="under18"
                value="yes"
                checked={formData.under18 === "yes"}
                onChange={handleChange}
              />
              <label>Yes</label>
              <input
                type="radio"
                name="under18"
                value="no"
                checked={formData.under18 === "no"}
                onChange={handleChange}
              />
              <label>No</label>
              <select
                name="month"
                value={formData.month}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>Select Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                {/* Add remaining months */}
              </select>
              <input
                type="number"
                name="day"
                placeholder="Day"
                value={formData.day}
                onChange={handleChange}
                min="1"
                max="31"
                required
              />
              <input
                type="number"
                name="year"
                placeholder="Year"
                value={formData.year}
                onChange={handleChange}
                min="1900"
                required
              />
              <button className="SignUp" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
