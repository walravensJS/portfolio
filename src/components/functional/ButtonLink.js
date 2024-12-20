import React from "react";

export default function ButtonLink({ href }) {
    return (
        <button className="mt-1 p-2 bg-purple-500 rounded-lg">
            <a href={href} className="text-white">
                See more
            </a>
        </button>
    );
}
