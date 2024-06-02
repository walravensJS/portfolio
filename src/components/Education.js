import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GET_EDUCATION } from "../graphql/queries";
import { useQuery } from "@apollo/client";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
    const { loading, error, data } = useQuery(GET_EDUCATION);
    const eduItems = useRef([]);

    useEffect(() => {
        if (!loading && !error) {
            data.educations.forEach((edu, index) => {
                gsap.fromTo(
                    eduItems.current[index],
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: eduItems.current[index],
                            start: "top 80%",
                            end: "top 60%",
                            scrub: true,
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        }
    }, [data, loading, error]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    const sortedEducations = data.educations.slice().sort((a, b) => {
        const periodA = new Date(a.period.split(" - ")[1]);
        const periodB = new Date(b.period.split(" - ")[1]);

        const ongoingA = a.period.toLowerCase().includes("now");
        const ongoingB = b.period.toLowerCase().includes("now");

        if (ongoingA && ongoingB) {
            const startDateA = new Date(a.period.split(" - ")[0]);
            const startDateB = new Date(b.period.split(" - ")[0]);
            return startDateA - startDateB;
        } else if (ongoingA) {
            return -1;
        } else if (ongoingB) {
            return 1;
        } else {
            return periodB - periodA;
        }
    });

    return (
        <div className="education">
            <h1>Education</h1>
            {sortedEducations.map((item, index) => (
                <div
                    key={item.title}
                    className="edu-item"
                    ref={(el) => (eduItems.current[index] = el)}
                >
                    <div className="edu-top">
                        <h4>{item.title}</h4>
                        <p className="coure-period">{item.period}</p>
                    </div>
                    <p className="course-name">{item.course}</p>
                    <hr></hr>
                </div>
            ))}
        </div>
    );
}
