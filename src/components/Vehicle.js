const Vehicle = ({ vehicle }) => {
    return (
        <li className="list-group-item">
            {`${vehicle.brand} ${vehicle.model}, ${vehicle.numberOfSeats} seats, ${vehicle.productionYear}`}
        </li>
    )
}

export default Vehicle