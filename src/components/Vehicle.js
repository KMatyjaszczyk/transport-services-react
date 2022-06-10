const Vehicle = ({ vehicle }) => {
    return (
        <>
            {`${vehicle.brand} ${vehicle.model}, ${vehicle.numberOfSeats} seats, ${vehicle.productionYear}`}
        </>
    )
}

export default Vehicle