import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { Modal } from "react-bootstrap"
import moment from "moment"
import Vehicle from "./Vehicle"
import { useNavigate } from "react-router-dom"

const UpdateReservationModal = ({ reservation, updateModalIsOpen, hideUpdate, fetchReservations }) => {
    const [vehicles, setVehicles] = useState([])

    const [customerName, setCustomerName] = useState(reservation.customerName)
    const [vehicleId, setVehicleId] = useState(reservation.vehicle.id)
    const [destination, setDestination] = useState(reservation.destination)
    const [reservationType, setReservationType] = useState(reservation.type)
    const [departureDate, setDepartureDate] = useState(moment(reservation.departureDate).format('YYYY-MM-DD'))
    const [departureTime, setDepartureTime] = useState(moment(reservation.departureDate).format('HH:mm'))

    const navigate = useNavigate()

    const fetchVehicles = async () => {
        const url = '/vehicles'
        axios.get(url)
            .then((response) => {
                setVehicles(response.data)
            })
            .catch((error) => {
                const message = error.response.data.message ? error.response.data.message : 'Unknown error'
                toast.error(message)
            })
    }

    useEffect(() => {
        fetchVehicles()
    }, [])

    const handleHideUpdate = () => {
        setCustomerName(reservation.customerName)
        setVehicleId(reservation.vehicle.id)
        setDestination(reservation.destination)
        setReservationType(reservation.type)
        setDepartureDate(moment(reservation.departureDate).format('YYYY-MM-DD'))
        setDepartureTime(moment(reservation.departureDate).format('HH:mm'))
        
        hideUpdate()
    }

    const handleUpdateReservation = async () => {
        const validationResult = validateForm()
        if (validationResult !== '') {
            toast.error(validationResult)
            return
        }

        const date = moment(departureDate + ' ' + departureTime, 'YYYY-MM-DD HH:mm').toDate()
        const token = localStorage.getItem('token')
        console.log('UPDATE')
        console.log(reservation)
        const url = '/reservations'
        const requestBody = {
            id: reservation.id,
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

        await axios.put(url, requestBody, config)
            .then((response) => {
                toast.success(`Reservation to ${destination} updated`)

                fetchReservations()
                hideUpdate()
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

    const validateForm = () => {
        const customerNamePattern = /^[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż][A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż .&-]{2,}$/
        const destinationPattern = /^[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż][A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż .-]{2,}$/

        var result = ''

        if (customerName === null || !customerNamePattern.test(customerName)) {
            result += 'Wrong customer name. '
        }

        if (destination === null || !destinationPattern.test(destination)) {
            result += 'Wrong destination. '
        }

        const date = moment(departureDate + ' ' + departureTime, 'YYYY-MM-DD HH:mm').toDate()
        const currentDate = new Date()
        if (date < currentDate) {
            result += 'Cannot create reservation for the past. '
        }

        return result
    }

    return (
        <Modal show={updateModalIsOpen} onHide={handleHideUpdate}>
            <Modal.Header>
                <Modal.Title>Update reservation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label className="form-label mb-2">Customer or company name</label>
                    <input 
                        type='text' 
                        className="form-control mb-3"
                        placeholder="Name" 
                        defaultValue={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />

                    <label className="form-label mb-2">Vehicle</label>
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

                    <label className="form-label mb-2">Journey destination</label>
                    <input 
                        type='text' 
                        className="form-control mb-3" 
                        placeholder="Destination" 
                        defaultValue={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />

                    <div className="row">
                        <span className="form-label mb-2">Journey type</span>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="type" value="WEDDING" 
                            checked={reservationType === 'WEDDING'}
                            onChange={(e) => setReservationType(e.target.value)} />
                        <label className="form-check-label">Wedding</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="type" value="FUNERAL" 
                            checked={reservationType === 'FUNERAL'}
                            onChange={(e) => setReservationType(e.target.value)} />
                        <label className="form-check-label">Funeral</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="type" value="TRIP"
                            checked={reservationType === 'TRIP'} 
                            onChange={(e) => setReservationType(e.target.value)} />
                        <label className="form-check-label">Trip</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="type" value="PILGRIMAGE" 
                            checked={reservationType === 'PILGRIMAGE'}
                            onChange={(e) => setReservationType(e.target.value)} />
                        <label className="form-check-label">Pilgrimage</label>
                    </div>
                    <div className="form-check form-check-inline mb-3">
                        <input className="form-check-input" type="radio" name="type" value="OTHER" 
                            checked={reservationType === 'OTHER'}
                            onChange={(e) => setReservationType(e.target.value)} />
                        <label className="form-check-label">Other</label>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label className="form-label mb-2">Departure date</label>
                            <input 
                                type="date" 
                                className="form-control mb-3" 
                                value={departureDate}
                                onChange={(e) => setDepartureDate(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <label className="form-label mb-2">Hour</label>
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
                <button onClick={handleHideUpdate} className="btn btn-secondary">Cancel</button>
                <button onClick={handleUpdateReservation} className="btn btn-primary">Update</button>
            </Modal.Footer>
        </Modal>
    )
}

export default UpdateReservationModal