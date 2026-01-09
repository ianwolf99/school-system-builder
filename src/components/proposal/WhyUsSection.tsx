import akilimaticLogo from "@/assets/akilimatic-logo.jpeg";

const WhyUsSection = () => {
  const reasons = [
    {
      icon: "🎯",
      title: "Industry Expertise",
      description:
        "Deep understanding of African school management needs, built by experts who understand local challenges.",
    },
    {
      icon: "⚡",
      title: "Rapid Development",
      description:
        "AI-powered development methodology for faster delivery without compromising quality.",
    },
    {
      icon: "🔒",
      title: "Security First",
      description:
        "Enterprise-grade security with role-based access control and complete data isolation.",
    },
    {
      icon: "📱",
      title: "Modern UX",
      description:
        "Clean, intuitive interface matching international standards while being locally relevant.",
    },
    {
      icon: "🌍",
      title: "Localization",
      description:
        "Built specifically for Kenya, Tanzania, Uganda, and Rwanda contexts with local payment support.",
    },
    {
      icon: "💳",
      title: "Local Payments",
      description:
        "Native M-Pesa integration - not just card payments. Built for how Africa pays.",
    },
  ];

  return (
    <div className="bg-white min-h-[297mm] p-16">
      <h2 className="text-3xl font-bold text-[hsl(213,50%,20%)] mb-2">
        Why AKILIMATIC AI SOLUTIONS?
      </h2>
      <div className="w-24 h-1 bg-[hsl(173,60%,45%)] mb-8" />

      <div className="grid grid-cols-2 gap-8 mb-12">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="flex gap-4 p-6 bg-[hsl(210,40%,98%)] rounded-xl border border-[hsl(213,50%,90%)]"
          >
            <div className="text-4xl">{reason.icon}</div>
            <div>
              <h4 className="font-bold text-[hsl(213,50%,20%)] mb-2">{reason.title}</h4>
              <p className="text-[hsl(213,20%,45%)]">{reason.description}</p>
            </div>
          </div>
        ))}
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
            <p className="opacity-80">COMPANY</p>
          </div>
        </div>

        <p className="text-lg leading-relaxed opacity-90 mb-6">
          AKILIMATIC AI SOLUTIONS is a technology company specializing in AI-powered software 
          solutions for African businesses. We combine cutting-edge artificial intelligence 
          with deep local market understanding to build systems that actually work for Africa.
        </p>

        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Projects Delivered", value: "50+" },
            { label: "Countries Served", value: "4" },
            { label: "Client Satisfaction", value: "98%" },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-[hsl(173,60%,55%)]">{stat.value}</p>
              <p className="text-sm opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
