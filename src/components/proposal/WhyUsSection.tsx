import akilimaticLogo from "@/assets/akilimatic-logo.jpeg";

const WhyUsSection = () => {
  const reasons = [
    {
      icon: "🎯",
      title: "Kenya-First Expertise",
      description:
        "Deep understanding of Kenyan school management needs, built by experts who understand local challenges.",
    },
    {
      icon: "⚡",
      title: "AI-Powered Rapid Development",
      description:
        "4-6 week delivery using cutting-edge AI development methodology - faster than any competitor.",
    },
    {
      icon: "📱",
      title: "M-Pesa Native",
      description:
        "Built-in M-Pesa integration from day one. No third-party payment gateways - pure Kenyan payment.",
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description:
        "Bank-grade security with AES-256 encryption, role-based access, and complete data isolation.",
    },
    {
      icon: "📊",
      title: "Complete Solution",
      description:
        "23+ modules covering every aspect of school operations - no need for multiple systems.",
    },
    {
      icon: "🚀",
      title: "Future-Ready",
      description:
        "Scalable architecture that grows with you - from single school to nationwide networks.",
    },
  ];

  const certifications = [
    "ISO 27001 Ready",
    "GDPR Compliant",
    "Data Protection Act (Kenya)",
    "Cloud Security Alliance",
  ];

  return (
    <div className="bg-white min-h-[297mm] p-16">
      <h2 className="text-3xl font-bold text-[hsl(213,50%,20%)] mb-2">
        Why AKILIMATIC AI SOLUTIONS?
      </h2>
      <div className="w-24 h-1 bg-[hsl(173,60%,45%)] mb-8" />

      <div className="grid grid-cols-2 gap-6 mb-10">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="flex gap-4 p-5 bg-[hsl(210,40%,98%)] rounded-xl border border-[hsl(213,50%,90%)]"
          >
            <div className="text-3xl">{reason.icon}</div>
            <div>
              <h4 className="font-bold text-[hsl(213,50%,20%)] mb-1">{reason.title}</h4>
              <p className="text-sm text-[hsl(213,20%,45%)]">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Competitive Advantage */}
      <div className="bg-[hsl(210,40%,98%)] rounded-xl p-6 mb-10 border border-[hsl(213,50%,90%)]">
        <h3 className="text-xl font-bold text-[hsl(213,50%,20%)] mb-4">📊 Competitive Advantage</h3>
        <div className="overflow-hidden rounded-lg border border-[hsl(213,50%,85%)]">
          <table className="w-full text-sm">
            <thead className="bg-[hsl(213,50%,20%)] text-white">
              <tr>
                <th className="p-3 text-left">Feature</th>
                <th className="p-3 text-center">AKILIMATIC</th>
                <th className="p-3 text-center">Others</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Delivery Time", "4-6 Weeks", "3-6 Months"],
                ["M-Pesa Native", "✓ Built-in", "✗ Third-party"],
                ["AI-Powered Development", "✓ Yes", "✗ No"],
                ["Custom Modules", "✓ Unlimited", "Extra Cost"],
                ["Source Code Access", "✓ Full", "✗ Limited"],
                ["Local Support (Kenya)", "✓ Mombasa", "Overseas"],
              ].map(([feature, akilimatic, others], idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[hsl(210,40%,98%)]"}>
                  <td className="p-3 font-medium text-[hsl(213,50%,25%)]">{feature}</td>
                  <td className="p-3 text-center text-[hsl(173,60%,35%)] font-bold">{akilimatic}</td>
                  <td className="p-3 text-center text-[hsl(0,50%,50%)]">{others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Company Overview */}
      <div className="bg-gradient-to-r from-[hsl(213,50%,20%)] to-[hsl(213,50%,30%)] rounded-xl p-8 text-white">
        <div className="flex items-center gap-6 mb-6">
          <img
            src={akilimaticLogo}
            alt="AKILIMATIC"
            className="w-20 h-20 rounded-xl object-contain bg-white p-2"
          />
          <div>
            <h3 className="text-2xl font-bold">AKILIMATIC AI SOLUTIONS</h3>
            <p className="opacity-80">COMPANY LIMITED • Mombasa, Kenya</p>
          </div>
        </div>

        <p className="text-lg leading-relaxed opacity-90 mb-6">
          AKILIMATIC AI SOLUTIONS COMPANY LIMITED is a leading Kenyan technology company 
          headquartered in Mombasa, specializing in AI-powered enterprise software solutions. 
          We combine cutting-edge artificial intelligence with deep local market understanding 
          to build world-class systems that work for Africa.
        </p>

        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: "Delivery Speed", value: "4-6 Weeks" },
            { label: "Success Rate", value: "100%" },
            { label: "Support", value: "24/7" },
            { label: "Uptime SLA", value: "99.9%" },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-white/10 rounded-xl p-3">
              <p className="text-2xl font-bold text-[hsl(173,60%,55%)]">{stat.value}</p>
              <p className="text-xs opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-sm opacity-70">Compliance Ready:</span>
          {certifications.map((cert) => (
            <span key={cert} className="px-3 py-1 bg-white/10 rounded-full text-xs">
              {cert}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
