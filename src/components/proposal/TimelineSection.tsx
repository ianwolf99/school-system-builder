const phases = [
  {
    phase: 1,
    title: "Foundation & Core Setup",
    duration: "Week 1",
    modules: ["App Shell & Navigation", "Authentication & Roles", "Dashboard", "School Setup", "Academic Year Config"],
    color: "hsl(213,50%,20%)",
  },
  {
    phase: 2,
    title: "Student & Academic Management",
    duration: "Week 2",
    modules: ["Student Admission", "Student Profiles", "Guardians", "Classes & Sections", "Subjects", "Timetable"],
    color: "hsl(173,60%,40%)",
  },
  {
    phase: 3,
    title: "Attendance & Examinations",
    duration: "Week 3",
    modules: ["Attendance Marking", "Exam Setup", "Marks Entry", "Report Cards", "Results Processing"],
    color: "hsl(280,60%,50%)",
  },
  {
    phase: 4,
    title: "Finance & Payments",
    duration: "Week 4",
    modules: ["Fee Structure", "Invoicing", "M-Pesa Integration", "Bank Transfers", "Receipts", "Reports"],
    color: "hsl(340,70%,50%)",
  },
  {
    phase: 5,
    title: "User Portals & Communication",
    duration: "Week 5",
    modules: ["Teacher Portal", "Parent Portal", "Student Portal", "SMS Notifications", "Announcements"],
    color: "hsl(40,80%,50%)",
  },
  {
    phase: 6,
    title: "Extended Modules & Launch",
    duration: "Week 6",
    modules: ["HR/Staff", "Transport", "Library", "Reports", "Testing", "Go Live"],
    color: "hsl(120,60%,40%)",
  },
];

const TimelineBlock = ({ slice }: { slice: typeof phases }) => {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-[hsl(213,50%,85%)]" />
      <div className="space-y-6">
        {slice.map((phase) => (
          <div key={phase.phase} className="flex gap-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0 z-10"
              style={{ backgroundColor: phase.color }}
            >
              {phase.phase}
            </div>

            <div className="flex-1 bg-[hsl(210,40%,98%)] rounded-xl p-5 border border-[hsl(213,50%,90%)]">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-bold text-[hsl(213,50%,20%)]">{phase.title}</h4>
                <span
                  className="px-3 py-1 rounded-full text-white text-sm font-medium"
                  style={{ backgroundColor: phase.color }}
                >
                  {phase.duration}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {phase.modules.map((module) => (
                  <span
                    key={module}
                    className="px-3 py-1 bg-white border border-[hsl(213,50%,85%)] rounded text-sm text-[hsl(213,50%,30%)]"
                  >
                    {module}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TimelinePage1 = () => {
  return (
    <div className="bg-white min-h-[297mm] p-16">
      <h2 className="text-3xl font-bold text-[hsl(213,50%,20%)] mb-2">Implementation Timeline</h2>
      <div className="w-24 h-1 bg-[hsl(173,60%,45%)] mb-4" />
      <p className="text-[hsl(213,20%,45%)] mb-8">Week-by-week delivery plan (Weeks 1–3).</p>

      <TimelineBlock slice={phases.slice(0, 3)} />

      <p className="text-center text-sm text-[hsl(213,20%,50%)] mt-8">Page 1 of 2</p>
    </div>
  );
};

export const TimelinePage2 = () => {
  return (
    <div className="bg-white min-h-[297mm] p-16">
      <h2 className="text-3xl font-bold text-[hsl(213,50%,20%)] mb-2">Implementation Timeline (Continued)</h2>
      <div className="w-24 h-1 bg-[hsl(173,60%,45%)] mb-4" />
      <p className="text-[hsl(213,20%,45%)] mb-8">Week-by-week delivery plan (Weeks 4–6).</p>

      <TimelineBlock slice={phases.slice(3, 6)} />

      <div className="mt-10 bg-gradient-to-r from-[hsl(213,50%,20%)] to-[hsl(213,50%,30%)] rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">Total Project Timeline</h3>
        <p className="text-5xl font-bold text-[hsl(173,60%,55%)] mb-2">4-6 Weeks</p>
        <p className="opacity-80">From kickoff to complete system deployment</p>
      </div>

      <p className="text-center text-sm text-[hsl(213,20%,50%)] mt-8">Page 2 of 2</p>
    </div>
  );
};

// Default export kept for compatibility
const TimelineSection = TimelinePage1;
export default TimelineSection;
