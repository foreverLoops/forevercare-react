import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./userFeedbackform.css";
import { FaWpforms } from "react-icons/fa";

const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_SUPABASE_ANON_KEY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Modal() {
    const [modal, setModal] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        experience: "",
        navigationEase: null,
        technicalDifficulties: null,
        recommend: null,
        additionalFeedback: "",
    });

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error } = await supabase.from("feedback").insert([
            {
                first_name: formData.firstName,
                last_name: formData.lastName,
                experience: formData.experience,
                navigation_ease: formData.navigationEase === "Yes",
                technical_difficulties: formData.technicalDifficulties === "Yes",
                recommend: formData.recommend === "Yes",
                additional_feedback: formData.additionalFeedback,
            },
        ]);

        if (error) {
            console.error("Error submitting feedback:", error);
        } else {
            console.log("Feedback submitted successfully!");
            toggleModal();
            // Optionally reset form data
            setFormData({
                firstName: "",
                lastName: "",
                experience: "",
                navigationEase: null,
                technicalDifficulties: null,
                recommend: null,
                additionalFeedback: "",
            });
        }
    };

    return (
        <>
            <FaWpforms onClick={toggleModal} className="btn-modal" />

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <form className="form-container" onSubmit={handleSubmit}>
                            <h1 className="heading-form">Feedback Form</h1>
                            <section className="form-info">
                                <div className="patientInfo">
                                    <label className="form-label" htmlFor="firstName">First Name:</label>
                                    <input
                                        className="user-input"
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        value={formData.firstName}
                                        onChange={handleChange}
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
                                        onChange={handleChange}
                                    />
                                </div>
                            </section>

                            <section>
                                <h3>1. How was your experience using the Website?</h3>
                                <div className="experience">
                                    {["Not Satisfied", "Satisfied", "Satisfied enough to tell others"].map((exp) => (
                                        <label key={exp} className="input-labels">
                                            <input
                                                name="experience"
                                                type="radio"
                                                value={exp}
                                                onChange={handleChange}
                                            /> {exp}
                                        </label>
                                    ))}
                                </div>

                                <h3>2. Was the Website easy to navigate?</h3>
                                <div className="experience">
                                    {["Yes", "No"].map((option) => (
                                        <label key={option} className="input-labels">
                                            <input
                                                name="navigationEase"
                                                type="radio"
                                                value={option}
                                                onChange={handleChange}
                                            /> {option}
                                        </label>
                                    ))}
                                </div>

                                <h3>3. Did you experience any technical difficulties?</h3>
                                <div className="experience">
                                    {["Yes", "No"].map((option) => (
                                        <label key={option} className="input-labels">
                                            <input
                                                name="technicalDifficulties"
                                                type="radio"
                                                value={option}
                                                onChange={handleChange}
                                            /> {option}
                                        </label>
                                    ))}
                                </div>

                                <h3>4. Would you recommend the website to others?</h3>
                                <div className="experience">
                                    {["Yes", "No"].map((option) => (
                                        <label key={option} className="input-labels">
                                            <input
                                                name="recommend"
                                                type="radio"
                                                value={option}
                                                onChange={handleChange}
                                            /> {option}
                                        </label>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h3>5. Please leave any Feedback:</h3>
                                <textarea
                                    className="textarea-container"
                                    rows="5"
                                    name="additionalFeedback"
                                    value={formData.additionalFeedback}
                                    onChange={handleChange}
                                ></textarea>
                            </section>

                            <div className="submitButtonContainer">
                                <button id="submitButton" type="submit">Submit</button>
                                <span>
                                    <button onClick={toggleModal} className="close-modal" id="exit">Exit</button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
