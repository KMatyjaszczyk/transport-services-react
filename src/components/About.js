import Vehicles from "./Vehicles"
import "../i18n"
import { useTranslation } from "react-i18next";
import Carousel from "./Carousel";

const About = () => {
    const { t } = useTranslation()

    return (
        <div>
            <section className="py-5">
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h2>{t("about_section1_header")}</h2>
                            <p className="lead">{t("about_section1_lead")}</p>
                            <p className="my-1">{t("about_section1_text")}</p>
                        </div>
                    </div>
                </div>
            </section>
            <Carousel></Carousel>
            <section className="py-5">
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h2>{t("about_section2_header")}</h2>
                            <p className="lead">{t("about_section2_lead")}</p>
                            <p className="my-1">{t("about_section2_text1")}</p>
                            <p className="my-1">{t("about_section2_text2")}</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-5" style={{ backgroundImage: `url('img/section1.jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div style={{ height: 20 + 'rem' }}></div>
            </div>
            <section className="py-5">
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h2>{t("about_section3_header")}</h2>
                            <p className="lead">{t("about_section3_lead")}</p>
                            <p className="my-1">{t("about_section3_text1")}</p>
                            <p className="my-1">{t("about_section3_text2")}</p>
                            <p className="my-1">{t("about_section3_text3")}</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-5" style={{ backgroundImage: `url('img/section2.jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div style={{ height: 20 + 'rem' }}></div>
            </div>
            <section className="py-5">
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h2>{t("about_offer_header")}</h2>
                            <p className="lead">{t("about_offer_lead")}</p>
                            <p className="my-1">{t("about_offer_text")}</p>
                            <Vehicles />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About