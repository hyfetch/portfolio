import React from 'react';

type SocialLinkProps = {
    href: string;
    src: string;
    alt: string;
    label: string;
};

export default function FindMe() {
    const socialLinks: SocialLinkProps[] = [
        { href: "https://bsky.app/profile/mero.lol", src: "/img/platforms/bsky.svg", alt: "Bluesky", label: "Bluesky" },
        { href: "https://github.com/hyfetch", src: "/img/platforms/github.svg", alt: "GitHub", label: "GitHub" },
        { href: "https://t.me/mstrvlol", src: "/img/platforms/telegram.svg", alt: "Telegram", label: "Telegram" },
        { href: "https://signal.me/#eu/N7yOFvUXG41zhsmm9sF15rtDgD_OqsVM3Ay-fi_yoS5MSKihjahKgpChEkojVWdE", src: "/img/platforms/signal.svg", alt: "Signal", label: "Signal" },
        { href: "https://steamcommunity.com/id/hyfetchl", src: "/img/platforms/steam.svg", alt: "Steam", label: "Steam" },
        { href: "https://namemc.com/profile/Mstrv.1", src: "/img/platforms/namemc.svg", alt: "NameMC", label: "Minecraft" },
        { href: "https://meow.social/@mero", src: "/img/platforms/meowsocial.png", alt: "Mastodon", label: "meow.social" },
        { href: "https://reddit.com/u/hyfetch", src: "/img/platforms/reddit.svg", alt: "Reddit", label: "Reddit" },
        { href: "/Discord", src: "/img/platforms/discord.svg", alt: "Discord", label: "Discord server" },
        { href: "https://x.com/hyfetch", src: "/img/platforms/twitter.svg", alt: "Twitter", label: "Twitter" },
        { href: "https://vrchat.com/home/user/usr_09c038af-bde8-4c49-9c35-a72466b54851", src: "/img/platforms/VRChat.svg", alt: "VRChat", label: "VRChat" },
        { href: "https://www.furaffinity.net/user/mstrv", src: "/img/platforms/furaffinity.svg", alt: "FurAffinity", label: "FurAffinity" },
        { href: "https://www.roblox.com/users/6226531012/profile", src: "/img/platforms/roblox.svg", alt: "Roblox", label: "Roblox" },
    ];

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Socials</h2>
            <div className="platforms flex justify-start space-x-4 mb-8">
                {socialLinks.map((link, index) => (
                    <SocialLink key={index} {...link} />
                ))}
            </div>
        </div>
    );
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, src, alt, label }) => {
    return (
        <a href={href} className="platform">
            <img src={src} height="32" width="32" alt={alt} />
            <div className="platform-tooltip">{label}</div>
        </a>
    );
};
