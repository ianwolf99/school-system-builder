import akilimaticLogo from "@/assets/akilimatic-logo.jpeg";

const ContactSection = () => {
  return (
    <div className="bg-gradient-to-br from-[hsl(213,50%,15%)] via-[hsl(213,50%,20%)] to-[hsl(213,50%,25%)] min-h-[297mm] p-16 flex flex-col items-center justify-center relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[hsl(173,60%,45%)] blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[hsl(173,60%,45%)] blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* Logo */}
        <img
          src={akilimaticLogo}
          alt="AKILIMATIC"
          className="w-32 h-32 rounded-2xl object-contain bg-white p-3 mx-auto mb-8 shadow-2xl"
        />

        <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your School?</h2>
        <p className="text-xl text-white/80 mb-12">
          Let's discuss how AKILIMATIC can build the perfect school management system for 
          your institution.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">📧</div>
            <h4 className="text-white font-bold mb-1">Email Us</h4>
            <p className="text-[hsl(173,60%,55%)]">info@akilimatic.com</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">📞</div>
            <h4 className="text-white font-bold mb-1">Call Us</h4>
            <p className="text-[hsl(173,60%,55%)]">+254 XXX XXX XXX</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">🌐</div>
            <h4 className="text-white font-bold mb-1">Website</h4>
            <p className="text-[hsl(173,60%,55%)]">www.akilimatic.com</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">📍</div>
            <h4 className="text-white font-bold mb-1">Location</h4>
            <p className="text-[hsl(173,60%,55%)]">Nairobi, Kenya</p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-xl p-8 text-left">
          <h3 className="text-xl font-bold text-[hsl(213,50%,20%)] mb-4">Next Steps</h3>
          <div className="space-y-4">
            {[
              "Schedule a discovery call to discuss your requirements",
              "Receive a customized quotation based on your school size",
              "Review demo of existing modules",
              "Sign agreement and kick off development",
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[hsl(173,60%,45%)] text-white flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <p className="text-[hsl(213,20%,35%)]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-center text-white/40 text-sm">
        <p>© 2025 AKILIMATIC AI SOLUTIONS COMPANY. All rights reserved.</p>
        <p className="mt-1">This proposal is confidential and intended solely for the recipient.</p>
      </div>
    </div>
  );
};

export default ContactSection;
