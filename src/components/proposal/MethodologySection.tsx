const MethodologySection = () => {
  const phases = [
    {
      icon: "🔍",
      title: "Discovery",
      duration: "Day 1-2",
      activities: ["Requirements gathering", "Stakeholder interviews", "System analysis", "Scope definition"],
    },
    {
      icon: "🎨",
      title: "Design",
      duration: "Day 3-5",
      activities: ["UI/UX wireframes", "Database schema", "API design", "Architecture planning"],
    },
    {
      icon: "⚡",
      title: "Rapid Development",
      duration: "Week 1-4",
      activities: ["Rapid prototyping", "Iterative builds", "Daily deployments", "Continuous testing"],
    },
    {
      icon: "🧪",
      title: "Quality Assurance",
      duration: "Week 5",
      activities: ["Automated testing", "User acceptance", "Performance tuning", "Security audit"],
    },
    {
      icon: "🚀",
      title: "Launch & Support",
      duration: "Week 6",
      activities: ["Production deployment", "Data migration", "Staff training", "Go-live support"],
    },
  ];

  return (
    <div className="bg-white min-h-[297mm] p-16">
      <h2 className="text-3xl font-bold text-[hsl(213,50%,20%)] mb-2">
        Our Development Methodology
      </h2>
      <div className="w-24 h-1 bg-[hsl(173,60%,45%)] mb-4" />
      <p className="text-[hsl(213,20%,45%)] mb-8">
        Agile development methodology ensuring rapid, high-quality delivery.
      </p>

      {/* Methodology Flow */}
      <div className="flex justify-between items-start mb-12">
        {phases.map((phase, idx) => (
          <div key={idx} className="flex-1 relative">
            {/* Connector Line */}
            {idx < phases.length - 1 && (
              <div className="absolute top-8 left-1/2 w-full h-1 bg-gradient-to-r from-[hsl(173,60%,45%)] to-[hsl(213,50%,70%)]" />
            )}
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(213,50%,20%)] to-[hsl(213,50%,35%)] flex items-center justify-center text-2xl mb-3 shadow-lg">
                {phase.icon}
              </div>
              <h4 className="font-bold text-[hsl(213,50%,20%)] mb-1">{phase.title}</h4>
              <span className="text-xs text-[hsl(173,60%,40%)] font-medium mb-2">{phase.duration}</span>
              <ul className="text-xs text-[hsl(213,20%,50%)] space-y-1">
                {phase.activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Speed Advantage */}
      <div className="bg-gradient-to-r from-[hsl(173,60%,40%)] to-[hsl(173,60%,50%)] rounded-xl p-8 text-white mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-4xl">🚀</div>
          <div>
            <h3 className="text-xl font-bold">Rapid Development Process</h3>
            <p className="opacity-90">What takes others months, we deliver in weeks</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[
            { stat: "4-6", label: "Weeks Delivery" },
            { stat: "100%", label: "Success Rate" },
            { stat: "24/7", label: "Support" },
            { stat: "∞", label: "Iterations" },
          ].map((item) => (
            <div key={item.label} className="text-center bg-white/10 rounded-lg p-3">
              <p className="text-2xl font-bold">{item.stat}</p>
              <p className="text-xs opacity-80">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quality Assurance */}
      <div className="bg-[hsl(210,40%,98%)] rounded-xl p-6 border border-[hsl(213,50%,90%)] mb-10">
        <h3 className="text-xl font-bold text-[hsl(213,50%,20%)] mb-4">🏆 Quality Assurance Standards</h3>
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              title: "Automated Testing",
              items: ["Unit tests", "Integration tests", "E2E testing", "Regression testing"],
            },
            {
              title: "Code Quality",
              items: ["Code reviews", "Static analysis", "Performance profiling", "Security scanning"],
            },
            {
              title: "Deployment",
              items: ["CI/CD pipelines", "Zero-downtime deploys", "Rollback capability", "Monitoring"],
            },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-[hsl(213,50%,25%)] mb-2">{section.title}</h4>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[hsl(213,20%,45%)]">
                    <span className="text-[hsl(173,60%,45%)]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Support & SLA */}
      <div className="bg-gradient-to-r from-[hsl(213,50%,20%)] to-[hsl(213,50%,30%)] rounded-xl p-8 text-white">
        <h3 className="text-xl font-bold mb-4">🛡️ Post-Launch Support & SLA</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { icon: "📞", title: "24/7 Support", desc: "Round-the-clock technical assistance" },
            { icon: "⏱️", title: "1hr Response", desc: "Critical issues resolved fast" },
            { icon: "🔄", title: "Free Updates", desc: "Continuous improvements included" },
            { icon: "📊", title: "99.9% Uptime", desc: "Enterprise-grade reliability" },
          ].map((item) => (
            <div key={item.title} className="text-center bg-white/10 rounded-xl p-4">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h4 className="font-bold mb-1">{item.title}</h4>
              <p className="text-xs opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MethodologySection;
