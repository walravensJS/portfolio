import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    function submit(e) {
        e.preventDefault();

        fetch("https://formcarry.com/s/0YzKOLsXdVy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                email: email,
                message: message,
                name: name,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.code === 200) {
                    setSubmitted(true);
                } else {
                    setError(res.message);
                }
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center text-green-500"
            >
                <h1>Thank you for contacting me</h1>
                <p>I will get back to you as soon as possible.</p>
                <p>
                    <a href="/">Go back</a>
                </p>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-2xl font-bold text-gray-700 text-center mt-16">
                Contact me
            </h1>
            <motion.section
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
            >
                <form onSubmit={submit} className="space-y-4">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileFocus={{ scale: 1.05 }}
                    >
                        <label
                            htmlFor="name"
                            className="block text-lg font-semibold text-gray-700"
                        >
                            Full name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileFocus={{ scale: 1.05 }}
                    >
                        <label
                            htmlFor="email"
                            className="block text-lg font-semibold text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                        />
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileFocus={{ scale: 1.05 }}
                    >
                        <label
                            htmlFor="message"
                            className="block text-lg font-semibold text-gray-700"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                        />
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="submit"
                        className="w-full py-2 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    >
                        Send
                    </motion.button>
                </form>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-gray-500 text-center mt-5">
                        Or reach out to me on social media or{" "}
                        <a
                            href="mailto:stijn.walravens@outlook.com"
                            className="text-purple-600"
                        >
                            email me here
                        </a>
                    </p>
                    <div className="flex justify-center gap-4 mt-4">
                        {[
                            { href: "https://github.com", icon: FaGithub },
                            { href: "https://linkedin.com", icon: FaLinkedin },
                            {
                                href: "https://instagram.com",
                                icon: FaSquareInstagram,
                            },
                        ].map(({ href, icon: Icon }, index) => (
                            <motion.a
                                key={index}
                                href={href}
                                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                whileTap={{ scale: 0.9 }}
                                target="_blank" // Add target="_blank"
                                rel="noreferrer"
                            >
                                <Icon size={24} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </motion.section>
        </motion.div>
    );
}
