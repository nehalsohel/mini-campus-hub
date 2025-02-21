import React, { useState } from "react";
import "./ContactUs.css"; // Ensure this file is imported

function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && message) {
            setSuccessMessage("Thank you for contacting us! We will get back to you soon.");
            setErrorMessage("");
            setName("");
            setEmail("");
            setMessage("");
        } else {
            setErrorMessage("Please fill in all fields.");
            setSuccessMessage("");
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-box">
                <h2>Contact Us</h2>
                <p>Have any questions? Feel free to reach out!</p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>

                    {errorMessage && <div className="error">{errorMessage}</div>}
                    {successMessage && (<div className="success"> ✅ <strong>{successMessage}</strong></div>)}
                    

                    <div className="button-group">
                        <button type="submit">Send Message</button>
                        <button type="button" className="clear-btn" onClick={() => { setName(""); setEmail(""); setMessage(""); }}>Clear</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
