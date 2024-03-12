import Reservation from "./Reservation"
import "../i18n"
import { useTranslation } from "react-i18next";

const Reservations = ({ reservations, setReservations, fetchReservations }) => {
    const { t } = useTranslation()

    return (
        <div className="mt-2 table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>{t("reservations_bookingPerson")}</th>
                        <th>{t("reservations_destination")}</th>
                        <th>{t("reservations_departureDate")}</th>
                        <th>{t("reservations_vehicle")}</th>
                        <th>{t("reservations_status")}</th>
                        <th></th>
                    </tr>
                    { reservations.map((reservation) => (
                        <Reservation key={reservation.id} reservation={reservation} fetchReservations={fetchReservations} />
                    )) }
                </thead>
            </table>
        </div>
    )
}

export default Reservations