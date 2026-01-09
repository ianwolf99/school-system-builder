import akilimaticLogo from "@/assets/akilimatic-logo.jpeg";

const CoverPage = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-gradient-to-br from-[hsl(213,50%,15%)] via-[hsl(213,50%,20%)] to-[hsl(213,50%,25%)] min-h-[297mm] flex flex-col items-center justify-center p-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[hsl(173,60%,45%)] blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[hsl(173,60%,45%)] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-12">
          <img
            src={akilimaticLogo}
            alt="AKILIMATIC AI SOLUTIONS"
            className="w-48 h-48 object-contain mx-auto rounded-2xl shadow-2xl bg-white p-4"
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
          School Management System
        </h1>
        <h2 className="text-2xl text-[hsl(173,60%,55%)] font-medium mb-8">
          Enterprise SaaS Platform for Educational Institutions
        </h2>

        {/* Divider */}
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[hsl(173,60%,45%)] to-transparent mx-auto mb-12" />

        {/* Subtitle */}
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-16 leading-relaxed">
          A comprehensive, cloud-based solution enabling educational institutions 
          across Kenya to digitize their entire operations with modern AI-powered technology.
        </p>

        {/* Features Highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["23+ Modules", "6 User Portals", "M-Pesa Ready", "4-6 Weeks Delivery", "Multi-School SaaS"].map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Company Name */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-lg mx-auto">
          <p className="text-[hsl(173,60%,55%)] text-sm font-medium mb-2">PREPARED BY</p>
          <p className="text-2xl font-bold text-white">AKILIMATIC AI SOLUTIONS</p>
          <p className="text-white/80 text-lg mt-1">COMPANY LIMITED</p>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-white/40 text-sm">
          {currentDate} • Version 1.0 • Confidential
        </p>
      </div>
    </div>
  );
};

export default CoverPage;
