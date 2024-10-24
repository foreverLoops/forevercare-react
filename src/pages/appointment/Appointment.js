import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./appointmentStyles.css";
import Modal from "./feedbackFormModal"
import { supabase } from '../../supabaseClient'
import { useNavigate } from 'react-router-dom';

// Function that handles the form and submits the data into supabase 
export default function Appointment() {
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ID: '',
    contact: '',
    appointment: '',
    other: '',
  });
  const navigate = useNavigate() ;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentDetails = { ...formData, time: startDate.toISOString() }; // Convert to ISO string if necessary
    try {
      const { data, error } = await supabase
        .from('appointment')
        .insert([appointmentDetails]);
  
      if (error) throw error; 
  
      alert('Appointment scheduled successfully');
      setFormData({
        name: '',
        email: '',
        phone: '',
        ID: '',
        contact: '',
        appointment: '',
        other: '',
      });
      setStartDate(new Date());
    } catch (error) {
      console.error('Error adding document: ', error.message); // Log the error message
      alert(`Error scheduling appointment: ${error.message}`); // Show user-friendly error
    }
    navigate('/home')
  };
    

  return (

    <>
    <body className="backgroundImage">
      <div >

        <div>
          <h1 className='title'>Appointment Form</h1>
        </div>
        <div className="form">
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <section>
              {/* info Details */}
              <div className="info-details">
                <span className="info-global">
                  <label className="labelContainer" htmlFor="name">Name & Surname</label>
                </span>
                <input className="info" id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="e.g John Doe" required />
              </div>

              <div className="info-details">
                <span className="info-global">
                  <label className="labelContainer" htmlFor="email">Email</label>
                </span>
                <input id="email" className="info" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Johndoe01@gmail.com" />
              </div>

              <div className="info-details">
                <span className="info-global">
                  <label className="labelContainer" htmlFor="phone">Phone Number</label>
                </span>
                <input id="phone" className="info" name="phone" type="tel" value={formData.phone} onChange={handleChange} maxLength="10" placeholder="e.g 098-098-5674" required />
              </div>

              <div className="info-details">
                <span className="info-global">
                  <label className="labelContainer" htmlFor="ID">Identification Number</label>
                </span>
                <input id="ID" className="info" name="ID" type="text" value={formData.ID} onChange={handleChange} placeholder="e.g 19435763782894" maxLength="13" required />
              </div>
{/* contact preference */}
              <div className="info-details">
                <span className="info-global">
                  <label className="labelContainer" htmlFor="contact">Contact Preference:</label>
                </span>
                <div className="radio01">
                  <div><label className="labelContainer"><input name="contact" value="Phone" onChange={handleChange} type="radio" /> Phone</label></div>
                  <div><label className="labelContainer"><input name="contact" value="Email" onChange={handleChange} type="radio" /> Email</label></div>
                </div>
              </div>
            </section>
{/* Appointment Scheduling */}
            <section className="appointment_info">
              <h2 className='appointmentHeading'>Medical Departments of <span className="heading-htmlForm">Appointments</span></h2>
              <p className='appointmentSub'>Please Select Your Appointment:</p>
              <div className="app01">
                <ul className='listItems'>
                  <div className="appoint">
                    <li className="app01"><input name="appointment" value="Cardiology" onChange={handleChange} type="radio" /> Cardiology</li>
                    <li className="app01"><input name="appointment" value="Radiology" onChange={handleChange} type="radio" /> Radiology</li>
                    <li className="app01"><input name="appointment" value="Psychiatry" onChange={handleChange} type="radio" /> Psychiatry</li>
                    <li className="app01"><input name="appointment" value="Family Planning" onChange={handleChange} type="radio" /> Family Planning</li>
                    <li className="app01"><input name="appointment" value="Other" onChange={handleChange} type="radio" /> Other...</li>
                  </div>
                  <div className="appoint">
                    <li className="app01"><input name="appointment" value="Allergic Diseases" onChange={handleChange} type="radio" /> Allergic Diseases</li>
                    <li className="app01"><input name="appointment" value="Physio" onChange={handleChange} type="radio" /> Physio</li>
                    <li className="app01"><input name="appointment" value="Pediatrics" onChange={handleChange} type="radio" /> Pediatrics</li>
                    <li className="app01"><input name="appointment" value="INR" onChange={handleChange} type="radio" /> INR</li>
                  </div>
                  <div>
                  <div className="appoint">

                    <li className="app01"><input name="appointment" value="Dermatology" onChange={handleChange} type="radio" /> Dermatology</li>
                    <li className="app01"><input name="appointment" value="Disorders" onChange={handleChange} type="radio" /> Disorders</li>
                    <li className="app01"><input name="appointment" value="Infectious Diseases" onChange={handleChange} type="radio" /> Infectious Diseases</li>
                    <li className="app01"><input name="appointment" value="Nutrition & Dietician" onChange={handleChange} type="radio" /> Nutrition & Dietician</li>
                  </div>
                  </div>
                </ul>
                <div className="info-other">
                  <textarea className='textarea' id="other" name="other" value={formData.other} onChange={handleChange} rows="3" cols="0" placeholder="please specify"></textarea>
                </div>
              </div>
            </section>
        {/* this is for the date and time */}
            <div className="app-time">
              <label className="time">Time of the Appointment:
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="Pp"
                  placeholderText="Select date and time"
                  required
                />
              </label>
            </div>

            <section>
              <div className="submit_button">
                <button className="button" type="submit">SCHEDULE APPOINTMENT</button>
              </div>
            </section>
          </form>
          <div title='UserfeedBack Form' className='modal-container'><Modal/></div>

        </div>
        
      </div>
      </body>
    </>
  );
}
