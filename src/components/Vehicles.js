import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import Vehicle from "./Vehicle"

const Vehicles = () => {
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

    return (
        <ul className="list-group my-2">
            {vehicles.map((vehicle) => (<Vehicle key={vehicle.id} vehicle={vehicle}/>))}
        </ul>
    )
}

export default Vehicles