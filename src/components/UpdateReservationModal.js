import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { Modal } from "react-bootstrap"
import moment from "moment"
import Vehicle from "./Vehicle"

const UpdateReservationModal = ({ reservation, updateModalIsOpen, hideUpdate }) => {
    const [vehicles, setVehicles] = useState([])

    const [customerName, setCustomerName] = useState(reservation.customerName)
    const [vehicleId, setVehicleId] = useState(reservation.vehicle.id)
    const [destination, setDestination] = useState(reservation.destination)
    const [reservationType, setReservationType] = useState(reservation.type)
    const [departureDate, setDepartureDate] = useState(moment(reservation.departureDate).format('YYYY-MM-DD'))
    const [departureTime, setDepartureTime] = useState(moment(reservation.departureDate).format('HH:mm'))

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

    const handleUpdateReservation = () => {
        console.log('UPDATE')
        console.log(reservation)
    }

    return (
        <Modal show={updateModalIsOpen} onHide={hideUpdate}>
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
                <button onClick={hideUpdate} className="btn btn-secondary">Cancel</button>
                <button onClick={handleUpdateReservation} className="btn btn-primary">Update</button>
            </Modal.Footer>
        </Modal>
    )
}

export default UpdateReservationModal