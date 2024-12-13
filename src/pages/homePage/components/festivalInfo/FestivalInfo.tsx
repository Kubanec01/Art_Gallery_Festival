import { FestivalActivities } from "./components/FestivalActivities"
import { FestivalDesc } from "./components/FestivalDesc"


export const FestivalInfo = () => {
    return (
        <div
        className="w-full h-[1200px] overflow-hidden bg-[#151515]"
        >
            <FestivalDesc />
            <FestivalActivities />
        </div>
    )
}