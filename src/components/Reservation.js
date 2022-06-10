import moment from "moment"
import axios from "axios";
import { FaTrashAlt, FaPencilAlt, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const Reservation = ({ reservation, fetchReservations }) => {
    const date = Date.parse(reservation.departureDate)
    const formattedDate = moment(date).format('YYYY-MM-DD hh:mm')

    const handleCancel = async () => {
        console.log(`Cancel ${reservation.id}`)
        const url = `/reservations/${reservation.id}`
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        await axios.put(url, null, config)
            .then((response) => {
                toast.success('Reservation cancelled')
                fetchReservations()
            })
            .catch((error) => {
                const message = error.response.data.message ? error.response.data.message : 'Unknown error'
                toast.error(message)
            })
    }

    const handleDelete = async () => {
        console.log(`Delete ${reservation.id}`)
        const url = `/reservations/${reservation.id}`
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        await axios.delete(url, config)
            .then((response) => {
                toast.success('Reservation deleted')
                fetchReservations()
            })
            .catch((error) => {
                const message = error.response.data.message ? error.response.data.message : 'Unknown error'
                toast.error(message)
            })
    }

    return (
        <tr>
            <td>{reservation.customerName}</td>
            <td>{reservation.destination}</td>
            <td>{formattedDate}</td>
            <td>{reservation.vehicle.brand}</td>
            <td>{reservation.status}</td>
            <td>
                <FaPencilAlt role={'button'} className='mx-1' />
                <FaTimes role={'button'} onClick={handleCancel} className='mx-1' />
                <FaTrashAlt role={'button'} onClick={handleDelete} className='mx-1' />
            </td>
        </tr>
    )
}

export default Reservation