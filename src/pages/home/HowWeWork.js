import React, { useEffect, useState } from "react";

export default function HowWeWork() {
    const [counter, setCounter] = useState(1);

    // Automatically switch radio buttons every 3 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prev) => (prev >= 4 ? 1 : prev + 1));
      }, 3000);
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
  
    return (
        <div className="instuctions-box">
            <div className="instruction-info">
                <div className="instruction-heading">
                    <h1>HOW WE WORK</h1>
                    <h2>IN ONLY THREE STEPS</h2>
                </div>
                <p>
                    We are your trusted one-stop destination for all your healthcare needs. Our comprehensive directory is
                    designed to provide you with easy access to a wide range of healthcare services and providers, ensuring
                    that you and your family.
                </p>
            </div>
            <picture className="carousel-container">
                <div className="carousel-box">
                    <div className="gallery">
                        <input type="radio" name="radio-btn" id="radio1" checked={counter === 1} />
                        <input type="radio" name="radio-btn" id="radio2" checked={counter === 2} />
                        <input type="radio" name="radio-btn" id="radio3" checked={counter === 3}/>
                        <input type="radio" name="radio-btn" id="radio4" checked={counter === 4}/>

                        <div className="gallery-info first ">
                            <h2>Book An Appointment</h2>
                            <img src="../media/appointment.png" alt="" />
                            <span>1</span>
                        </div>
                        <div className="gallery-info">
                            <h2>Conduct Checkup</h2>
                            <img src="../media/check-up.png" alt="" />
                            <span>2</span>
                        </div>
                        <div className="gallery-info">
                            <h2>Perform Treatment</h2>
                            <img src="../media/first-aid-kit.png" alt="" />
                            <span>3</span>
                        </div>
                        <div className="gallery-info">
                            <h2>At No Cost</h2>
                            <img src="../media/tag.png" alt="" />
                        </div>

                        <div className="navigation-auto">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                            <div className="auto-btn4"></div>
                        </div>


                        <div className="navigation-manual">
                            <label for="radio1" className="manual-btn" onClick={() => setCounter(1)}></label>
                            <label for="radio2" className="manual-btn" onClick={() => setCounter(2)}></label>
                            <label for="radio3" className="manual-btn" onClick={() => setCounter(3)}></label>
                            <label for="radio4" className="manual-btn" onClick={() => setCounter(4)}></label>
                        </div>
                    </div>
                </div>
            </picture>
        </div>

    )
}