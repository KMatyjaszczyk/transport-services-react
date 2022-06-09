import Vehicles from "./Vehicles"

const About = () => {
    return (
        <div>
            <section className="py-5">
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h2>Complex transport services</h2>
                            <p className="lead">We offer services in passenger transport sector in Poland</p>
                            <p className="my-1">
                                With us you will plan your wedding or unforgetable trip in any place of the country.
                                Because of us integrative or school trip will not be a difficult challenge. We will support
                                people arrival on your loved person's funeral.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-5 bg-image-full" style={{ backgroundImage: `url('img/sekcja1.jpg'` }}>
                <div style={{ height: 20 + 'rem' }}></div>
            </div>
            <section className="py-5">
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h2>30 years of experience</h2>
                            <p className="lead">Our services give satisfaction to our customers for over three decades</p>
                            <p className="my-1">
                                Beginning of ensuring transport connections on the area of Niedźwiada commune and town of Lubartów,
                                we had been carrying our activity on bigger area. During our's company development, we had been
                                spreading offer for new services.
                            </p>
                            <p className="my-1">
                                Today we work in many sectors of passenger transport. Offering both regular communication lines,
                                individual orders and cooperation with enterprices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-5 bg-image-full" style={{ backgroundImage: `url('img/sekcja2.jpg'` }}>
                <div style={{ height: 20 + 'rem' }}></div>
            </div>
            <section className="py-5">
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h2>Professionalism</h2>
                            <p className="lead">Experienced drivers is the basis</p>
                            <p className="my-1">
                                Our employees are highly qualificated drivers with many years of experience
                                in transport sector.
                            </p>
                            <p className="my-1">
                                We are characterized by high level of personal culture, ensuring nice and
                                professional atmosphere during journey.
                            </p>
                            <p className="my-1">
                                In our company we believe in the rule, that satisfied  customer is our
                                best advertisement.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
            <div className="py-5 bg-image-full" style={{ backgroundImage: `url('img/sekcja3.jpg'` }}>
                <div style={{ height: 20 + 'rem' }}></div>
            </div>
            <section className="py-5">
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h2>Offer</h2>
                            <p className="lead">Vehicle fleet well suited to your needs</p>
                            <p className="my-1">
                                We have a wide choice of vehicles, depending of number of passengers
                                and customer's individual preferences.
                            </p>
                            <Vehicles />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About