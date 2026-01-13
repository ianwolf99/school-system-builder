// App Root Component
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Proposal from "./pages/Proposal";
import NotFound from "./pages/NotFound";
import DemoDashboard from "./pages/demo/DemoDashboard";
import StudentCategories from "./pages/demo/StudentCategories";
import AcademicsClasses from "./pages/demo/AcademicsClasses";
import HRDepartments from "./pages/demo/HRDepartments";
import AttendanceDaily from "./pages/demo/AttendanceDaily";
import FinanceDashboard from "./pages/demo/FinanceDashboard";
import CBTExams from "./pages/demo/CBTExams";
import Assignments from "./pages/demo/Assignments";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/demo" element={<DemoDashboard />} />
          <Route path="/demo/students/categories" element={<StudentCategories />} />
          <Route path="/demo/academics/classes" element={<AcademicsClasses />} />
          <Route path="/demo/hr/departments" element={<HRDepartments />} />
          <Route path="/demo/attendance/student-daily" element={<AttendanceDaily />} />
          <Route path="/demo/finance" element={<FinanceDashboard />} />
          <Route path="/demo/exams" element={<CBTExams />} />
          <Route path="/demo/materials/assignments" element={<Assignments />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
