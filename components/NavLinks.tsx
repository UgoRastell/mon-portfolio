"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
    { id: "about", label: "À propos" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projets" },
    { id: "experience", label: "Expérience" },
    { id: "education", label: "Formation" },
];

export default function NavLinks() {
    const [active, setActive] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -55% 0px" },
        );

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {sections.map(({ id, label }) => (
                <Link
                    key={id}
                    href={`#${id}`}
                    className={`hover:underline decoration-2 underline-offset-4 ${
                        active === id ? "underline" : ""
                    }`}
                >
                    {label}
                </Link>
            ))}
            <Link href="/cv" className="hover:underline decoration-2 underline-offset-4">
                CV
            </Link>
        </>
    );
}
