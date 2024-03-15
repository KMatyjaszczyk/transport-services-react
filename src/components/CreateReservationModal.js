import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { Modal } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import moment from "moment"
import Vehicle from "./Vehicle"
import "../i18n"
import { useTranslation } from "react-i18next";

const CreateReservationModal = ({ createModalIsOpen, hideCreate, fetchReservations }) => {
    const [vehicles, setVehicles] = useState([])
    const { t } = useTranslation()

    const [customerName, setCustomerName] = useState('')
    const [vehicleId, setVehicleId] = useState('1')
    const [destination, setDestination] = useState('')
    const [reservationType, setReservationType] = useState('WEDDING')
    const [departureDate, setDepartureDate] = useState(moment(new Date()).format('YYYY-MM-DD'))
    const [departureTime, setDepartureTime] = useState(moment(new Date()).format('HH:mm'))

    const navigate = useNavigate()

    const fetchVehicles = async () => {
        const url = '/vehicles'
        axios.get(url)
            .then((response) => {
                setVehicles(response.data)
            })
            .catch((error) => {
                const message = error.response.data.message ? error.response.data.message : t("toast_unknownError")
                toast.error(message)
            })
    }

    useEffect(() => {
        fetchVehicles()
    }, [])

    const handleCreateReservation = async () => {
        const validationResult = validateForm()
        if (validationResult !== '') {
            toast.error(validationResult)
            return
        }

        const date = moment(departureDate + ' ' + departureTime, 'YYYY-MM-DD HH:mm').toDate()
        const token = localStorage.getItem('token')
        const url = '/reservations'
        const requestBody = {
            customerName: customerName,
            vehicleId: vehicleId,
            reservationType: reservationType,
            departureDate: date,
            destination: destination
        }
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        
        await axios.post(url, requestBody, config)
            .then((response) => {
                toast.success(t("toast_createReservation_created"))

                setCustomerName('')
                setVehicleId('1')
                setDestination('')
                setReservationType('WEDDING')
                setDepartureDate(moment(new Date()).format('YYYY-MM-DD'))
                setDepartureTime(moment(new Date()).format('HH:mm'))

                fetchReservations()
                hideCreate()
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

    const validateForm = () => {
        const customerNamePattern = /^[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż][A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż .&-]{2,}$/
        const destinationPattern = /^[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż][A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż .-]{2,}$/

        var result = ''

        if (!customerNamePattern.test(customerName)) {
            result += t("toast_modifyReservation_wrongCustomerName")
        }

        if (!destinationPattern.test(destination)) {
            result += t("toast_modifyReservation_wrongDestination")
        }

        const date = moment(departureDate + ' ' + departureTime, 'YYYY-MM-DD HH:mm').toDate()
        const currentDate = new Date()
        if (date < currentDate) {
            result += t("toast_modifyReservation_wrongDateFromThePast")
        }

        return result
    }

    return (
        <Modal show={createModalIsOpen} onHide={hideCreate}>
            <Modal.Header>
                <Modal.Title>{t("createReservationModal_title")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label className="form-label mb-2">{t("createReservationModal_nameLabel")}</label>
                    <input 
                        type='text' 
                        className="form-control mb-3"
                        placeholder={t("createReservationModal_namePlaceholder")}
                        defaultValue={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />

                    <label className="form-label mb-2">{t("createReservationModal_vehicleLabel")}</label>
                    <select 
                        className="form-select mr-sm-2 mb-3"
                        value={vehicleId}
                        onChange={(e) => setVehicleId(e.target.value)}
                    >
                            {vehicles.map((vehicle) =>
                                <option key={vehicle.id} value={vehicle.id}>
                                    <Vehicle vehicle={vehicle} />
                                </option>)}
                    </select>

                    <label className="form-label mb-2">{t("createReservationModal_destinationLabel")}</label>
                    <input 
                        type='text' 
                        className="form-control mb-3" 
                        placeholder={t("createReservationModal_destinationPlaceholder")}
                        defaultValue={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />

                    <div className="row">
                        <span className="form-label mb-2">{t("createReservationModal_journeyTypeLabel")}</span>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="type" value="WEDDING" 
                            checked={reservationType === 'WEDDING'}
                            onChange={(e) => setReservationType(e.target.value)} />
                        <label className="form-check-label">{t("createReservationModal_journeyTypeWedding")}</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="type" value="FUNERAL" 
                            checked={reservationType === 'FUNERAL'}
                            onChange={(e) => setReservationType(e.target.value)} />
                        <label className="form-check-label">{t("createReservationModal_journeyTypeFuneral")}</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="type" value="TRIP"
                            checked={reservationType === 'TRIP'} 
                            onChange={(e) => setReservationType(e.target.value)} />
                        <label className="form-check-label">{t("createReservationModal_journeyTypeTrip")}</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="type" value="PILGRIMAGE" 
                            checked={reservationType === 'PILGRIMAGE'}
                            onChange={(e) => setReservationType(e.target.value)} />
                        <label className="form-check-label">{t("createReservationModal_journeyTypePilgrimage")}</label>
                    </div>
                    <div className="form-check form-check-inline mb-3">
                        <input className="form-check-input" type="radio" name="type" value="OTHER" 
                            checked={reservationType === 'OTHER'}
                            onChange={(e) => setReservationType(e.target.value)} />
                        <label className="form-check-label">{t("createReservationModal_journeyTypeOther")}</label>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label className="form-label mb-2">{t("createReservationModal_departureDateLabel")}</label>
                            <input 
                                type="date" 
                                className="form-control mb-3" 
                                value={departureDate}
                                onChange={(e) => setDepartureDate(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <label className="form-label mb-2">{t("createReservationModal_hourLabel")}</label>
                            <input 
                                type="time" 
                                className="form-control mb-3" 
                                value={departureTime}
                                onChange={(e) => setDepartureTime(e.target.value)}
                            />
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={hideCreate} className="btn btn-secondary">{t("createReservationModal_cancel")}</button>
                <button onClick={handleCreateReservation} className="btn btn-primary">{t("createReservationModal_create")}</button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateReservationModal