import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import Reservations from "./Reservations"
import CreateReservationModal from "./CreateReservationModal"

const ReservationPanel = () => {
    const [reservations, setReservations] = useState([])
    const [createModalIsOpen, setCreateModalIsOpen] = useState(false)

    const navigate = useNavigate()

    const showCreate = () => {
        setCreateModalIsOpen(true);
    }

    const hideCreate = () => {
        setCreateModalIsOpen(false);
    }

    const fetchReservations = async () => {
        const url = '/reservations/user'
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        await axios.get(url, config)
            .then((response) => {
                setReservations(response.data)
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

    useEffect(() => {
        fetchReservations()
    }, [])

    return (
        <div className="mx-xl-5 px-xl-5">
            <div className="mx-xl-5 px-xl-5">
                <section className="py-3">
                    <div className="mt-5">
                        <div className="container">
                            <h2>Your reservations</h2>
                        </div>
                    </div>
                </section>
                <div className="my-5">
                    {reservations.length === 0 ?
                        <>
                            <img className="rounded mx-auto d-block" src="/img/empty-state.png" alt="No reservations" />
                            <p className="text-center">You have no reservations</p>
                            <div className="mt-3 text-center">
                                <button onClick={showCreate} className="btn btn-primary">Create reservation</button>
                            </div>
                        </>
                        :
                        <>
                            <div className="mt-3">
                                <button onClick={showCreate} className="btn btn-primary">Create reservation</button>
                            </div>
                            <Reservations reservations={reservations} fetchReservations={fetchReservations} />
                        </>
                    }
                </div>
            </div>
            <CreateReservationModal createModalIsOpen={createModalIsOpen} hideCreate={hideCreate} fetchReservations={fetchReservations} />
        </div>
    )
}

export default ReservationPanel