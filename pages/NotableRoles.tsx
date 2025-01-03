import React from 'react';

type RoleLinkProps = {
    href: string;
    src: string;
    alt: string;
    label: string;
};

const RoleLink: React.FC<RoleLinkProps> = ({ href, src, alt, label }) => {
    return (
        <a className='server mr-4' href={href}>
            <img width="32" height="32" src={src} alt={alt} />
            <span className="server-tooltip">{label}</span>
        </a>
    );
};

export default function NotableRoles() {
    const roles = [
        { href: "https://discord.gg/ntts", src: "https://href.mero.gay/images/nttsimage", alt: "NTTS", label: 'Mod @ NTTS' },
        { href: "https://discord.gg/narpy", src: "https://cdn.discordapp.com/icons/866749259209900084/fe8918044626715ebd5de24189e45f49.webp?size=1024&format=webp&width=0&height=281", alt: "Narpy", label: 'Manager @ Narpy' },
        { href: "https://discord.gg/kuromicord", src: "https://cdn.discordapp.com/icons/1033955294193123338/559e838f859ce10b26388c8f9f5be9d9.webp?size=1024&width=563&height=563", alt: "Kuromicafe", label: 'Admin @ Kuromicafe' },
    ];

    return (
        <div className="notable-stuff mb-8">
            <h2 className="text-2xl font-bold mb-4">Roles</h2>
            <div className="flex flex-wrap"> 
                {roles.map((role, index) => (
                    <RoleLink key={index} {...role} />
                ))}
            </div>
        </div>
    );
}
