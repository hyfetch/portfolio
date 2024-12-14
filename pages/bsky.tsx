import { useEffect } from 'react';

export default function Bsky() {
    useEffect(() => {
        const hostname = window.location.hostname;
        const redirectUrl = hostname === "mero.gay" || hostname === "mero.lol"
            ? `https://bsky.app/profile/${hostname}`
            : "https://bsky.app/profile/mero.gay";
        window.location.href = redirectUrl;
    }, []);
}

