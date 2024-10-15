import React from 'react'
import "./appointmentStyles.css"

export default function Appointment() {
  return (
    <>
    <div className="backgroundImage" >
      <div>
        <h1 className='title'>Appointment Form</h1>
      </div>
    <div className="form" >
      
      <form>
      
        <section>
                    <div className="info-details">
                        <span className="info-global"><label className="labelContainer" htmlFor="name" >Name & Surname</label></span>
                            <input className="info" id ="name" name="Name" type="text" placeholder="e.g John Doe" required/>
                    </div>

                    <div className="info-details">
                        <span className="info-global"><label className="labelContainer" htmlFor="email" >Email</label></span>
                            <input  id="email" className="info" name="email" type="email" placeholder="example@gmail.com"/>
                    </div>

                    <div className="info-details">
                        <span className="info-global"><label className="labelContainer" htmlFor="phone" >Phone Number</label></span>
                            <input id="phone" className="info" name="phone" type="tel" placeholder="e.g 098-098-5674" required/>
                    </div>

                    <div className="info-details">
                        <span className="info-global"><label  className="labelContainer" htmlFor="ID">Identification Number</label></span>
                            <input id="ID" className="info" name="ID" type="text" placeholder="e.g 19435763782894" maxlength="13" required/>
                    </div>

                    <div className="info-details">
                        <span className="info-global"><label className="labelContainer" htmlFor="contact" >Contact Preference:</label></span>
                        <div className="radio01">
                            <div><label className="labelContainer"><input id="contact"  name="contact" type="radio"/> Phone</label></div>
                            <div><label className="labelContainer"><input  name="contact" type="radio"/> Email</label></div>
                        </div>
                    </div> 

                </section>
  
            {/* <!-- This part is htmlFor the Medical appointments  --> */}

                <section className="appointment_info">
                    <h2 className='appointmentHeading'>Medical Departments of <span className="heading-htmlForm"> Appointments</span></h2>
                        <p className='appointmentSub'>Please Select Your Appointment:</p>  
                    <div className="app01">
                       <ul className='listItems'>
                            <div className="appoint">
                                <li className="app01"><input name="Appointment" type="radio"/> Cardiology</li>
                                <li className="app01"><input name="Appointment" type="radio"/> Radiology</li>
                                <li className="app01"><input name="Appointment" type="radio"/> Psychiatry</li>
                                <li className="app01"><input name="Appointment" type="radio"/> Family Planning</li>
                                <li className="app01"><input htmlFor="other" name="Appointment" type="radio"/> Other...</li>
                            </div>
                        
                            <div className="appoint">
                                <li className="app1"><input name="Appointment" type="radio"/> Allergic Diseases</li>
                                <li className="app1"><input name="Appointment" type="radio"/> Physio</li>
                                <li className="app1"><input name="Appointment" type="radio"/> Pediatrics</li>
                                <li className="app1"><input name="Appointment" type="radio"/> INR</li>

                            </div>
                            
                            <div>
                                <li className="app1"><input name="Appointment" type="radio"/> Dermatology</li>
                                <li className="app1"><input name="Appointment" type="radio"/> Disorders</li>
                                <li className="app1"><input name="Appointment" type="radio"/> Infectious Diseases</li>
                                <li className="app1"><input name="Appointment" type="radio"/> Nutrition & Dietician</li>
                            </div>
                        </ul>
                        <div className="info-other">
                            <textarea className='textarea' id="other"  rows="3" cols="0" placeholder="please specify"></textarea>
                        </div>
                    </div>


              
                </section>
                
               
                    

                <section >
                    <div className="submit_button">
                        <button  className="button" type="submit">SCHEDULE APPOINTMENT</button>
                    </div>
                </section>
                    
      </form>

     
    </div>
    </div>
    </>
  )
}
