import { OperationsList } from "../operations/OperationsList";
import { TaskTable } from "../tasks/TasksTable";
export const Dashboard = () => {
  return ( 
    <>
      <div className="bg-[#1f2937] h-screen w-full p-5 mx-auto">
        <div className="flex flex-row items-center justify-around gap-2 mx-auto">
          <div className="w-[45%] flex pb-10 flex-row items-center justify-center bg-[#fafafa11] rounded-lg">
            <section>
              <TaskTable />
            </section>
          </div>
          <div className="w-[28%]">
            <section>
              {/* <TaskChart/> */}
              <OperationsList />
            </section>
          </div>
        </div>
        {/* <UsersTable />   */}
      </div>
    </>
  )
}