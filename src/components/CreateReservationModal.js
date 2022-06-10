import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { Modal } from "react-bootstrap"
import Vehicle from "./Vehicle"

const CreateReservationModal = ({ createModalIsOpen, hideCreate }) => {
    const [vehicles, setVehicles] = useState([])

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

    const handleCreateReservation = () => {
        console.log('SAVE')
        hideCreate()
    }

    return (
        <Modal show={createModalIsOpen} onHide={hideCreate}>
            <Modal.Header>
                <Modal.Title>Create reservation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label className="form-label mb-2">Customer or company name</label>
                    <input type='text' className="form-control mb-3" placeholder="Name" />

                    <label className="form-label mb-2">Vehicle</label>
                    <select className="form-select mr-sm-2 mb-3">
                        {vehicles.map((vehicle) =>
                            <option key={vehicle.id} value={vehicle.id}>
                                <Vehicle vehicle={vehicle} />
                            </option>)}
                    </select>

                    <label className="form-label mb-2">Journey destination</label>
                    <input type='text' className="form-control mb-3" placeholder="Destination" />

                    <div className="row">
                        <span className="form-label mb-2">Journey type</span>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="type" value="WEDDING" />
                        <label className="form-check-label">Wedding</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="type" value="FUNERAL" />
                        <label className="form-check-label">Funeral</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="type" value="TRIP" />
                        <label className="form-check-label">Trip</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="type" value="PILGRIMAGE" />
                        <label className="form-check-label">Pilgrimage</label>
                    </div>
                    <div className="form-check form-check-inline mb-3">
                        <input className="form-check-input" type="radio" name="type" value="OTHER" />
                        <label className="form-check-label">Other</label>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label className="form-label mb-2">Departure date</label>
                            <input type="date" className="form-control mb-3" />
                        </div>
                        <div className="col">
                            <label className="form-label mb-2">Hour</label>
                            <input type="time" className="form-control mb-3" />
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={hideCreate} className="btn btn-secondary">Cancel</button>
                <button onClick={handleCreateReservation} className="btn btn-primary">Create</button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateReservationModal