import './SignUpForm.css';

const SignUpForm = () => {
  return ( 
    <div className='Main_SignUp'>
      <div className='Body_SignUp'>
        <div className="Sign_Up">
          <div className="Header">Sign-Up</div>
          <div className="Intro">
            <p className="Header_1">
              New Patient Registration
              </p>
              <p className="Header_2">
                Welcome! Please fill in the following form.
              </p>
          </div>

          <h2 className="Main_Header">Registration</h2>
          <form className="SubmitDate" action="submitDate.html">
            <div className="Dateregistration">
              <label className="Date" htmlFor="date"></label>
              <input className="Date" type="date" id="date" name="date" required />
            </div>

            <h2 className="Patient_Details">Patient Details</h2>
            <div className="Patient_Details_Form">
              <label className="Patient_" htmlFor="name"></label>
              <input className="Patient_" type="text" name="name" id="name" placeholder="First Name" required />

              <label className="Patient_lastname" htmlFor="lastName"></label>
              <input className="Patient_name" type="text" name="lastName" id="lastName" placeholder="Last Name" required />

              <label className="Patient_gender" htmlFor="gender"></label>
              <select className="Patient_gender" name="gender" id="gender" required>
                <option className="SignUp_select" value="" disabled hidden>Please Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <label htmlFor="age"></label>
              <input type="number" name="age" id="age" placeholder="Age" required />

              <label className='SignUp_Moths' htmlFor="month"></label>
              <select name="month" id="month" required>
                <option value="" disabled hidden>Select Month</option>
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

              <label htmlFor="day"></label>
              <input type="number" id="day" name="day" placeholder="Day" min="1" max="31" required />

              <label htmlFor="year"></label>
              <input type="number" id="year" name="year" placeholder="Year" min="1900" required />

              <label htmlFor="idnumber"></label>
              <input type="text" id="idnumber" name="idnumber" placeholder="ID Number/Passport" required />

              <label htmlFor="phone"></label>
              <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />

              <label htmlFor="email"></label>
              <input type="email" id="email" name="email" placeholder="Email Address" required />

              <label htmlFor="password1"></label>
              <input
                type="password"
                id="password1"
                name="password"
                placeholder="Password"
                pattern="(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,7}"
                title="Password must be up to 7 characters, and include at least one letter, one number, and one special character."
                required
              />

              <label htmlFor="password2"></label>
              <input type="password" id="password2" name="confirm_password" placeholder="Confirm Password" required />

              <h3 className="Header_3">Address</h3>
              <label htmlFor="address1"></label>
              <input type="text" id="address1" name="address1" placeholder="Street Address Line 1" required />

              <label htmlFor="address2"></label>
              <input type="text" id="address2" name="address2" placeholder="Street Address Line 2" />

              <label htmlFor="city"></label>
              <input type="text" id="city" name="city" placeholder="City" required />

              <label htmlFor="province"></label>
              <select name="province" id="province" required>
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

              <label htmlFor="postalCode"></label>
              <input type="text" id="postalCode" name="postalCode" placeholder="Postal/Zip Code" required />

              <h3 className="Header_3">Is the Patient Younger Than 18?</h3>
              <input className='Radio' type="radio" id="yes" name="under18" value="yes" />
              <label className='Yes' htmlFor="yes">Yes</label>
              <input className='Radio' type="radio" id="no" name="under18" value="no" />
              <label className='No' htmlFor="no">No</label>

              <h2 className='Emergency_Contact'>Emergency Contact</h2>
              <label htmlFor="emergencyName"></label>
              <input type="text" id="emergencyName" name="emergencyName" placeholder="Emergency Contact Name" required />

              <button className='Submit_SignUp' type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
