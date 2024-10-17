import React, {useState} from "react";
import "./userFeedbackform.css";


export default function Modal(){

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return(
        <>
        <button onClick ={toggleModal}
            className = "btn-modal">
                Open
        </button>

        {modal && (
            <div className="modal">
            <div onClick ={toggleModal} className="overlay"></div>
            <div className="modal-content">
            
                
                <form >
                    <h1 className="heading-form">Feedback Form</h1>
                    <section className="form-info">
                        <div className="patientInfo">
                            <label className="form-label" htmlFor="name">First Name:</label> <input id="firstName" type="text"/>
                        </div>
                        <div className="patientLast">
                            <span className="labelInfo"><label className="form-label" htmlFor="lastName" />Last Name:</span> <input id="lastName" type="text"/><label/>
                        </div>
                        
                    </section> 
    
    
    
                    <section>
                        <h3>1.How was your experience using the Website ?</h3>
                        <div className="experience">
                            <label><input name="exp" type="radio"/> Not Satisfied</label>
                            <label><input name="exp" type="radio"/> Satisfied</label>
                            <label><input name="exp" type="radio"/> Satisfied enough to tell others</label>
                        </div>
    
                        <h3>2.Was the Website easy to navigate ?</h3>
                        <div className="experience">
                            <label><input name="easy" type="radio"/> Yes</label>
                            <label><input name="easy" type="radio"/> No</label>
                        </div>
                        <h3>3.Did you experience any technical difficulties ?</h3>
                        <div className="experience">
                            <label><input name="technical" type="radio"/> Yes</label>
                            <label><input name="technical" type="radio"/> No</label>
                        </div>
                        <h3>4.Would you recommend the website to others ?</h3>
                        <div className="experience">
                            <label><input name="recommend" type="radio"/> Yes</label>
                            <label><input name="recommend" type="radio"/> No</label>
                        </div>
                    </section>
                    <section>
                        <h3>5.Please leave any Feedback:</h3>
                        <div>
                            <textarea rows="3" cols="0"  ></textarea>
                        </div>
                    </section>
                    <div className="submitButtonContainer">
                        <button id="submitButton" type="submit" >Submit</button>
                        <span ><button onClick ={toggleModal} className="close-modal" id="exit">Exit</button></span>
                    </div>
            
                </form>
            </div>
            </div>
        )}
        


        </>
    )
   

}