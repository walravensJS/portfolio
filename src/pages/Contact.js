import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Contact() {
    const formRef = useRef(null);

    useEffect(() => {
        const form = formRef.current;

        gsap.from(form, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.4, // Delay the animation slightly to allow the box to load first
        });

        gsap.from(form.children, {
            opacity: 0,
            y: 20,
            duration: 1,
            stagger: 0.9, // Stagger the animation of each form element
        });
    }, []);

    return (
        <div className="main-container centre-mail">
            <div className="form-container" ref={formRef}>
                <h1>Contact</h1>
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            required=""
                            name="email"
                            id="email"
                            type="text"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">Questions or</label>
                        <textarea
                            required=""
                            cols="50"
                            rows="10"
                            id="textarea"
                            name="textarea"
                        ></textarea>
                    </div>
                    <button type="submit" className="form-submit-btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
