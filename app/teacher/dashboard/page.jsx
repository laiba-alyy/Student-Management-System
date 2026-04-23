import Sidebar from "../components/Sidebar";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

export default function DashboardPage() {
  return (
    <div className="flex h-full">
      <Sidebar active="dashboard" />
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Manage Students</h1>
        <StudentForm />
        <StudentTable />
      </main>
    </div>
  );
} 
