const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$2",
      period: "per student/month",
      features: [
        "Up to 500 students",
        "Core Academics",
        "Attendance & Exams",
        "Basic Reports",
        "Email Support",
      ],
      recommended: false,
    },
    {
      name: "Professional",
      price: "$3",
      period: "per student/month",
      features: [
        "Up to 2,000 students",
        "All Core Modules",
        "M-Pesa Integration",
        "SMS Notifications",
        "Priority Support",
        "Custom Reports",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact for pricing",
      features: [
        "Unlimited students",
        "All Modules",
        "White-label Option",
        "API Access",
        "Dedicated Support",
        "On-premise Option",
        "Custom Development",
      ],
      recommended: false,
    },
  ];

  return (
    <div className="bg-white min-h-[297mm] p-16">
      <h2 className="text-3xl font-bold text-[hsl(213,50%,20%)] mb-2">
        Pricing & Subscription Model
      </h2>
      <div className="w-24 h-1 bg-[hsl(173,60%,45%)] mb-4" />
      <p className="text-[hsl(213,20%,45%)] mb-8">
        Flexible per-student pricing that scales with your institution.
      </p>

      <div className="grid grid-cols-3 gap-8 mb-12">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl p-6 border-2 ${
              plan.recommended
                ? "border-[hsl(173,60%,45%)] bg-[hsl(173,60%,97%)]"
                : "border-[hsl(213,50%,90%)] bg-white"
            }`}
          >
            {plan.recommended && (
              <div className="text-center mb-4">
                <span className="px-3 py-1 bg-[hsl(173,60%,45%)] text-white text-sm font-medium rounded-full">
                  RECOMMENDED
                </span>
              </div>
            )}

            <h4 className="text-xl font-bold text-[hsl(213,50%,20%)] text-center mb-2">
              {plan.name}
            </h4>

            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-[hsl(213,50%,20%)]">{plan.price}</span>
              <p className="text-sm text-[hsl(213,20%,50%)]">{plan.period}</p>
            </div>

            <ul className="space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-[hsl(213,20%,40%)]">
                  <span className="text-[hsl(173,60%,45%)]">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* What's Included */}
      <div className="bg-[hsl(210,40%,98%)] rounded-xl p-8 border border-[hsl(213,50%,90%)]">
        <h3 className="text-xl font-bold text-[hsl(213,50%,20%)] mb-6">All Plans Include:</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            "Cloud Hosting",
            "Automatic Updates",
            "Data Backups",
            "SSL Security",
            "Mobile Access",
            "Technical Support",
            "Training Sessions",
            "Documentation",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[hsl(173,60%,45%)] text-white flex items-center justify-center text-xs">
                ✓
              </span>
              <span className="text-[hsl(213,50%,30%)]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* One-time Setup */}
      <div className="mt-8 bg-gradient-to-r from-[hsl(213,50%,20%)] to-[hsl(213,50%,30%)] rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">One-Time Setup Fee</h3>
            <p className="opacity-80">Includes data migration, customization, and training</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">Contact for Quote</p>
            <p className="text-sm opacity-80">Based on school size and requirements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
