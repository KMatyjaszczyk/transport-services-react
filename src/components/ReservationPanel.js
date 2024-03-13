import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import Reservations from "./Reservations"
import CreateReservationModal from "./CreateReservationModal"
import "../i18n"
import { useTranslation } from "react-i18next";

const ReservationPanel = () => {
    const [reservations, setReservations] = useState([])
    const [createModalIsOpen, setCreateModalIsOpen] = useState(false)
    const { t } = useTranslation()

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
                const fetchedReservations = response.data
                if (fetchedReservations.length > 0) {
                    fetchedReservations.sort((a, b) => (a.creationDate > b.creationDate) ? -1 : ((b.creationDate > a.creationDate) ? 1 : 0))
                }
                setReservations(fetchedReservations)
            })
            .catch((error) => {
                console.log(error)
                if (error.response.status === 403) {
                    toast.error(t("toast_userNotLoggedIn"))
                    localStorage.removeItem('token')
                    navigate('/login')
                    return
                }

                const message = error.response.data.message ? error.response.data.message : t("toast_unknownError")
                toast.error(message)
            })
    }

    useEffect(() => {
        fetchReservations()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="mx-xl-5 px-xl-5">
            <div className="mx-xl-5 px-xl-5">
                <section className="py-3">
                    <div className="mt-5">
                        <div className="container">
                            <h2>{t("reservationPanel_yourReservations")}</h2>
                        </div>
                    </div>
                </section>
                <div className="my-5">
                    {reservations.length === 0 ?
                        <>
                            <img className="rounded mx-auto d-block" src="/img/empty-state.png" alt="No reservations" />
                            <p className="text-center">{t("reservationPanel_noReservations")}</p>
                            <div className="mt-3 text-center">
                                <button onClick={showCreate} className="btn btn-primary">{t("reservationPanel_createReservation")}</button>
                            </div>
                        </>
                        :
                        <>
                            <div className="mt-3">
                                <button onClick={showCreate} className="btn btn-primary">{t("reservationPanel_createReservation")}</button>
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