import "../i18n"
import { useTranslation } from "react-i18next";

const Vehicle = ({ vehicle }) => {
    const { t } = useTranslation()

    return (
        <>
            {`${vehicle.brand} ${vehicle.model}, ${vehicle.numberOfSeats} ${t('vehicle_seats')}, ${vehicle.productionYear}`}
        </>
    )
}

export default Vehicle