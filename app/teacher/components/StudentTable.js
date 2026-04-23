export default function StudentTable() {
  const students = [
    { name: "Zoya", email: "zoya@example.com", grade: "A" },
    { name: "abcde", email: "xyz@example.com", grade: "A" },
    { name: "xyz", email: "xyz@gmail.com", grade: "A" },
  ];

  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Student Records</h2>
      <table className="w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2 text-left">Name</th>
            <th className="border p-2 text-left">Email</th>
            <th className="border p-2 text-left">Grade</th>
            <th className="border p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td className="border p-2">{student.name}</td>
              <td className="border p-2">{student.email}</td>
              <td className="border p-2">{student.grade}</td>
              <td className="border p-2 space-x-2">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded">Edit</button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
