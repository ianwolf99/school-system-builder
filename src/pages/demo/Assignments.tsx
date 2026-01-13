import { DemoLayout } from "@/components/demo/DemoLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ClipboardList,
  Plus,
  Search,
  FileDown,
  Printer,
  FileText,
  Filter,
} from "lucide-react";

const Assignments = () => {
  return (
    <DemoLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[hsl(173,60%,40%)] flex items-center justify-center">
              <ClipboardList className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Assignments</h1>
              <p className="text-sm text-muted-foreground">
                Create and manage student assignments
              </p>
            </div>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            New Assignment
          </Button>
        </div>

        {/* Filters */}
        <Card className="bg-card">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium">Class</label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="All Classes" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="all">All Classes</SelectItem>
                    <SelectItem value="grade1">Grade 1</SelectItem>
                    <SelectItem value="grade2">Grade 2</SelectItem>
                    <SelectItem value="grade3">Grade 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Section</label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="All Sections" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="all">All Sections</SelectItem>
                    <SelectItem value="a">Section A</SelectItem>
                    <SelectItem value="b">Section B</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="All Subjects" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="all">All Subjects</SelectItem>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Teacher</label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="All Teachers" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="all">All Teachers</SelectItem>
                    <SelectItem value="1">Mrs. Jane Mwangi</SelectItem>
                    <SelectItem value="2">Mr. John Ochieng</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="submitted">Submitted</SelectItem>
                    <SelectItem value="graded">Graded</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <div className="flex gap-2">
                  <Input placeholder="Search assignments..." className="bg-background" />
                  <Button className="gap-2 shrink-0">
                    <Search className="w-4 h-4" />
                    Filter
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Export Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1 text-primary border-primary hover:bg-primary hover:text-white">
            <FileDown className="w-4 h-4" />
            CSV
          </Button>
          <Button variant="outline" size="sm" className="gap-1 text-sms-success border-sms-success hover:bg-sms-success hover:text-white">
            <FileDown className="w-4 h-4" />
            Excel
          </Button>
          <Button variant="outline" size="sm" className="gap-1 text-destructive border-destructive hover:bg-destructive hover:text-white">
            <FileDown className="w-4 h-4" />
            PDF
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Printer className="w-4 h-4" />
            Print
          </Button>
        </div>

        {/* Assignments Table */}
        <Card className="bg-card">
          <CardContent className="p-0">
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary/50">
                    <TableHead className="font-semibold">Title</TableHead>
                    <TableHead className="font-semibold">Class</TableHead>
                    <TableHead className="font-semibold">Subject</TableHead>
                    <TableHead className="font-semibold">Teacher</TableHead>
                    <TableHead className="font-semibold">Due Date</TableHead>
                    <TableHead className="font-semibold text-center">Submissions</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={8} className="h-48">
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                          <FileText className="w-8 h-8 text-muted-foreground/50" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          No Assignments Found
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Try adjusting your search criteria or create a new assignment.
                        </p>
                        <Button className="gap-2">
                          <Plus className="w-4 h-4" />
                          Create First Assignment
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DemoLayout>
  );
};

export default Assignments;
