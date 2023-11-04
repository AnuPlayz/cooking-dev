import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import ExpenseGraph from "@/components/ExpenseGraph";
import GoalsChart from "@/components/GoalsChart";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-slate-950 flex flex-row">
      <Navbar />
      <div className="grow flex flex-col">
        <Topbar />
        <div className="flex flex-row flex-wrap p-4 gap-4">
          <ExpenseGraph/>
          <GoalsChart/>
        </div>
      </div>
    </div>
  )
}