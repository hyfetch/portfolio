import React from 'react';
import { memo } from 'react';
import { useLocalization } from './LocalizationContext'; 

const Footer: React.FC = () => {
    const { localization } = useLocalization();

    if (!localization) {
        return <div aria-live="polite">Loading...</div>; 
    }

    const { footerText1, footerText2, contactLinkText } = localization;

    return (
        <footer className="footer">
            <p>{footerText1}</p>
            <p>
                {footerText2} 
                <a 
                    href="https://hmu.mero.gay" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    {contactLinkText}
                </a>
            </p>
        </footer>
    );
}

export default Footer;
