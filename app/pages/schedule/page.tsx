{/*Scheduling Page - Working Calendar - Preview Cards - Recent Results */ }

import Schedule from '@/components/Calendar';
import ScheduleCard from '@/components/PreviewCard';


export default function SchedulePage() {
    return (
        <>
            <div className="h-screen">
                <h1 className="text-6xl p-6 font-fugaz tracking-wide underline decoration-amber-500 bg-gray-900 ">SCHEDULE</h1>
                <Schedule />
                <ScheduleCard />
            </div>
        </>
    )
};