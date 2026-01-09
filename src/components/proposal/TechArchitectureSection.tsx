const TechArchitectureSection = () => {
  const techStack = [
    { category: "Frontend", items: ["React 18", "TypeScript", "Tailwind CSS", "Vite"] },
    { category: "Backend", items: ["Supabase", "PostgreSQL", "Edge Functions", "Row Level Security"] },
    { category: "Authentication", items: ["Supabase Auth", "RBAC", "JWT Tokens", "SSO Ready"] },
    { category: "Storage", items: ["Supabase Storage", "CDN", "Image Optimization", "Document Vault"] },
    { category: "Payments", items: ["M-Pesa Daraja API", "Bank Integration", "Webhooks", "Auto-Reconciliation"] },
    { category: "Communication", items: ["Africa's Talking", "SMS Gateway", "Email SMTP", "Push Notifications"] },
  ];

  return (
    <div className="bg-white min-h-[297mm] p-16">
      <h2 className="text-3xl font-bold text-[hsl(213,50%,20%)] mb-2">
        Technical Architecture
      </h2>
      <div className="w-24 h-1 bg-[hsl(173,60%,45%)] mb-4" />
      <p className="text-[hsl(213,20%,45%)] mb-8">
        Modern, scalable architecture built on industry-leading technologies.
      </p>

      {/* Architecture Diagram */}
      <div className="bg-[hsl(210,40%,98%)] rounded-xl p-8 mb-10">
        <div className="grid grid-cols-3 gap-4">
          {/* Client Layer */}
          <div className="col-span-3 bg-[hsl(213,50%,20%)] text-white rounded-xl p-6 text-center">
            <h4 className="font-bold mb-2">Client Layer</h4>
            <div className="flex justify-center gap-4">
              {["Web Browser", "Mobile (PWA)", "Tablet"].map((item) => (
                <span key={item} className="px-3 py-1 bg-white/20 rounded text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* API Layer */}
          <div className="col-span-3 bg-[hsl(173,60%,45%)] text-white rounded-xl p-6 text-center">
            <h4 className="font-bold mb-2">API Layer (Edge Functions)</h4>
            <div className="flex justify-center gap-4">
              {["REST API", "Real-time Subscriptions", "Webhooks"].map((item) => (
                <span key={item} className="px-3 py-1 bg-white/20 rounded text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Services */}
          <div className="bg-[hsl(213,50%,90%)] rounded-xl p-4 text-center">
            <h4 className="font-bold text-[hsl(213,50%,20%)] mb-2">Auth Service</h4>
            <p className="text-sm text-[hsl(213,20%,40%)]">Supabase Auth</p>
          </div>
          <div className="bg-[hsl(213,50%,90%)] rounded-xl p-4 text-center">
            <h4 className="font-bold text-[hsl(213,50%,20%)] mb-2">Database</h4>
            <p className="text-sm text-[hsl(213,20%,40%)]">PostgreSQL</p>
          </div>
          <div className="bg-[hsl(213,50%,90%)] rounded-xl p-4 text-center">
            <h4 className="font-bold text-[hsl(213,50%,20%)] mb-2">Storage</h4>
            <p className="text-sm text-[hsl(213,20%,40%)]">Supabase Storage</p>
          </div>

          {/* External Services */}
          <div className="col-span-3 grid grid-cols-3 gap-4">
            {["M-Pesa Daraja", "SMS Gateway", "Email SMTP"].map((service) => (
              <div key={service} className="bg-white border border-[hsl(213,50%,85%)] rounded-xl p-3 text-center">
                <p className="text-sm font-medium text-[hsl(213,50%,30%)]">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-3 gap-6">
        {techStack.map((stack) => (
          <div key={stack.category} className="border border-[hsl(213,50%,90%)] rounded-xl p-5">
            <h4 className="font-bold text-[hsl(213,50%,20%)] mb-3">{stack.category}</h4>
            <div className="flex flex-wrap gap-2">
              {stack.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-[hsl(210,40%,96%)] text-[hsl(213,50%,30%)] rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Security Features */}
      <div className="mt-10 bg-gradient-to-r from-[hsl(213,50%,20%)] to-[hsl(213,50%,30%)] rounded-xl p-8 text-white">
        <h3 className="text-xl font-bold mb-4">🔒 Security Features</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            "Row Level Security",
            "Encrypted at Rest",
            "SSL/TLS Encryption",
            "Role-Based Access",
            "Audit Logging",
            "Data Isolation",
            "Automatic Backups",
            "99.9% Uptime SLA",
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <span className="text-[hsl(173,60%,55%)]">✓</span>
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechArchitectureSection;
