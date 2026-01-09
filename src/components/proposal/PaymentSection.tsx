const PaymentSection = () => {
  const paymentMethods = [
    {
      name: "M-Pesa (Kenya)",
      icon: "🇰🇪",
      features: ["Paybill Integration", "Till Number Support", "STK Push (Instant Payment)", "Lipa na M-Pesa", "C2B & B2C Transactions", "Real-time Confirmation", "Auto-Reconciliation"],
      color: "hsl(120,60%,40%)",
    },
    {
      name: "Bank Transfers",
      icon: "🏦",
      features: ["Manual Entry & Recording", "Bank Statement Import", "Reconciliation Dashboard", "Multi-Bank Support (KCB, Equity, Co-op, etc.)", "Pending Payments Tracking", "Receipt Generation"],
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
        Native Kenyan payment methods - built for how Kenya pays.
      </p>

      <div className="grid grid-cols-2 gap-8 mb-12">
        {paymentMethods.map((method) => (
          <div
            key={method.name}
            className="bg-[hsl(210,40%,98%)] rounded-xl p-6 border border-[hsl(213,50%,90%)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl text-white"
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

      {/* M-Pesa Highlight */}
      <div className="bg-[hsl(120,70%,95%)] border-2 border-[hsl(120,60%,40%)] rounded-xl p-6 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-4xl">📱</div>
          <div>
            <h4 className="text-xl font-bold text-[hsl(120,60%,30%)]">M-Pesa First Approach</h4>
            <p className="text-[hsl(120,40%,35%)]">Built specifically for the Kenyan market</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            { stat: "98%", label: "M-Pesa Adoption in Kenya" },
            { stat: "Instant", label: "Payment Confirmation" },
            { stat: "24/7", label: "Transaction Availability" },
          ].map((item) => (
            <div key={item.label} className="text-center bg-white rounded-lg p-3">
              <p className="text-2xl font-bold text-[hsl(120,60%,35%)]">{item.stat}</p>
              <p className="text-sm text-[hsl(120,30%,40%)]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Flow */}
      <div className="bg-gradient-to-r from-[hsl(213,50%,20%)] to-[hsl(213,50%,30%)] rounded-xl p-8 text-white">
        <h3 className="text-xl font-bold mb-4">Payment Flow</h3>
        <div className="flex items-center justify-between gap-4">
          {["Invoice Generated", "Parent Notified (SMS)", "M-Pesa Payment", "Auto-Confirmation", "Receipt Sent"].map(
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
