import React from 'react';
import { useLocalization } from './LocalizationContext'; // Adjust the path as necessary

export default function Footer() {
    const { localization } = useLocalization();

    if (!localization) {
        return <div>Loading...</div>; // Loading state
    }

    return (
        <footer className="footer">
            <p>{localization.footerText1}</p>
            <p>{localization.footerText2} <a href="https://contact.mero.lol" rel="noopener noreferrer">{localization.contactLinkText}</a></p>
        </footer>
    );
}
