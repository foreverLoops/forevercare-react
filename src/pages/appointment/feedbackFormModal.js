import React, { useState } from "react"; 
import "./userFeedbackform.css"; 
import { FaWpforms } from "react-icons/fa"; 
import { supabase } from "../../supabaseClient"; 

export default function Modal() {
    // State to control if the modal should be seen or not
    const [modal, setModal] = useState(false);

    // State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        experience: '',
        navigate: '',
        technicalDifficulties: '',
        recommend: '',
        feedback: '',
    });

    // Function to toggle the modal open/close
    const toggleModal = () => {
        setModal(!modal);
    };

    // Function to handle changes in form input
    const handleChange = (e) => {
        const { name, value } = e.target; 
        setFormData((prev) => ({ ...prev, [name]: value })); // Update the form data state
    };

    
        const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const UserFeedback = { ...formData }; // Prepares the data for submission

        try {
            // inserts the feedback form data into supabase
            const { data, error } = await supabase
                .from('feedback')
                .insert([UserFeedback]);

            if (error) throw error; // throws an error

            alert("User Feedback Form Successful"); // When the form is successful it alerts the user
            
            // Reset the form
            setFormData({
                name: '',
                lastName: '',
                experience: '',
                navigate: '',
                technicalDifficulties: '',
                recommend: '',
                feedback: '',
            });
            toggleModal(); // Closes the modal after submission
        } catch (error) {
            console.error('Error Adding Form:', error.message); // log to console any errors
            alert(`Error submitting Form: ${error.message}`); // if any errors appear it will alert the user
        }
    };

    return (
        <>
            {/*this icon is to Open the modal */}
            <FaWpforms onClick={toggleModal} className="btn-modal" />

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div> {/* This is used to close the modal */}
                    <div className="modal-content">
                        {/* Form */}
                        <form className="form-container" onSubmit={handleSubmit}>
                            <h1 className="heading-form">Feedback Form</h1>
                            <section className="form-info">
                                <div className="patientInfo">
                                    <label className="form-label" htmlFor="name">First Name:</label>
                                    <input
                                        className="user-input"
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange} // handle changes in input
                                    />
                                </div>
                                <div className="patientLast">
                                    <label className="form-label" htmlFor="lastName">Last Name:</label>
                                    <input
                                        className="user-input"
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        value={formData.lastName}
                                        onChange={handleChange} // handles change in the input
                                    />
                                </div>
                            </section>

                            <section>
                                <h3>1. How was your experience using the Website?</h3>
                                <div className="experience">
                                    <label className="input-labels">
                                        <input name="experience" type="radio" value="Not Satisfied" onChange={handleChange} />
                                        Not Satisfied
                                    </label>
                                    <label className="input-labels">
                                        <input name="experience" type="radio" value="Satisfied" onChange={handleChange} />
                                        Satisfied
                                    </label>
                                    <label className="input-labels">
                                        <input name="experience" type="radio" value="Satisfied enough to tell others" onChange={handleChange} />
                                        Satisfied enough to tell others
                                    </label>
                                </div>

                                <h3>2. Was the Website easy to navigate?</h3>
                                <div className="experience">
                                    <label className="input-labels">
                                        <input name="navigate" type="radio" value="Yes" onChange={handleChange} />
                                        Yes
                                    </label>
                                    <label className="input-labels">
                                        <input name="navigate" type="radio" value="No" onChange={handleChange} />
                                        No
                                    </label>
                                </div>

                                <h3>3. Did you experience any technical difficulties?</h3>
                                <div className="experience">
                                    <label className="input-labels">
                                        <input name="technicalDifficulties" type="radio" value="Yes" onChange={handleChange} />
                                        Yes
                                    </label>
                                    <label className="input-labels">
                                        <input name="technicalDifficulties" type="radio" value="No" onChange={handleChange} />
                                        No
                                    </label>
                                </div>

                                <h3>4. Would you recommend the website to others?</h3>
                                <div className="experience">
                                    <label className="input-labels">
                                        <input name="recommend" type="radio" value="Yes" onChange={handleChange} />
                                        Yes
                                    </label>
                                    <label className="input-labels">
                                        <input name="recommend" type="radio" value="No" onChange={handleChange} />
                                        No
                                    </label>
                                </div>
                            </section>

                            <section>
                                <h3>5. Please leave any Feedback:</h3>
                                <textarea
                                    className="textarea-container"
                                    rows="5"
                                    cols="0"
                                    name="feedback"
                                    value={formData.feedback}
                                    onChange={handleChange} //If there are any changes in the textare it will handle it
                                />
                            </section>

                            <div className="submitButtonContainer">
                                <button id="submitButton" type="submit">Submit</button> {/* Submit button */}
                                <button type="button" onClick={toggleModal} className="close-modal" id="exit">Exit</button> {/* Exit button */}
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
