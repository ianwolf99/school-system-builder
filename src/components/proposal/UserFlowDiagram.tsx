import { cn } from "@/lib/utils";

interface FlowStep {
  label: string;
  children?: FlowStep[];
}

interface UserFlowDiagramProps {
  title: string;
  icon: string;
  color: string;
  flow: FlowStep;
}

const FlowNode = ({ label, isRoot = false }: { label: string; isRoot?: boolean }) => (
  <div
    className={cn(
      "px-4 py-2 rounded-lg text-center font-medium text-sm border-2",
      isRoot
        ? "bg-[hsl(213,50%,20%)] text-white border-[hsl(213,50%,30%)]"
        : "bg-white text-[hsl(213,50%,20%)] border-[hsl(213,50%,80%)]"
    )}
  >
    {label}
  </div>
);

const UserFlowDiagram = ({ title, icon, color, flow }: UserFlowDiagramProps) => {
  return (
    <div className="mb-8 page-break-inside-avoid">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[hsl(213,50%,20%)]">{title}</h3>
      </div>

      <div className="bg-[hsl(210,40%,98%)] rounded-xl p-6 border border-[hsl(213,50%,90%)]">
        {/* Root Node */}
        <div className="flex flex-col items-center">
          <FlowNode label={flow.label} isRoot />

          {flow.children && flow.children.length > 0 && (
            <>
              {/* Connector Line */}
              <div className="w-0.5 h-6 bg-[hsl(213,50%,70%)]" />

              {/* Arrow */}
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[hsl(213,50%,70%)] mb-2" />

              {/* First Level Children */}
              <div className="flex flex-wrap justify-center gap-4">
                {flow.children.map((child, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <FlowNode label={child.label} />

                    {child.children && child.children.length > 0 && (
                      <>
                        <div className="w-0.5 h-4 bg-[hsl(213,50%,80%)]" />
                        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-[hsl(213,50%,80%)] mb-1" />

                        {/* Sub-children */}
                        <div className="flex flex-col gap-1 items-center">
                          {child.children.map((sub, subIdx) => (
                            <div
                              key={subIdx}
                              className="px-3 py-1 bg-[hsl(173,60%,45%)] text-white text-xs rounded-md"
                            >
                              {sub.label}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserFlowDiagram;
