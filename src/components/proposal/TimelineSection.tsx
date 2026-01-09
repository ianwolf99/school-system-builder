const TimelineSection = () => {
  const phases = [
    {
      phase: 1,
      title: "Foundation & Core Academics",
      duration: "4-6 weeks",
      modules: ["App Shell & Navigation", "Authentication & Roles", "Dashboard", "Students", "Academics", "Attendance"],
      color: "hsl(213,50%,20%)",
    },
    {
      phase: 2,
      title: "Examinations & Finance",
      duration: "3-4 weeks",
      modules: ["Exam Setup", "Marks Entry", "Report Cards", "Fee Management", "Payment Integration"],
      color: "hsl(173,60%,40%)",
    },
    {
      phase: 3,
      title: "User Portals & Communication",
      duration: "3-4 weeks",
      modules: ["Teacher Portal", "Parent Portal", "Student Portal", "SMS/Email", "Announcements"],
      color: "hsl(280,60%,50%)",
    },
    {
      phase: 4,
      title: "HR & Facilities",
      duration: "4-6 weeks",
      modules: ["HR/Payroll", "Transport", "Hostel", "Library", "Clinic"],
      color: "hsl(340,70%,50%)",
    },
    {
      phase: 5,
      title: "Extended Modules",
      duration: "2-3 weeks",
      modules: ["Reception", "Inventory", "Assets", "Alumni", "Behaviour"],
      color: "hsl(40,80%,50%)",
    },
    {
      phase: 6,
      title: "Reports & Polish",
      duration: "2 weeks",
      modules: ["Custom Reports", "Analytics", "Settings", "Testing", "Deployment"],
      color: "hsl(120,60%,40%)",
    },
  ];

  return (
    <div className="bg-white min-h-[297mm] p-16">
      <h2 className="text-3xl font-bold text-[hsl(213,50%,20%)] mb-2">
        Implementation Timeline
      </h2>
      <div className="w-24 h-1 bg-[hsl(173,60%,45%)] mb-4" />
      <p className="text-[hsl(213,20%,45%)] mb-8">
        Phased delivery approach allowing early modules to go live while development continues.
      </p>

      {/* Timeline Visual */}
      <div className="relative mb-12">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-[hsl(213,50%,85%)]" />

        <div className="space-y-8">
          {phases.map((phase) => (
            <div key={phase.phase} className="flex gap-6">
              {/* Phase Marker */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0 z-10"
                style={{ backgroundColor: phase.color }}
              >
                {phase.phase}
              </div>

              {/* Phase Content */}
              <div className="flex-1 bg-[hsl(210,40%,98%)] rounded-xl p-6 border border-[hsl(213,50%,90%)]">
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

      {/* Total Timeline */}
      <div className="bg-gradient-to-r from-[hsl(213,50%,20%)] to-[hsl(213,50%,30%)] rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">Total Project Timeline</h3>
        <p className="text-5xl font-bold text-[hsl(173,60%,55%)] mb-2">18-25 Weeks</p>
        <p className="opacity-80">From kickoff to complete system deployment</p>
      </div>
    </div>
  );
};

export default TimelineSection;
