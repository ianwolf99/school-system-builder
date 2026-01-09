const sections = [
  { title: "Executive Summary", page: 3 },
  { title: "User Portal Flow Diagrams", page: 4 },
  { title: "Complete Module Breakdown", page: 8 },
  { title: "Payment Integrations", page: 16 },
  { title: "Technical Architecture", page: 17 },
  { title: "Implementation Timeline", page: 18 },
  { title: "Pricing & Subscription Model", page: 19 },
  { title: "Why AKILIMATIC AI SOLUTIONS", page: 20 },
  { title: "Contact & Next Steps", page: 21 },
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

      <div className="mt-auto pt-8 text-center text-sm text-[hsl(213,20%,50%)]">
        AKILIMATIC AI SOLUTIONS COMPANY • Confidential Proposal
      </div>
    </div>
  );
};

export default TableOfContents;
