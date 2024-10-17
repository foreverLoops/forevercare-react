import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./appointmentStyles.css";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentDetails = { ...formData, time: startDate };
    console.log('Submitting appointment:', appointmentDetails); // Add this line
  
    // Fetch request...
  
  
    try {
      const response = await fetch('http://127.0.0.1:5000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentDetails),
      });

      if (response.ok) {
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
      } else {
        alert('Error scheduling appointment');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error scheduling appointment');
    }
  };

  return (
    <>
      <div className="backgroundImage">
        <div>
          <h1 className='title'>Appointment Form</h1>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <section>
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
                <input id="email" className="info" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="example@gmail.com" />
              </div>

              <div className="info-details">
                <span className="info-global">
                  <label className="labelContainer" htmlFor="phone">Phone Number</label>
                </span>
                <input id="phone" className="info" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="e.g 098-098-5674" required />
              </div>

              <div className="info-details">
                <span className="info-global">
                  <label className="labelContainer" htmlFor="ID">Identification Number</label>
                </span>
                <input id="ID" className="info" name="ID" type="text" value={formData.ID} onChange={handleChange} placeholder="e.g 19435763782894" maxLength="13" required />
              </div>

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
                    <li className="app1"><input name="appointment" value="Allergic Diseases" onChange={handleChange} type="radio" /> Allergic Diseases</li>
                    <li className="app1"><input name="appointment" value="Physio" onChange={handleChange} type="radio" /> Physio</li>
                    <li className="app1"><input name="appointment" value="Pediatrics" onChange={handleChange} type="radio" /> Pediatrics</li>
                    <li className="app1"><input name="appointment" value="INR" onChange={handleChange} type="radio" /> INR</li>
                  </div>
                  <div>
                    <li className="app1"><input name="appointment" value="Dermatology" onChange={handleChange} type="radio" /> Dermatology</li>
                    <li className="app1"><input name="appointment" value="Disorders" onChange={handleChange} type="radio" /> Disorders</li>
                    <li className="app1"><input name="appointment" value="Infectious Diseases" onChange={handleChange} type="radio" /> Infectious Diseases</li>
                    <li className="app1"><input name="appointment" value="Nutrition & Dietician" onChange={handleChange} type="radio" /> Nutrition & Dietician</li>
                  </div>
                </ul>
                <div className="info-other">
                  <textarea className='textarea' id="other" name="other" value={formData.other} onChange={handleChange} rows="3" cols="0" placeholder="please specify"></textarea>
                </div>
              </div>
            </section>

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
        </div>
      </div>
    </>
  );
}
