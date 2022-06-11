import { useState } from "react";
import moment from "moment"
import axios from "axios";
import { FaTrashAlt, FaPencilAlt, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UpdateReservationModal from "./UpdateReservationModal";

const Reservation = ({ reservation, fetchReservations }) => {
    const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false)

    const showUpdate = () => {
        setUpdateModalIsOpen(true)
    }

    const hideUpdate = () => {
        setUpdateModalIsOpen(false)
    }

    const navigate = useNavigate()

    const date = Date.parse(reservation.departureDate)
    const formattedDate = moment(date).format('YYYY-MM-DD HH:mm')

    const handleCancel = async () => {
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
                console.log(error)
                if (error.response.status === 403) {
                    toast.error('User is not logged in')
                    localStorage.removeItem('token')
                    navigate('/login')
                    return
                }

                const message = error.response.data.message ? error.response.data.message : 'Unknown error'
                toast.error(message)
            })
    }

    const handleDelete = async () => {
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
                console.log(error)
                if (error.response.status === 403) {
                    toast.error('User is not logged in')
                    localStorage.removeItem('token')
                    navigate('/login')
                    return
                }

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
                <FaPencilAlt role={'button'} onClick={showUpdate} className='mx-1' />
                <FaTimes role={'button'} onClick={handleCancel} className='mx-1' />
                <FaTrashAlt role={'button'} onClick={handleDelete} className='mx-1' />
            </td>
            <UpdateReservationModal
                reservation={reservation}
                updateModalIsOpen={updateModalIsOpen}
                hideUpdate={hideUpdate} 
                fetchReservations={fetchReservations}
            />
        </tr>
    )
}

export default Reservation