import { useState, useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useTranslation } from "react-i18next"

const arrayOfLanguages = [
    { name: 'pl', display: 'Polski' },
    { name: 'en', display: 'English' },
];

export default function LanguageDropdown() {
    const [language, setLanguage] = useState('pl');
    const { t, i18n } = useTranslation()

    useEffect(() => {
        modifyLanguage(language);
    }, []);

    function modifyLanguage(language) {
        // localStorage.setItem('lang', language)
        i18n.changeLanguage(language).then(r => {})
    }

    let storedLanguage = i18n.resolvedLanguage ? i18n.resolvedLanguage : null

    function getPreferredLanguage() {
        if (storedLanguage) {
            return storedLanguage;
        }

        return 'en';
    }

    function setPreferredLanguage(language) {
        modifyLanguage(language)
        setLanguage(language);
    }

    return (
        <NavDropdown
            title={
                <>
                    {
                        arrayOfLanguages.find((lang) => lang.name.toLowerCase() === language)
                            ?.display
                    }{' '}
                </>
            }
        >
            {arrayOfLanguages.map((lang) => {
                const active = language === lang.name.toLowerCase();
                return (
                    <NavDropdown.Item
                        key={lang.name}
                        className={active ? 'active' : ''}
                        onClick={() => {
                            setPreferredLanguage(lang.name.toLocaleLowerCase());
                        }}
                    >
                        {' '}
                        {lang.display} {active ? '✔️' : ''}
                    </NavDropdown.Item>
                );
            })}
        </NavDropdown>
    );
}