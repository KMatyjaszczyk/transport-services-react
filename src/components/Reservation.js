import moment from "moment"

const Reservation = ({ reservation }) => {
    let date = Date.parse(reservation.departureDate)
    let formattedDate = moment(date).format('YYYY-MM-DD hh:mm')

    return (
        <tr>
            <td>{reservation.customerName}</td>
            <td>{reservation.destination}</td>
            <td>{formattedDate}</td>
            <td>{reservation.vehicle.brand}</td>
            <td>{reservation.status}</td>
            <td>BUTTONS HERE</td>
        </tr>
    )
}

export default Reservation