import "../i18n"
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t } = useTranslation()
    return (
        <header className="py-5" style={{ backgroundImage: `url('/img/baner.jpg')`, backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="text-center my-5 py-3">
                <h1 className="text-white fs-2 fw-bolder">{t("john_kowalsky")}</h1>
                <p className="text-white-50 fs-4 mb-0">{t("journeys")}</p>
                <p className="text-white-50 fs-4 mb-0">{t("weddings")}</p>
                <p className="text-white-50 fs-4 mb-0">{t("occasional_trips")}</p>
            </div>
        </header>
    )
}

export default Header