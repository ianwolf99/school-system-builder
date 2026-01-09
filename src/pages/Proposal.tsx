// AKILIMATIC School Management System Proposal Generator
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import { Download, Eye, Loader2 } from "lucide-react";
import CoverPage from "@/components/proposal/CoverPage";
import TableOfContents from "@/components/proposal/TableOfContents";
import ExecutiveSummary from "@/components/proposal/ExecutiveSummary";
import { UserFlowsPage1, UserFlowsPage2 } from "@/components/proposal/UserFlowsSection";
import { ModulesPage1, ModulesPage2, ModulesPage3 } from "@/components/proposal/ModulesSection";
import PaymentSection from "@/components/proposal/PaymentSection";
import { TechArchitecturePage1, TechArchitecturePage2 } from "@/components/proposal/TechArchitectureSection";
import MethodologySection from "@/components/proposal/MethodologySection";
import { TimelinePage1, TimelinePage2 } from "@/components/proposal/TimelineSection";
import WhyUsSection from "@/components/proposal/WhyUsSection";
import ContactSection from "@/components/proposal/ContactSection";

const Proposal = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const generatePDF = async () => {
    if (!contentRef.current) return;

    setIsGenerating(true);

    try {
      const content = contentRef.current;
      const sections = content.querySelectorAll(".pdf-page");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = 210;
      const pdfHeight = 297;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;

        const canvas = await html2canvas(section, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: "#ffffff",
          width: section.scrollWidth,
          height: section.scrollHeight,
        });

        const imgData = canvas.toDataURL("image/png", 1.0);
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;

        if (i > 0) {
          pdf.addPage();
        }

        // Scale to fit if needed
        if (imgHeight > pdfHeight) {
          const scale = pdfHeight / imgHeight;
          const scaledWidth = imgWidth * scale;
          const xOffset = (pdfWidth - scaledWidth) / 2;
          pdf.addImage(imgData, "PNG", xOffset, 0, scaledWidth, pdfHeight);
        } else {
          pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        }
      }

      pdf.save("AKILIMATIC_School_Management_System_Proposal.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const pageStyle = {
    width: "210mm",
    height: "297mm",
    overflow: "hidden",
    backgroundColor: "white",
  };

  return (
    <div className="min-h-screen bg-[hsl(210,40%,96%)]">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-[hsl(213,50%,20%)]">
              School Management System Proposal
            </h1>
            <p className="text-sm text-[hsl(213,20%,50%)]">AKILIMATIC AI SOLUTIONS COMPANY LIMITED</p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setIsPreviewMode(!isPreviewMode)}
              className="gap-2"
            >
              <Eye className="w-4 h-4" />
              {isPreviewMode ? "Exit Preview" : "Preview"}
            </Button>

            <Button
              onClick={generatePDF}
              disabled={isGenerating}
              className="gap-2 bg-[hsl(173,60%,40%)] hover:bg-[hsl(173,60%,35%)]"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Download PDF
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-24 pb-12">
        <div
          ref={contentRef}
          className={`mx-auto ${isPreviewMode ? "shadow-2xl" : ""}`}
          style={{ width: "210mm" }}
        >
          <div className="pdf-page" style={pageStyle}>
            <CoverPage />
          </div>

          <div className="pdf-page" style={pageStyle}>
            <TableOfContents />
          </div>

          <div className="pdf-page" style={pageStyle}>
            <ExecutiveSummary />
          </div>

          <div className="pdf-page" style={pageStyle}>
            <UserFlowsPage1 />
          </div>

          <div className="pdf-page" style={pageStyle}>
            <UserFlowsPage2 />
          </div>

          <div className="pdf-page" style={pageStyle}>
            <ModulesPage1 />
          </div>

          <div className="pdf-page" style={pageStyle}>
            <ModulesPage2 />
          </div>

          <div className="pdf-page" style={pageStyle}>
            <ModulesPage3 />
          </div>

          <div className="pdf-page" style={pageStyle}>
            <PaymentSection />
          </div>

          <div className="pdf-page" style={pageStyle}>
            <TechArchitecturePage1 />
          </div>

          <div className="pdf-page" style={pageStyle}>
            <TechArchitecturePage2 />
          </div>

          <div className="pdf-page" style={pageStyle}>
            <MethodologySection />
          </div>

          <div className="pdf-page" style={pageStyle}>
            <TimelinePage1 />
          </div>

          <div className="pdf-page" style={pageStyle}>
            <TimelinePage2 />
          </div>

          <div className="pdf-page" style={pageStyle}>
            <WhyUsSection />
          </div>

          <div className="pdf-page" style={pageStyle}>
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposal;