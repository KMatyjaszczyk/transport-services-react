import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import Reservations from "./Reservations"

const ReservationPanel = () => {
    const [reservations, setReservations] = useState([])

    const fetchVehicles = async() => {
        const url = '/reservations/user'
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        await axios.get(url, config)
            .then((response) => {
                console.log(response)
                setReservations(response.data)
            })
            .catch((error) => {
                console.error(error)
                const message = error.response.data.message ? error.response.data.message : 'Unknown error'
                toast.error(message)
            })
    }

    useEffect(() => {
        fetchVehicles()
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
                { reservations.length === 0 ?
                    <>
                        <img className="rounded mx-auto d-block" src="/img/empty-state.png" alt="No reservations" />
                        <p className="text-center">You have no reservations</p>
                    </>
                    : <Reservations reservations={reservations} />
                }
                </div>
            </div>
        </div>
    )
}

export default ReservationPanel