const sections = [
  { title: "Executive Summary", page: 3 },
  { title: "User Portal Flow Diagrams", page: 4 },
  { title: "Complete Module Breakdown (23 Modules)", page: 6 },
  { title: "Payment Integrations (M-Pesa & Bank)", page: 14 },
  { title: "Technical Architecture", page: 15 },
  { title: "Development Methodology", page: 16 },
  { title: "Implementation Timeline (4-6 Weeks)", page: 17 },
  { title: "Client Success & Testimonials", page: 18 },
  { title: "Why AKILIMATIC AI SOLUTIONS", page: 19 },
  { title: "Contact & Next Steps", page: 20 },
];

const TableOfContents = () => {
  return (
    <div className="bg-white min-h-[297mm] p-16 flex flex-col">
      <h2 className="text-3xl font-bold text-[hsl(213,50%,20%)] mb-8 border-b-4 border-[hsl(173,60%,45%)] pb-4">
        Table of Contents
      </h2>

      <div className="space-y-4 flex-1">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-3 border-b border-dashed border-[hsl(213,50%,85%)] hover:bg-[hsl(210,40%,98%)] px-2 rounded transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-[hsl(213,50%,20%)] text-white flex items-center justify-center text-sm font-bold">
                {idx + 1}
              </span>
              <span className="text-lg text-[hsl(213,50%,25%)] font-medium">
                {section.title}
              </span>
            </div>
            <span className="text-[hsl(173,60%,40%)] font-bold text-lg">
              {section.page}
            </span>
          </div>
        ))}
      </div>

      {/* Quick Highlights */}
      <div className="mt-8 bg-gradient-to-r from-[hsl(213,50%,20%)] to-[hsl(213,50%,30%)] rounded-xl p-6 text-white">
        <h3 className="font-bold mb-4">📌 Proposal Highlights</h3>
        <div className="grid grid-cols-4 gap-4 text-center">
          {[
            { value: "23+", label: "Modules" },
            { value: "4-6", label: "Weeks" },
            { value: "6", label: "Portals" },
            { value: "M-Pesa", label: "Ready" },
          ].map((item) => (
            <div key={item.label} className="bg-white/10 rounded-lg p-3">
              <p className="text-2xl font-bold text-[hsl(173,60%,55%)]">{item.value}</p>
              <p className="text-sm opacity-80">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-8 text-center text-sm text-[hsl(213,20%,50%)]">
        AKILIMATIC AI SOLUTIONS COMPANY LIMITED • Mombasa, Kenya • Confidential Proposal
      </div>
    </div>
  );
};

export default TableOfContents;
