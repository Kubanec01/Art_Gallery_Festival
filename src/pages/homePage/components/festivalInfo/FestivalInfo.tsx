import { FestivalActivities } from "./components/festivalActivities/FestivalActivities"
import { FestivalBands } from "./components/festivalBands/FestivalBands"
import { FestivalDesc } from "./components/festivalDesc/FestivalDesc"


export const FestivalInfo = () => {
    return (
        <div
        className="w-full overflow-hidden"
        >
            <FestivalDesc />
            <FestivalActivities />
            <FestivalBands />
        </div>
    )
}