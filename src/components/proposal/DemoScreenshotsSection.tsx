import { Monitor, LayoutDashboard, Users, GraduationCap, Building2, CalendarCheck, Wallet, FileText, ClipboardList } from "lucide-react";

const demoScreenshots = [
  {
    title: "Main Dashboard",
    description: "Comprehensive overview with real-time statistics, student counts, financial summaries, and upcoming events calendar.",
    icon: LayoutDashboard,
    features: ["Quick Stats Cards", "Revenue Charts", "Event Calendar", "Notification Center"],
  },
  {
    title: "Student Categories",
    description: "Flexible student classification system for scholarships, special programs, and fee structures.",
    icon: Users,
    features: ["Category Management", "Bulk Assignment", "Fee Mapping", "Status Tracking"],
  },
  {
    title: "Academics & Classes",
    description: "Complete class management with sections, subjects, timetables, and teacher assignments.",
    icon: GraduationCap,
    features: ["Class Setup", "Subject Mapping", "Timetable Builder", "Section Management"],
  },
  {
    title: "HR & Departments",
    description: "Staff management with departments, designations, payroll integration, and leave tracking.",
    icon: Building2,
    features: ["Department Structure", "Role Hierarchy", "Staff Profiles", "Payroll Ready"],
  },
];

const demoScreenshots2 = [
  {
    title: "Daily Attendance",
    description: "Streamlined attendance marking with class-wise tracking, absence alerts, and parent notifications.",
    icon: CalendarCheck,
    features: ["Quick Mark All", "Absence Reasons", "SMS Alerts", "Monthly Reports"],
  },
  {
    title: "Finance Dashboard",
    description: "Complete financial overview with M-Pesa integration, fee collection status, and expense tracking.",
    icon: Wallet,
    features: ["M-Pesa Ready", "Fee Collection", "Expense Tracking", "Financial Reports"],
  },
  {
    title: "CBT Examinations",
    description: "Computer-based testing system with question banks, auto-grading, and result analytics.",
    icon: FileText,
    features: ["Question Bank", "Auto Grading", "Timer Control", "Result Analytics"],
  },
  {
    title: "Assignments",
    description: "Digital assignment management with submission tracking, grading, and parent visibility.",
    icon: ClipboardList,
    features: ["Online Submission", "Due Dates", "Grade Entry", "Parent Access"],
  },
];

export const DemoScreenshotsPage1 = () => {
  return (
    <div className="bg-white min-h-[297mm] p-12 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(173,60%,40%)] to-[hsl(173,60%,30%)] flex items-center justify-center">
          <Monitor className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[hsl(213,50%,20%)]">
            System Preview
          </h2>
          <p className="text-sm text-[hsl(213,20%,50%)]">
            Actual screenshots from our demo environment
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-gradient-to-r from-[hsl(173,60%,95%)] to-[hsl(173,60%,90%)] rounded-xl p-5 mb-6 border-l-4 border-[hsl(173,60%,40%)]">
        <p className="text-[hsl(213,50%,25%)] text-sm leading-relaxed">
          The following pages showcase actual screenshots from our fully functional demo environment. 
          Each screen has been designed with <span className="font-semibold">Kenyan schools in mind</span>, 
          featuring intuitive navigation, clean interfaces, and all the functionality your institution needs 
          to operate efficiently.
        </p>
      </div>

      {/* Screenshot Cards Grid */}
      <div className="grid grid-cols-2 gap-4 flex-1">
        {demoScreenshots.map((screen, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border-2 border-[hsl(213,50%,90%)] p-5 hover:border-[hsl(173,60%,50%)] transition-colors flex flex-col"
          >
            {/* Card Header */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(213,50%,20%)] to-[hsl(213,50%,35%)] flex items-center justify-center flex-shrink-0">
                <screen.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[hsl(213,50%,20%)] text-base">
                  {screen.title}
                </h3>
                <p className="text-xs text-[hsl(213,20%,50%)] leading-relaxed mt-1">
                  {screen.description}
                </p>
              </div>
            </div>

            {/* Screenshot Placeholder */}
            <div className="flex-1 bg-gradient-to-br from-[hsl(210,40%,96%)] to-[hsl(210,40%,94%)] rounded-lg border border-dashed border-[hsl(213,50%,80%)] flex items-center justify-center min-h-[100px] mb-3">
              <div className="text-center">
                <Monitor className="w-8 h-8 text-[hsl(213,50%,70%)] mx-auto mb-2" />
                <p className="text-xs text-[hsl(213,20%,60%)]">
                  Screenshot: {screen.title}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-1.5">
              {screen.features.map((feature) => (
                <span
                  key={feature}
                  className="px-2 py-1 bg-[hsl(173,60%,95%)] text-[hsl(173,60%,30%)] text-xs rounded-full font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-[hsl(213,50%,90%)] flex justify-between items-center text-xs text-[hsl(213,20%,50%)]">
        <span>AKILIMATIC School Management System</span>
        <span className="font-medium text-[hsl(173,60%,40%)]">Demo Environment Preview</span>
      </div>
    </div>
  );
};

export const DemoScreenshotsPage2 = () => {
  return (
    <div className="bg-white min-h-[297mm] p-12 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(173,60%,40%)] to-[hsl(173,60%,30%)] flex items-center justify-center">
          <Monitor className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[hsl(213,50%,20%)]">
            System Preview (Continued)
          </h2>
          <p className="text-sm text-[hsl(213,20%,50%)]">
            More screens from our comprehensive solution
          </p>
        </div>
      </div>

      {/* Screenshot Cards Grid */}
      <div className="grid grid-cols-2 gap-4 flex-1">
        {demoScreenshots2.map((screen, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border-2 border-[hsl(213,50%,90%)] p-5 hover:border-[hsl(173,60%,50%)] transition-colors flex flex-col"
          >
            {/* Card Header */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(213,50%,20%)] to-[hsl(213,50%,35%)] flex items-center justify-center flex-shrink-0">
                <screen.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[hsl(213,50%,20%)] text-base">
                  {screen.title}
                </h3>
                <p className="text-xs text-[hsl(213,20%,50%)] leading-relaxed mt-1">
                  {screen.description}
                </p>
              </div>
            </div>

            {/* Screenshot Placeholder */}
            <div className="flex-1 bg-gradient-to-br from-[hsl(210,40%,96%)] to-[hsl(210,40%,94%)] rounded-lg border border-dashed border-[hsl(213,50%,80%)] flex items-center justify-center min-h-[100px] mb-3">
              <div className="text-center">
                <Monitor className="w-8 h-8 text-[hsl(213,50%,70%)] mx-auto mb-2" />
                <p className="text-xs text-[hsl(213,20%,60%)]">
                  Screenshot: {screen.title}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-1.5">
              {screen.features.map((feature) => (
                <span
                  key={feature}
                  className="px-2 py-1 bg-[hsl(173,60%,95%)] text-[hsl(173,60%,30%)] text-xs rounded-full font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-6 bg-gradient-to-r from-[hsl(213,50%,20%)] to-[hsl(213,50%,30%)] rounded-xl p-5 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg mb-1">Want a Live Demo?</h3>
            <p className="text-sm opacity-90">
              See the full system in action with your own data
            </p>
          </div>
          <div className="text-right">
            <p className="text-[hsl(173,60%,55%)] font-bold">+254 722 736 871</p>
            <p className="text-sm opacity-80">sales@akilimatic.com</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-[hsl(213,50%,90%)] flex justify-between items-center text-xs text-[hsl(213,20%,50%)]">
        <span>AKILIMATIC School Management System</span>
        <span className="font-medium text-[hsl(173,60%,40%)]">Demo Environment Preview</span>
      </div>
    </div>
  );
};
