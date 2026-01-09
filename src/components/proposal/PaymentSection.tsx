const PaymentSection = () => {
  const paymentMethods = [
    {
      name: "M-Pesa (Kenya)",
      icon: "🇰🇪",
      features: ["Paybill Integration", "Till Number Support", "STK Push (Instant)", "Lipa na M-Pesa"],
      color: "hsl(120,60%,40%)",
    },
    {
      name: "M-Pesa (Tanzania)",
      icon: "🇹🇿",
      features: ["Vodacom M-Pesa", "Push Notifications", "Real-time Confirmation"],
      color: "hsl(200,70%,45%)",
    },
    {
      name: "Card Payments",
      icon: "💳",
      features: ["Visa & Mastercard", "Stripe Integration", "3D Secure", "Recurring Payments"],
      color: "hsl(280,60%,50%)",
    },
    {
      name: "Bank Transfers",
      icon: "🏦",
      features: ["Manual Entry", "Reconciliation", "Bank Statement Import", "Multi-Bank Support"],
      color: "hsl(213,50%,35%)",
    },
  ];

  return (
    <div className="bg-white min-h-[297mm] p-16">
      <h2 className="text-3xl font-bold text-[hsl(213,50%,20%)] mb-2">
        Payment Integrations
      </h2>
      <div className="w-24 h-1 bg-[hsl(173,60%,45%)] mb-4" />
      <p className="text-[hsl(213,20%,45%)] mb-8">
        Native support for local African payment methods alongside international card payments.
      </p>

      <div className="grid grid-cols-2 gap-8 mb-12">
        {paymentMethods.map((method) => (
          <div
            key={method.name}
            className="bg-[hsl(210,40%,98%)] rounded-xl p-6 border border-[hsl(213,50%,90%)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl text-white"
                style={{ backgroundColor: method.color }}
              >
                {method.icon}
              </div>
              <h4 className="text-xl font-bold text-[hsl(213,50%,20%)]">{method.name}</h4>
            </div>
            <ul className="space-y-2">
              {method.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-[hsl(213,20%,40%)]">
                  <span className="text-[hsl(173,60%,45%)]">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-[hsl(213,50%,20%)] to-[hsl(213,50%,30%)] rounded-xl p-8 text-white">
        <h3 className="text-xl font-bold mb-4">Payment Flow</h3>
        <div className="flex items-center justify-between gap-4">
          {["Invoice Generated", "Parent Notified", "Payment Made", "Receipt Sent", "Balance Updated"].map(
            (step, idx) => (
              <div key={step} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[hsl(173,60%,45%)] flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </div>
                <span className="text-sm">{step}</span>
                {idx < 4 && <span className="text-[hsl(173,60%,45%)]">→</span>}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
