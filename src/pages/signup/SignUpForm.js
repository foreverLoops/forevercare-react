// // import React, { useState } from 'react';
// import './SignUpForm.css';

// const SignUpForm = () => {
//   return ( 
//     <main className="Body">
//     <section className="Sign">
//        <div className="Header">Sign-Up</div>
//        <div class="Intro">
//           <p className="Header_1">New Patient Registration</p>
//           <p className="Header_1">Welcome! Please fill in the following form.</p>
//        </div>
 
//        <h2 className="Main_Header">Registration</h2>
//        <form className="SubmitDate" action="submitDate.html">
//           <div className="Dateregistration">
//              <label className="RegDate" for="date">Date of Registration</label>
//              <input className="Date" type="date" id="date" name="date" required>
//             </input>
//           </div>
 
//           <h2 className="Patient_Details">Patient Details</h2>
//           <div className="Patient_Details_Form">
//              <label className="Patient_" for="name">First Name</label>
//              <input className="Patient_"  type="text" name="name" id="name" placeholder="First Name" required>
 
//              <label className="Patient_"  for="lastName">Last Name</label>
//              <input className="Patient_"  type="text" name="lastName" id="lastName" placeholder="Last Name" required>
 
//              <label className="Patient_"  for="gender">Gender</label>
//              <select className="Patient_"  name="gender" id="gender" required>
//                 <option className="SignUp_select" value="" disabled selected hidden>Please Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//              </select>
 
//              <label for="age">Age</label>
//              <input type="number" name="age" id="age" placeholder="Age" required>
 
//              <label for="month">Month</label>
//              <select name="month" id="month" required>
//                 <option value="" disabled selected hidden>Select Month</option>
                

//                 <option value="January">January</option>
//                 <option value="February">February</option>
               
//                 <option value="December">December</option>
//              </select>
 
//              <label for="day">Day</label>
//              <input type="number" id="day" name="day" placeholder="Day" min="1" max="31" required>
 
//              <label for="year">Year</label>
//              <input type="number" id="year" name="year" placeholder="Year" min="1900" required>
 
//              <label for="idnumber">ID Number/Passport</label>
//              <input type="text" id="idnumber" name="idnumber" placeholder="ID Number/Passport" required>
 
//              <label for="phone">Phone Number</label>
//              <input type="tel" id="phone" name="phone" placeholder="Phone Number" required>
 
//              <label for="email">Email Address</label>
//              <input type="email" id="email" name="email" placeholder="Email Address" required>
 
//              <label for="password1">Password</label>
//              <input type="password" id="password1" name="password" placeholder="Password" pattern="(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,7}" title="Password must be up to 7 characters, and include at least one letter, one number, and one special character." required>
//              </input>
 
//              <label for="password2">Confirm Password</label>
//              <input type="password" id="password2" name="confirm_password" placeholder="Confirm Password" required>
//              </input>
//           </div>
 
//           <h3>Address</h3>
//           <label for="address1">Street Address Line 1</label>
//           <input type="text" id="address1" name="address1" placeholder="Street Address Line 1" required>

 
//           <label for="address2">Street Address Line 2</label>
//           <input type="text" id="address2" name="address2" placeholder="Street Address Line 2">
 
//           <label for="city">City</label>
//           <input type="text" id="city" name="city" placeholder="City" required>
 
//           <label for="province">Province</label>
//           <select name="province" id="province" required>
//              <option value="" disabled selected hidden>Select Province</option>
//              <option value="Western Cape">Western Cape</option>
//              <!-- More provinces go here... -->
//              <option value="North West">North West</option>
//           </select>
 
//           <label for="postalCode">Postal/Zip Code</label>
//           <input type="text" id="postalCode" name="postalCode" placeholder="Postal/Zip Code" required>
 
//           <h3>Is the Patient Younger Than 18?</h3>
//           <input type="radio" id="yes" name="under18" value="yes">
//           <label for="yes">Yes</label>
//           <input type="radio" id="no" name="under18" value="no">
//           <label for="no">No</label>
 
//           <h2>Emergency Contact</h2>
//           <label for="emergencyName">Emergency Contact Name</label>
//           <input type="text" id="emergencyName" name="emergencyName" placeholder="Emergency Contact Name" required>
 
//           <button type="submit">Submit</button>
//        </form>
//     </section>
//  </main>
//    );
// }
 


// export default SignUpForm;
