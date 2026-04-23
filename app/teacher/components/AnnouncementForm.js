export default function AnnouncementForm() {
  return (
    <div className="bg-white p-5 rounded-lg shadow mb-5">
      <h2 className="text-lg mb-4">Post New Announcement</h2>
      <form id="announcement-form">
        <input type="text" placeholder="Title" className="w-full p-2 border border-gray-300 rounded mb-2" />
        <textarea placeholder="Announcement Details" className="w-full p-2 border border-gray-300 rounded mb-2 h-24"></textarea>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">
          Post Announcement
        </button>
      </form>
    </div>
  );
}
