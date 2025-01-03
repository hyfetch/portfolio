import React from 'react';

type SocialLinkProps = {
    href: string;
    src: string;
    alt: string;
    label: string;
};

const socialLinks: SocialLinkProps[] = [
    { href: "https://bsky.app/profile/mero.lol", src: "/img/platforms/bsky.svg", alt: "Bluesky", label: "Bluesky" },
    { href: "https://github.com/hyfetch", src: "/img/platforms/github.svg", alt: "GitHub", label: "GitHub" },
    { href: "https://steamcommunity.com/id/hyfetchl", src: "/img/platforms/steam.svg", alt: "Steam", label: "Steam" },
    { href: "https://namemc.com/profile/Mstrv.1", src: "/img/platforms/namemc.svg", alt: "NameMC", label: "Minecraft" },
    { href: "https://meow.social/@mero", src: "/img/platforms/meowsocial.png", alt: "Mastodon", label: "meow.social" },
    { href: "https://reddit.com/u/hyfetch", src: "/img/platforms/reddit.svg", alt: "Reddit", label: "Reddit" },
    { href: "https://x.com/hyfetch", src: "/img/platforms/twitter.svg", alt: "Twitter", label: "Twitter" },
    { href: "https://vrchat.com/home/user/usr_09c038af-bde8-4c49-9c35-a72466b54851", src: "/img/platforms/VRChat.svg", alt: "VRChat", label: "VRChat" },
    { href: "https://www.furaffinity.net/user/mstrv", src: "/img/platforms/furaffinity.svg", alt: "FurAffinity", label: "FurAffinity" },
    { href: "https://www.roblox.com/users/6226531012/profile", src: "/img/platforms/roblox.svg", alt: "Roblox", label: "Roblox" },
];

const FindMe: React.FC = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Socials</h2>
            <nav aria-label="Social Media Links">
               <p className="platforms flex justify-start space-x-4 mb-8">
                    {socialLinks.map((link) => (
                        <SocialLink key={link.href} {...link} />
                    ))}
                    </p>
                    {
                        /**
                         * Okay, personally i just found this ugly as an object in an <ul></ul>
                         * why? mainly because it had the stupid ass dot before it which... didn't look nice, it's mostly a personal portfolio so i do it so i personally like how it looks ^w^
                         * Wouldn't it be a better coding practice to do in <ul> / <li>? Yeah, and it's none of my business how a professional developer would handle it, i currently do Frontend for a hobby so it doesn't really matter if i follow the "Best" coding 
                         * tl;dr not the best coding practice, but as long as it isn't a security vurnerability i'll do it my way 🤷‍♂️
                         */
                    }
            </nav>
        </div>
    );
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, src, alt, label }) => {
    return (
            <a href={href} className="platform" aria-label={label}>
                <img src={src} height="32" width="32" alt={alt} />
                <div className="platform-tooltip">{label}</div>
            </a>
    );
};

export default FindMe;
