import { FestivalActivities } from "./components/festivalActivities/FestivalActivities"
import { FestivalBands } from "./components/festivalBands/FestivalBands"
import { FestivalDesc } from "./components/festivalDesc/FestivalDesc"


export const FestivalInfo = () => {
    return (
        <div
        id="festival-info"
        className="w-full md:mt-[180px] mt-[220px] overflow-hidden"
        >
            <FestivalDesc />
            <FestivalActivities />
            <FestivalBands />
        </div>
    )
}