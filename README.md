# Student Management System

A web-based Student Management System built with **Next.js**, supporting two user roles: **Teacher** and **Student**.

##  Features

###  Teacher
- View and manage students
- Assign tasks / assignments
- Track student progress

###  Student
- View assigned tasks
- Track own progress
- Access course material

##  Tech Stack

- **Frontend:** Next.js, React
- **Database:** MongoDB Atlas
- **Authentication:** (e.g. NextAuth / JWT — update this)
- **Styling:** (e.g. Tailwind CSS — update this)

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account & connection string

### Installation

1. Clone the repository:
```bash
   git clone https://github.com/yourusername/your-repo-name.git
```

2. Install dependencies:
```bash
   npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
   MONGODB_URI=your_mongodb_atlas_connection_string
   NEXTAUTH_SECRET=your_secret
   NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server:
```bash
   npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

##  User Roles

| Role | Access |
|------|--------|
| Teacher | Manage students, assign tasks, view reports |
| Student | View tasks, track progress |

##  Deployment

The easiest way to deploy is via [Vercel](https://vercel.com/new). Connect your GitHub repo and add your environment variables in the Vercel dashboard.

##  License

This project is for educational purposes.
