interface ModuleCardProps {
  number: number;
  title: string;
  icon: string;
  features: string[];
  color?: string;
}

const ModuleCard = ({ number, title, icon, features, color = "hsl(213,50%,20%)" }: ModuleCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-[hsl(213,50%,90%)] p-5 page-break-inside-avoid">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg font-bold"
          style={{ backgroundColor: color }}
        >
          {number}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <h4 className="font-bold text-[hsl(213,50%,20%)]">{title}</h4>
        </div>
      </div>

      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-[hsl(213,20%,40%)]">
            <span className="text-[hsl(173,60%,45%)] mt-0.5">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModuleCard;
