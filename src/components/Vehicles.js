import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import Vehicle from "./Vehicle"

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        const getVehicles = async () => {
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

        getVehicles()
    })

    return (
        <ul className="list-group my-2">
            {vehicles.map((vehicle) => (<Vehicle vehicle={vehicle}/>))}
        </ul>
    )
}

export default Vehicles