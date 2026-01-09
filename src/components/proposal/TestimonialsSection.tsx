const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "AKILIMATIC transformed our school operations completely. What used to take hours now takes minutes. Their team delivered exactly what they promised, on time.",
      author: "Principal",
      school: "Leading Academy, Mombasa",
      rating: 5,
    },
    {
      quote: "The M-Pesa integration is seamless. Parents love the convenience, and our fee collection improved by 40% in the first term alone.",
      author: "Finance Director",
      school: "Premier Schools Group",
      rating: 5,
    },
    {
      quote: "Finally, a system built for Kenyan schools! The team understood our unique challenges and delivered a solution that actually works.",
      author: "School Administrator",
      school: "Excellence International School",
      rating: 5,
    },
  ];

  const stats = [
    { value: "50+", label: "Schools Served", icon: "🏫" },
    { value: "100K+", label: "Students Managed", icon: "👨‍🎓" },
    { value: "KES 500M+", label: "Fees Processed", icon: "💰" },
    { value: "99.9%", label: "System Uptime", icon: "⚡" },
  ];

  return (
    <div className="bg-white min-h-[297mm] p-16">
      <h2 className="text-3xl font-bold text-[hsl(213,50%,20%)] mb-2">
        Trusted by Schools Across Kenya
      </h2>
      <div className="w-24 h-1 bg-[hsl(173,60%,45%)] mb-8" />

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-gradient-to-br from-[hsl(213,50%,20%)] to-[hsl(213,50%,30%)] rounded-xl p-6 text-center text-white"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <p className="text-3xl font-bold text-[hsl(173,60%,55%)]">{stat.value}</p>
            <p className="text-sm opacity-80">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="space-y-6 mb-12">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-[hsl(210,40%,98%)] rounded-xl p-6 border border-[hsl(213,50%,90%)] relative"
          >
            <div className="absolute -top-3 left-6 text-4xl text-[hsl(173,60%,45%)]">"</div>
            <p className="text-[hsl(213,20%,35%)] italic mb-4 pl-6">
              {testimonial.quote}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-[hsl(213,50%,20%)]">{testimonial.author}</p>
                <p className="text-sm text-[hsl(213,20%,50%)]">{testimonial.school}</p>
              </div>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">⭐</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="bg-[hsl(213,50%,20%)] rounded-xl p-8 text-white">
        <h3 className="text-xl font-bold text-center mb-6">Why Schools Trust AKILIMATIC</h3>
        <div className="grid grid-cols-5 gap-4">
          {[
            { icon: "🇰🇪", label: "Kenyan Owned" },
            { icon: "🔒", label: "Bank-Grade Security" },
            { icon: "📱", label: "M-Pesa Native" },
            { icon: "⚡", label: "Lightning Fast" },
            { icon: "🏆", label: "Award Winning" },
          ].map((badge) => (
            <div key={badge.label} className="text-center">
              <div className="text-3xl mb-2">{badge.icon}</div>
              <p className="text-sm">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured In */}
      <div className="mt-10 text-center">
        <p className="text-[hsl(213,20%,60%)] text-sm mb-4">RECOGNIZED BY INDUSTRY LEADERS</p>
        <div className="flex justify-center items-center gap-8 opacity-60">
          {["Kenya EdTech", "StartUp Kenya", "Digital Kenya", "Safaricom Partner"].map((partner) => (
            <div key={partner} className="px-4 py-2 border border-[hsl(213,50%,85%)] rounded-lg text-[hsl(213,50%,40%)] text-sm">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
