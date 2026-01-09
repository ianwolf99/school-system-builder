import UserFlowDiagram from "./UserFlowDiagram";

const adminFlow = {
  label: "Login → Dashboard",
  children: [
    {
      label: "Students",
      children: [
        { label: "Add/Edit Student" },
        { label: "Admission" },
        { label: "Enrollment" },
        { label: "Promotion" },
        { label: "Transfer" },
      ],
    },
    {
      label: "Academics",
      children: [
        { label: "Classes Setup" },
        { label: "Subjects" },
        { label: "Timetable" },
        { label: "Teachers" },
        { label: "Syllabus" },
      ],
    },
    {
      label: "Exams",
      children: [
        { label: "Create Exam" },
        { label: "Marks Entry" },
        { label: "Results" },
        { label: "Report Cards" },
        { label: "Transcripts" },
      ],
    },
    {
      label: "Finance",
      children: [
        { label: "Fee Structure" },
        { label: "Invoicing" },
        { label: "Collection" },
        { label: "Receipts" },
        { label: "Reports" },
      ],
    },
    {
      label: "HR",
      children: [
        { label: "Staff Profiles" },
        { label: "Attendance" },
        { label: "Payroll" },
        { label: "Leave" },
        { label: "Loans" },
      ],
    },
  ],
};

const teacherFlow = {
  label: "Login → My Dashboard",
  children: [
    {
      label: "Timetable",
      children: [
        { label: "View Schedule" },
        { label: "Today's Classes" },
        { label: "Substitutions" },
      ],
    },
    {
      label: "Attendance",
      children: [
        { label: "Mark Daily" },
        { label: "By Subject" },
        { label: "Reports" },
      ],
    },
    {
      label: "Marks Entry",
      children: [
        { label: "Enter Marks" },
        { label: "Submit" },
        { label: "Review" },
      ],
    },
    {
      label: "Lesson Plans",
      children: [
        { label: "Create Plan" },
        { label: "Submit" },
        { label: "Track" },
      ],
    },
    {
      label: "Communication",
      children: [
        { label: "Parent Messages" },
        { label: "Announcements" },
        { label: "Notices" },
      ],
    },
  ],
};

const parentFlow = {
  label: "Login → Select Child → Dashboard",
  children: [
    {
      label: "Profile",
      children: [
        { label: "View Bio" },
        { label: "Documents" },
        { label: "ID Card" },
      ],
    },
    {
      label: "Attendance",
      children: [
        { label: "Daily View" },
        { label: "Calendar" },
        { label: "History" },
      ],
    },
    {
      label: "Results",
      children: [
        { label: "Report Cards" },
        { label: "Term Results" },
        { label: "Progress" },
      ],
    },
    {
      label: "Fees",
      children: [
        { label: "View Balance" },
        { label: "Pay Now" },
        { label: "History" },
      ],
    },
    {
      label: "Messages",
      children: [
        { label: "Announcements" },
        { label: "Teacher Chat" },
        { label: "Notifications" },
      ],
    },
  ],
};

const studentFlow = {
  label: "Login → My Dashboard",
  children: [
    {
      label: "Timetable",
      children: [
        { label: "Today" },
        { label: "Week View" },
        { label: "Full Schedule" },
      ],
    },
    {
      label: "Results",
      children: [
        { label: "Report Cards" },
        { label: "Grades" },
        { label: "Ranking" },
      ],
    },
    {
      label: "Materials",
      children: [
        { label: "Download Notes" },
        { label: "Videos" },
        { label: "Resources" },
      ],
    },
    {
      label: "Assignments",
      children: [
        { label: "View Tasks" },
        { label: "Submit" },
        { label: "Feedback" },
      ],
    },
    {
      label: "Profile",
      children: [
        { label: "My Info" },
        { label: "ID Card" },
        { label: "Settings" },
      ],
    },
  ],
};

export const UserFlowsPage1 = () => {
  return (
    <div className="bg-white min-h-[297mm] p-16">
      <h2 className="text-3xl font-bold text-[hsl(213,50%,20%)] mb-2">User Portal Flow Diagrams</h2>
      <div className="w-24 h-1 bg-[hsl(173,60%,45%)] mb-4" />
      <p className="text-[hsl(213,20%,45%)] mb-8">
        Complete user journey maps for each portal, showing navigation structure and key actions.
      </p>

      <UserFlowDiagram title="School Admin Portal" icon="👔" color="hsl(213,50%,20%)" flow={adminFlow} />
      <UserFlowDiagram title="Teacher Portal" icon="👨‍🏫" color="hsl(173,60%,40%)" flow={teacherFlow} />

      <p className="text-center text-sm text-[hsl(213,20%,50%)] mt-8">Page 1 of 2</p>
    </div>
  );
};

export const UserFlowsPage2 = () => {
  return (
    <div className="bg-white min-h-[297mm] p-16">
      <h2 className="text-3xl font-bold text-[hsl(213,50%,20%)] mb-2">User Portal Flow Diagrams (Continued)</h2>
      <div className="w-24 h-1 bg-[hsl(173,60%,45%)] mb-4" />
      <p className="text-[hsl(213,20%,45%)] mb-8">
        Additional portals showing parent and student journeys.
      </p>

      <UserFlowDiagram title="Parent Portal" icon="👨‍👩‍👧" color="hsl(280,60%,50%)" flow={parentFlow} />
      <UserFlowDiagram title="Student Portal" icon="🎓" color="hsl(340,70%,50%)" flow={studentFlow} />

      <p className="text-center text-sm text-[hsl(213,20%,50%)] mt-8">Page 2 of 2</p>
    </div>
  );
};

// Default export kept for compatibility
const UserFlowsSection = UserFlowsPage1;
export default UserFlowsSection;
