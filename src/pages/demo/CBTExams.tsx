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
import { Monitor, Plus, ArrowLeft, Filter, FileQuestion, Clock, Users } from "lucide-react";

const CBTExams = () => {
  return (
    <DemoLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <Card className="bg-gradient-to-r from-accent to-[hsl(35,93%,47%)] border-0">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <div className="text-white">
                <h1 className="text-xl font-bold">Computer-Based Tests (CBT)</h1>
                <p className="text-sm text-white/80">Create and manage online examinations</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="gap-2 bg-white text-accent hover:bg-white/90">
                <Plus className="w-4 h-4" />
                Create CBT Exam
              </Button>
              <Button variant="secondary" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="bg-card">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <Input placeholder="Search exams..." className="bg-background" />
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
                    <SelectItem value="kiswahili">Kiswahili</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="secondary" className="gap-2 h-10">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Exams Table */}
        <Card className="bg-card">
          <CardContent className="p-0">
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary/50">
                    <TableHead className="font-semibold">Exam Title</TableHead>
                    <TableHead className="font-semibold">Subject</TableHead>
                    <TableHead className="font-semibold">Classes</TableHead>
                    <TableHead className="font-semibold">Start Time</TableHead>
                    <TableHead className="font-semibold">Duration</TableHead>
                    <TableHead className="font-semibold text-center">Questions</TableHead>
                    <TableHead className="font-semibold text-center">Max Score</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={9} className="h-48">
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                          <FileQuestion className="w-8 h-8 text-muted-foreground/50" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          No CBT exams found.
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          <a href="#" className="text-primary hover:underline">
                            Create your first exam
                          </a>
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-primary to-[hsl(173,60%,40%)] text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <FileQuestion className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Total Exams</p>
                  <p className="text-3xl font-bold">0</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent to-[hsl(35,93%,47%)] text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Active Now</p>
                  <p className="text-3xl font-bold">0</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-sms-info to-[hsl(199,89%,38%)] text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Total Attempts</p>
                  <p className="text-3xl font-bold">0</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DemoLayout>
  );
};

export default CBTExams;
