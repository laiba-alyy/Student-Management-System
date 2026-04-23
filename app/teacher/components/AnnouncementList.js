export default function AnnouncementList() {
  const announcements = [
    {
      title: "Exam Schedule Updated",
      body: "The final exam schedule has been updated. Please check the student portal.",
      date: "March 28, 2025",
    },
    {
      title: "New Course Materials Available",
      body: "New study materials have been uploaded to the portal for all students.",
      date: "March 25, 2025",
    },
  ];

  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h2 className="text-lg mb-4">Recent Announcements</h2>
      <ul className="list-none p-0">
        {announcements.map((a, idx) => (
          <li key={idx} className="p-4 border border-gray-300 rounded mb-2 bg-white shadow">
            <h3 className="text-lg mb-1">{a.title}</h3>
            <p className="text-gray-700">{a.body}</p>
            <span className="text-sm text-gray-500 block mt-1">Posted on: {a.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
