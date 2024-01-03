{/*Scheduling Page - Working Calendar - Preview Cards - Recent Results */ }
import H1 from '@/components/H1';
import Schedule from '@/components/Calendar';
import ScheduleCard from '@/components/PreviewCard';

export default function SchedulePage() {
    return (
        <>
            <H1>SCHEDULE</H1>
            <Schedule />
            <ScheduleCard />
        </>
    )
};