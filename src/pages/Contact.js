import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Socialcontact from "../components/Socialcontact";

export default function Contact() {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        email: "",
        textarea: "",
    });

    useEffect(() => {
        const form = formRef.current;

        gsap.from(form, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.4,
        });

        gsap.from(form.children, {
            opacity: 0,
            y: 20,
            duration: 1,
            stagger: 0.3,
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(process.env.REACT_APP_EMAIL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                // Reset form fields after successful submission
                setFormData({
                    email: "",
                    textarea: "",
                });
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="main-container centre-mail">
            <div className="form-container" ref={formRef}>
                <h1>Contact</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            required
                            name="email"
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            aria-label="Email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">Questions or Comments</label>
                        <textarea
                            required
                            cols="50"
                            rows="10"
                            id="textarea"
                            name="textarea"
                            value={formData.textarea}
                            onChange={handleChange}
                            aria-label="Questions or Comments"
                        ></textarea>
                    </div>
                    <Socialcontact />
                    <button type="submit" className="form-submit-btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
