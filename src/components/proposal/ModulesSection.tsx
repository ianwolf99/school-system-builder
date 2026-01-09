import ModuleCard from "./ModuleCard";

const modules = [
  {
    number: 1,
    title: "Dashboard & Analytics",
    icon: "📊",
    features: ["Real-time KPIs", "Revenue trends", "Custom widgets", "Notifications"],
  },
  {
    number: 2,
    title: "Student Information",
    icon: "👨‍🎓",
    features: ["Online admission", "Student profiles", "ID card generation", "Promotion workflows"],
  },
  {
    number: 3,
    title: "Guardian/Parent Management",
    icon: "👨‍👩‍👧",
    features: ["Parent profiles", "Multi-child linking", "Portal access", "Communication prefs"],
  },
  {
    number: 4,
    title: "Staff & HR",
    icon: "👔",
    features: ["Employee profiles", "Attendance", "Leave management", "Payroll & payslips"],
  },
  {
    number: 5,
    title: "Academic Management",
    icon: "📚",
    features: ["Class & sections", "Subject allocation", "Timetables", "Lesson plans"],
  },
  {
    number: 6,
    title: "Attendance",
    icon: "✅",
    features: ["Daily marking", "Biometric ready", "Auto SMS alerts", "Reports"],
  },
  {
    number: 7,
    title: "Exams & Assessment",
    icon: "📝",
    features: ["Exam setup", "Marks entry", "Auto grading", "Report cards"],
  },
  {
    number: 8,
    title: "Fee & Finance",
    icon: "💰",
    features: ["M-Pesa STK Push", "Auto invoicing", "Receipts", "Financial reports"],
  },
  {
    number: 9,
    title: "Transport",
    icon: "🚌",
    features: ["Routes & stops", "Vehicle tracking", "Transport fees", "Notifications"],
  },
  {
    number: 10,
    title: "Hostel/Boarding",
    icon: "🏠",
    features: ["Room allocation", "Hostel fees", "Check-in/out", "Leave passes"],
  },
  {
    number: 11,
    title: "Library",
    icon: "📖",
    features: ["Book catalog", "Issue & return", "Fine calculation", "Digital library"],
  },
  {
    number: 12,
    title: "Health/Clinic",
    icon: "🏥",
    features: ["Medical records", "Vaccinations", "Clinic visits", "Emergency alerts"],
  },
  {
    number: 13,
    title: "Inventory & Assets",
    icon: "📦",
    features: ["Stock management", "Asset register", "Maintenance", "Depreciation"],
  },
  {
    number: 14,
    title: "Communication",
    icon: "📱",
    features: ["Bulk SMS", "Email", "Announcements", "Event calendar"],
  },
  {
    number: 15,
    title: "Front Office",
    icon: "🏢",
    features: ["Visitor log", "Complaints", "Call log", "Dispatch register"],
  },
  {
    number: 16,
    title: "Polls & Surveys",
    icon: "📊",
    features: ["Custom surveys", "Analytics", "Export results", "Anonymous options"],
  },
  {
    number: 17,
    title: "E-Learning",
    icon: "💻",
    features: ["Study materials", "Assignments", "Online classes", "Video integration"],
  },
  {
    number: 18,
    title: "Alumni",
    icon: "🎓",
    features: ["Alumni directory", "Events", "Networking", "Donations"],
  },
  {
    number: 19,
    title: "Behaviour Records",
    icon: "⭐",
    features: ["Discipline log", "Awards", "Counseling", "House points"],
  },
  {
    number: 20,
    title: "Reports",
    icon: "📈",
    features: ["Custom reports", "Export PDF/Excel", "Scheduled emails", "Analytics"],
  },
  {
    number: 21,
    title: "Settings",
    icon: "⚙️",
    features: ["School branding", "User roles", "Permissions", "Backup"],
  },
  {
    number: 22,
    title: "Multi-Portal",
    icon: "🚪",
    features: ["Admin Portal", "Teacher Portal", "Parent Portal", "Student Portal"],
  },
  {
    number: 23,
    title: "SaaS Billing",
    icon: "💳",
    features: ["Subscriptions", "Usage tracking", "Invoicing", "Payment gateway"],
  },
];

// Split modules into pages (8 per page fits well)
const page1Modules = modules.slice(0, 8);
const page2Modules = modules.slice(8, 16);
const page3Modules = modules.slice(16, 23);

export const ModulesPage1 = () => (
  <div className="bg-white min-h-[297mm] p-12">
    <h2 className="text-2xl font-bold text-[hsl(213,50%,20%)] mb-2">
      Complete Module Breakdown
    </h2>
    <div className="w-20 h-1 bg-[hsl(173,60%,45%)] mb-3" />
    <p className="text-sm text-[hsl(213,20%,45%)] mb-6">
      23 comprehensive modules covering every aspect of school operations.
    </p>
    <div className="grid grid-cols-2 gap-4">
      {page1Modules.map((module) => (
        <ModuleCard
          key={module.number}
          number={module.number}
          title={module.title}
          icon={module.icon}
          features={module.features}
          color={module.number % 2 === 0 ? "hsl(173,60%,40%)" : "hsl(213,50%,20%)"}
        />
      ))}
    </div>
    <p className="text-center text-sm text-[hsl(213,20%,50%)] mt-6">Page 1 of 3 - Modules 1-8</p>
  </div>
);

export const ModulesPage2 = () => (
  <div className="bg-white min-h-[297mm] p-12">
    <h2 className="text-2xl font-bold text-[hsl(213,50%,20%)] mb-2">
      Module Breakdown (Continued)
    </h2>
    <div className="w-20 h-1 bg-[hsl(173,60%,45%)] mb-6" />
    <div className="grid grid-cols-2 gap-4">
      {page2Modules.map((module) => (
        <ModuleCard
          key={module.number}
          number={module.number}
          title={module.title}
          icon={module.icon}
          features={module.features}
          color={module.number % 2 === 0 ? "hsl(173,60%,40%)" : "hsl(213,50%,20%)"}
        />
      ))}
    </div>
    <p className="text-center text-sm text-[hsl(213,20%,50%)] mt-6">Page 2 of 3 - Modules 9-16</p>
  </div>
);

export const ModulesPage3 = () => (
  <div className="bg-white min-h-[297mm] p-12">
    <h2 className="text-2xl font-bold text-[hsl(213,50%,20%)] mb-2">
      Module Breakdown (Final)
    </h2>
    <div className="w-20 h-1 bg-[hsl(173,60%,45%)] mb-6" />
    <div className="grid grid-cols-2 gap-4">
      {page3Modules.map((module) => (
        <ModuleCard
          key={module.number}
          number={module.number}
          title={module.title}
          icon={module.icon}
          features={module.features}
          color={module.number % 2 === 0 ? "hsl(173,60%,40%)" : "hsl(213,50%,20%)"}
        />
      ))}
    </div>
    
    {/* Summary */}
    <div className="mt-8 bg-gradient-to-r from-[hsl(213,50%,20%)] to-[hsl(213,50%,30%)] rounded-xl p-6 text-white">
      <h3 className="font-bold mb-3">✅ All 23 Modules Included</h3>
      <div className="grid grid-cols-4 gap-3 text-center text-sm">
        {[
          { value: "23", label: "Modules" },
          { value: "6", label: "Portals" },
          { value: "M-Pesa", label: "Ready" },
          { value: "100%", label: "Customizable" },
        ].map((item) => (
          <div key={item.label} className="bg-white/10 rounded-lg p-2">
            <p className="text-lg font-bold text-[hsl(173,60%,55%)]">{item.value}</p>
            <p className="text-xs opacity-80">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
    <p className="text-center text-sm text-[hsl(213,20%,50%)] mt-6">Page 3 of 3 - Modules 17-23</p>
  </div>
);

// Default export for backward compatibility
const ModulesSection = ModulesPage1;
export default ModulesSection;