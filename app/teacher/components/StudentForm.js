export default function StudentForm() {
  return (
    <div className="bg-white rounded shadow p-6 mb-8">
      <h2 className="text-lg font-semibold mb-4">Add / Edit Student</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Student Name" required className="w-full border border-gray-300 p-2 rounded" />
        <input type="email" placeholder="Email" required className="w-full border border-gray-300 p-2 rounded" />
        <input type="text" placeholder="Grade" required className="w-full border border-gray-300 p-2 rounded" />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Save Student
        </button>
      </form>
    </div>
  );
}
