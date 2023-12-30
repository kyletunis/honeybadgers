import TeamTable from "@/components/TeamTable";

export default function TeamPage() {
    return (
        <>
            <div className="mx-auto max-w-7xl">
                <h1 className="text-6xl p-6 font-fugaz tracking-wide underline decoration-amber-500 bg-gray-900 ">ROSTER</h1>
                <TeamTable />
            </div>
        </>
    )
};