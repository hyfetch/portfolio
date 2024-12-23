import React from 'react';
import { useLocalization } from './LocalizationContext';

type SkillLinkProps = {
    href: string;
    src: string;
    alt: string;
    label: string;
};

const SkillLink: React.FC<SkillLinkProps> = ({ href, src, alt, label }) => {
    return (
        <a className='language' href={href}>
            <img width="32" height="32" src={src} alt={alt} />
            <span className="language-tooltip">{label}</span>
        </a>
    );
};

export default function Skills() {
    const { localization } = useLocalization();

    const categories = [
        {
            title: localization ? localization['frontEnd'] : 'Loading...',
            links: [
                { href: "https://www.javascript.com/", src: "/img/skills/js.svg", alt: "JavaScript", label: "JavaScript" },
                { href: "https://react.dev", src: "/img/skills/react.svg", alt: "React", label: "React" },
                { href: "https://nextjs.org/", src: "/img/skills/nextjs.svg", alt: "Next.JS", label: "Next.JS" },
                { href: "https://electronjs.org/", src: "/img/skills/electron.svg", alt: "Electron", label: "Electron" },
            ]
        },
        {
            title: localization ? localization['backEnd'] : 'Loading...',
            links: [
                { href: "https://flask.palletsprojects.com/", src: "/img/skills/flask.svg", alt: "Flask", label: "Flask" },
                { href: "https://tauri.app/", src: "/img/skills/tauri.svg", alt: "Tauri", label: "Tauri" },
                { href: "https://discordpy.readthedocs.io/en/stable/", src: "/img/platforms/discord.svg", alt: "discord.py", label: "discord.py" },
                { href: "https://www.python.org/", src: "/img/skills/python.svg", alt: "Python", label: "Python" },
                { href: "https://www.rust-lang.org/", src: "/img/skills/rust.svg", alt: "Rust", label: "Rust" },
                { href: "https://en.wikipedia.org/wiki/C%2B%2B", src: "/img/skills/cpp_logo.svg", alt: "C++", label: "C++" },
                { href: "https://en.wikipedia.org/wiki/X86_assembly_language", src: "/img/skills/asm.svg", alt: "Assembly", label: "Assembly" },
                { href: "https://en.wikipedia.org/wiki/C_(programming_language)", src: "/img/skills/c.svg", alt: "C", label: "C" },
                { href: "https://en.wikipedia.org/wiki/TypeScript", src: "/img/skills/ts.svg", alt: "TypeScript", label: "TypeScript" },
            ]
        },
    ];

    return (
        <div className="notable-stuff mb-8">
            {categories.map((category, index) => (
                <div key={index} className="mb-6">
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                    <ul className="flex flex-wrap space-x-4">
                        {category.links.map((link, linkIndex) => (
                            <SkillLink key={linkIndex} {...link} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

