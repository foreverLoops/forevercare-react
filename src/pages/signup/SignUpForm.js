import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    name: '',
    lastName: '',
    gender: '',
    age: '',
    month: '',
    day: '',
    year: '',
    idNumber: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    province: '',
    postalCode: '',
    maritalStatus: '',
    under18: '',
    parentName: '',
    parentLastName: '',
    emergencyContactName: '',
    emergencyContactLastName: '',
    emergencyContactNumber: '',
    emergencyContactRelationship: '',
    healthHistory: '',
    takingMedications: '',
    insurance: '',
    insuranceId: '',
    policyHolderFirstName: '',
    policyHolderLastName: '',
    policyHolderIdNumber: '',
    policyHolderEmail: '',
    policyHolderContactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <main>
      <h1>Sign-Up Form</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <h2>New Patient Registration</h2>
          <label>
            Date of Registration:
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
          </label>
        </section>

        <section>
          <h2>Patient Details</h2>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        </section>

        <section>
          <h2>Contact Information</h2>
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
        </section>

        <section>
          <h2>Address</h2>
          <input type="text" name="addressLine1" placeholder="Street Address Line 1" value={formData.addressLine1} onChange={handleChange} required />
          <input type="text" name="addressLine2" placeholder="Street Address Line 2" value={formData.addressLine2} onChange={handleChange} />
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
          <select name="province" value={formData.province} onChange={handleChange} required>
            <option value="" disabled>Select Province</option>
            <option value="Western Cape">Western Cape</option>
            <option value="Northern Cape">Northern Cape</option>
            <option value="Eastern Cape">Eastern Cape</option>
            <option value="Free State">Free State</option>
            <option value="Kwa-Zulu Natal">Kwa-Zulu Natal</option>
            <option value="Gauteng">Gauteng</option>
            <option value="Mpumalanga">Mpumalanga</option>
            <option value="Limpopo">Limpopo</option>
            <option value="North West">North West</option>
          </select>
        </section>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default SignUpForm;
