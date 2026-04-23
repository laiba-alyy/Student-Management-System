// app/student/layout.js
// Corrected import paths assuming components are in project root 'components' folder
import StudentHeader from '@/app/student/components/dashboard/StudentHeader';
import StudentFooter from '@/app/student/components/dashboard/StudentFooter';

export default function StudentLayout({ children }) {
  return (
    <> {/* Use a React Fragment <>...</> instead of <html><body> */}
      {/*<StudentHeader />*/}
      {/* The main content area where your page.js content will be rendered */}
      {/* I've added back the styling classes you had on the <body> tag in your original root layout */}
      <main className="min-h-screen bg-gray-950 text-white antialiased">
        {children}
      </main>
      <StudentFooter />
    </>
  );
}