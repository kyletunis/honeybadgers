import  Schedule  from '@/components/Calendar';
import ScheduleCard from '@/components/ScheduleCard';


export default function SchedulePage() {
    return (
        <>
            <h1 className="text-6xl p-6 font-fugaz tracking-wide underline decoration-amber-500 bg-gray-900 ">SCHEDULE</h1>
            <Schedule />
            <ScheduleCard />
        </>
    )
};