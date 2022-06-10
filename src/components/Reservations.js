import Reservation from "./Reservation"

const Reservations = ({ reservations, setReservations }) => {
    return (
        <div className="mt-2 table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>Booking person</th>
                        <th>Destination</th>
                        <th>Departure date</th>
                        <th>vehicle</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                    { reservations.map((reservation) => (<Reservation key={reservation.id} reservation={reservation} />)) }
                </thead>
            </table>
        </div>
    )
}

export default Reservations