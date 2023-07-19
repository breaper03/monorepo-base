import { TaskTable } from "../tasks/TasksTable";
export const Dashboard = () => {
  return ( 
    <>
      <div className="bg-[#1f2937] h-screen w-full p-5">
        <TaskTable />
      </div>
    </>
  )
}