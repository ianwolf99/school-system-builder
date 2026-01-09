const ExecutiveSummary = () => {
  return (
    <div className="bg-white min-h-[297mm] p-16">
      <h2 className="text-3xl font-bold text-[hsl(213,50%,20%)] mb-2">
        Executive Summary
      </h2>
      <div className="w-24 h-1 bg-[hsl(173,60%,45%)] mb-8" />

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-[hsl(213,20%,35%)] leading-relaxed mb-6">
          AKILIMATIC AI SOLUTIONS COMPANY LIMITED proposes to build a comprehensive, cloud-based{" "}
          <strong>School Management System (SMS)</strong> — a multi-tenant SaaS platform 
          enabling educational institutions across Kenya to digitize their entire 
          operations with cutting-edge AI-powered technology.
        </p>

        <div className="grid grid-cols-2 gap-8 my-10">
          <div className="bg-[hsl(210,40%,98%)] rounded-xl p-6 border-l-4 border-[hsl(213,50%,20%)]">
            <h4 className="font-bold text-[hsl(213,50%,20%)] mb-2">🎯 Target Market</h4>
            <p className="text-[hsl(213,20%,40%)]">
              K-12 Schools, Secondary Schools, Colleges, and School Groups across 
              Kenya - from single schools to nationwide networks.
            </p>
          </div>

          <div className="bg-[hsl(210,40%,98%)] rounded-xl p-6 border-l-4 border-[hsl(173,60%,45%)]">
            <h4 className="font-bold text-[hsl(213,50%,20%)] mb-2">☁️ Deployment</h4>
            <p className="text-[hsl(213,20%,40%)]">
              Cloud-hosted SaaS with white-label options, auto-scaling infrastructure, 
              and 99.9% uptime guarantee.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-[hsl(213,50%,20%)] mt-10 mb-4">
          Key Value Propositions
        </h3>

        <div className="grid grid-cols-3 gap-6 mb-10">
          {[
            { icon: "📊", title: "Complete Digitization", desc: "From admissions to alumni, every process automated" },
            { icon: "📱", title: "M-Pesa Native", desc: "Built-in M-Pesa integration for seamless fee collection" },
            { icon: "👥", title: "Multi-Portal Access", desc: "Dedicated portals for Admin, Teachers, Parents, Students" },
            { icon: "🔒", title: "Enterprise Security", desc: "Bank-grade security with AES-256 encryption" },
            { icon: "⚡", title: "AI-Powered", desc: "Rapid 4-6 week delivery with AI development" },
            { icon: "📈", title: "Scalable SaaS", desc: "From single school to nationwide networks" },
          ].map((item, idx) => (
            <div key={idx} className="text-center p-4">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h5 className="font-bold text-[hsl(213,50%,20%)] mb-1">{item.title}</h5>
              <p className="text-sm text-[hsl(213,20%,45%)]">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-[hsl(213,50%,20%)] mt-10 mb-4">
          Technology Stack
        </h3>

        <div className="flex flex-wrap gap-3 mb-8">
          {[
            "React + TypeScript",
            "Tailwind CSS",
            "Supabase (PostgreSQL)",
            "Edge Functions",
            "M-Pesa Daraja API",
            "SMSALES Gateway",
            "Cloud Hosting",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-[hsl(213,50%,20%)] text-white rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[hsl(213,50%,20%)] to-[hsl(213,50%,30%)] rounded-xl p-8 text-white mt-10">
          <h4 className="text-xl font-bold mb-2">⚡ Rapid Project Timeline</h4>
          <p className="opacity-90 mb-4">
            Complete implementation in <strong>4-6 weeks</strong> with our AI-accelerated development 
            methodology, allowing early modules to go live while development continues.
          </p>
          <div className="flex gap-4 flex-wrap">
            {["Week 1: Foundation", "Week 2: Academics", "Week 3: Exams", "Week 4: Finance", "Week 5: Portals", "Week 6: Launch"].map((phase) => (
              <span key={phase} className="px-3 py-1 bg-white/20 rounded text-sm">
                {phase}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
