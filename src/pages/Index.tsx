import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[hsl(213,50%,15%)] via-[hsl(213,50%,20%)] to-[hsl(213,50%,25%)]">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">AKILIMATIC AI SOLUTIONS</h1>
        <p className="text-xl text-white/70 mb-8">School Management System Proposal</p>
        <Link to="/proposal">
          <Button size="lg" className="gap-2 bg-[hsl(173,60%,40%)] hover:bg-[hsl(173,60%,35%)]">
            <FileText className="w-5 h-5" />
            View & Download Proposal
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
