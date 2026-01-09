import ModuleCard from "./ModuleCard";

const modules = [
  {
    number: 1,
    title: "Dashboard & Analytics",
    icon: "📊",
    features: [
      "Real-time KPIs - enrollment, revenue, attendance",
      "Quick stats cards with daily summaries",
      "Revenue trend charts (daily/weekly/monthly)",
      "Comparative analytics across terms",
      "Custom drag-and-drop widgets",
      "Notification center with alerts",
    ],
  },
  {
    number: 2,
    title: "Student Information System",
    icon: "👨‍🎓",
    features: [
      "Online admission with document upload",
      "Complete student profiles with photos",
      "Guardian/parent information linking",
      "Medical records & allergies",
      "Class/section assignment",
      "Student ID card generation with QR",
      "Promotion & graduation workflows",
    ],
  },
  {
    number: 3,
    title: "Guardian/Parent Management",
    icon: "👨‍👩‍👧",
    features: [
      "Parent profiles with occupation details",
      "Multiple children linked to one account",
      "Login credentials management",
      "Communication preferences (SMS/Email)",
      "Portal access control",
      "Relationship type tracking",
    ],
  },
  {
    number: 4,
    title: "Staff & Human Resources",
    icon: "👔",
    features: [
      "Employee profiles with qualifications",
      "Department & designation assignment",
      "Staff attendance (biometric ready)",
      "Leave application & approval workflow",
      "Payroll processing with tax calculations",
      "Payslip PDF generation",
      "Staff loans & EMI deductions",
    ],
  },
  {
    number: 5,
    title: "Academic Management",
    icon: "📚",
    features: [
      "Academic year & term configuration",
      "Class levels and sections/streams",
      "Subject allocation per class",
      "Teacher-subject assignment",
      "Syllabus upload & tracking",
      "Timetable creation & publishing",
      "Lesson plan submission & approval",
    ],
  },
  {
    number: 6,
    title: "Attendance Management",
    icon: "✅",
    features: [
      "Daily attendance marking",
      "Subject/period-wise attendance",
      "Biometric/RFID integration ready",
      "Late arrival tracking",
      "Attendance percentage calculation",
      "Automatic SMS on absence",
      "Chronic absenteeism alerts",
    ],
  },
  {
    number: 7,
    title: "Examination & Assessment",
    icon: "📝",
    features: [
      "Exam types setup (CAT, Mid-term, Final)",
      "Grading system configuration",
      "Teacher marks entry portal",
      "Bulk marks upload via Excel",
      "Automatic grade calculation",
      "Class ranking & analysis",
      "Customizable report cards",
      "Transcript & certificate generation",
    ],
  },
  {
    number: 8,
    title: "Fee Management & Finance",
    icon: "💰",
    features: [
      "Fee heads & structure definition",
      "Auto-invoice generation",
      "M-Pesa integration (STK Push)",
      "Card payments via Stripe",
      "Bank transfer reconciliation",
      "Partial payment support",
      "Receipt generation (thermal/A4)",
      "Financial reports & analytics",
    ],
  },
  {
    number: 9,
    title: "Transport Management",
    icon: "🚌",
    features: [
      "Route definition with stops",
      "Vehicle & driver profiles",
      "Student-route allocation",
      "Transport fee management",
      "GPS tracking integration ready",
      "Pick-up/drop-off notifications",
    ],
  },
  {
    number: 10,
    title: "Hostel/Boarding Management",
    icon: "🏠",
    features: [
      "Hostel & dormitory setup",
      "Room allocation & capacity",
      "Hostel fee management",
      "Check-in/check-out logging",
      "Hostel attendance tracking",
      "Leave pass requests",
    ],
  },
  {
    number: 11,
    title: "Library Management",
    icon: "📖",
    features: [
      "Book cataloging with ISBN",
      "Member registration",
      "Book issue & return tracking",
      "Fine calculation for late returns",
      "Reservation system",
      "Digital library (e-books, PDFs)",
      "Barcode integration",
    ],
  },
  {
    number: 12,
    title: "Clinic/Health Management",
    icon: "🏥",
    features: [
      "Student medical profiles",
      "Vaccination records",
      "Clinic visit logging",
      "Medication tracking",
      "Health incident reports",
      "Emergency contact alerts",
    ],
  },
  {
    number: 13,
    title: "Inventory & Assets",
    icon: "📦",
    features: [
      "Stock items cataloging",
      "Stock receipt & issue",
      "Minimum stock alerts",
      "Fixed assets register",
      "Asset assignment tracking",
      "Depreciation calculation",
      "Maintenance scheduling",
    ],
  },
  {
    number: 14,
    title: "Communication Hub",
    icon: "📱",
    features: [
      "Bulk SMS messaging",
      "Email notifications",
      "Template-based messaging",
      "School-wide announcements",
      "Event calendar management",
      "Push notifications",
      "Parent RSVP for events",
    ],
  },
  {
    number: 15,
    title: "Reception & Front Office",
    icon: "🏢",
    features: [
      "Visitor registration & logging",
      "Visitor badge printing",
      "Phone call log",
      "Postal/dispatch register",
      "Complaint submission & tracking",
      "Resolution workflow",
    ],
  },
  {
    number: 16,
    title: "Polls & Surveys",
    icon: "📊",
    features: [
      "Custom poll/survey creation",
      "Target audience selection",
      "Anonymous or identified responses",
      "Results analytics & charts",
      "Export responses to Excel",
    ],
  },
  {
    number: 17,
    title: "Study Materials & E-Learning",
    icon: "💻",
    features: [
      "Upload notes, videos, PDFs",
      "Subject/chapter organization",
      "Assignment creation",
      "Online submission by students",
      "Grading & feedback",
      "Zoom/Google Meet integration",
    ],
  },
  {
    number: 18,
    title: "Alumni Management",
    icon: "🎓",
    features: [
      "Alumni directory",
      "Profile updates by alumni",
      "Event invitations",
      "Alumni networking features",
      "Donation/contribution tracking",
    ],
  },
  {
    number: 19,
    title: "Behavioural Records",
    icon: "⭐",
    features: [
      "Disciplinary incidents logging",
      "Warning letters generation",
      "Counseling session records",
      "Awards & achievements",
      "Prefect/leadership roles",
      "House points system",
    ],
  },
  {
    number: 20,
    title: "Reports & Analytics",
    icon: "📈",
    features: [
      "Standard reports (students, attendance, fees)",
      "Custom report builder",
      "Filter & column selection",
      "Export to Excel/PDF",
      "Scheduled report emailing",
      "Trend analysis & charts",
    ],
  },
  {
    number: 21,
    title: "Settings & Configuration",
    icon: "⚙️",
    features: [
      "School profile & branding",
      "Academic settings",
      "User management & roles",
      "Permission configuration",
      "SMS/Email gateway setup",
      "Backup & security settings",
    ],
  },
  {
    number: 22,
    title: "Multi-Portal Access",
    icon: "🚪",
    features: [
      "Super Admin (SaaS management)",
      "School Admin (full operations)",
      "Accountant Portal",
      "Teacher Portal",
      "Parent Portal",
      "Student Portal",
    ],
  },
  {
    number: 23,
    title: "SaaS Subscription & Billing",
    icon: "💳",
    features: [
      "School onboarding wizard",
      "Subscription plan management",
      "Per-student pricing model",
      "Usage tracking",
      "Invoice generation to schools",
      "Payment gateway integration",
    ],
  },
];

const ModulesSection = () => {
  return (
    <div className="bg-white p-16">
      <h2 className="text-3xl font-bold text-[hsl(213,50%,20%)] mb-2">
        Complete Module Breakdown
      </h2>
      <div className="w-24 h-1 bg-[hsl(173,60%,45%)] mb-4" />
      <p className="text-[hsl(213,20%,45%)] mb-8">
        23 comprehensive modules covering every aspect of school operations.
      </p>

      <div className="grid grid-cols-2 gap-6">
        {modules.map((module) => (
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
    </div>
  );
};

export default ModulesSection;
