import React from "react";

export default function ResumeModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl w-[90%] max-w-3xl shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                >
                    ✕
                </button>
                <h2 className="text-xl font-bold mb-4">My Resume</h2>
                <iframe
                    src="/img/Resume-Stijn_Walravens.pdf"
                    className="w-full h-[500px] border"
                    title="Resume PDF"
                />
                <div className="mt-4 flex justify-end">
                    <a
                        href="/img/Resume-Stijn_Walravens.pdf"
                        download
                        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
}
