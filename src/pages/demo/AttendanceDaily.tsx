import { DemoLayout } from "@/components/demo/DemoLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Search, ArrowLeft, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AttendanceDaily = () => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <DemoLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <Card className="bg-gradient-to-r from-accent to-[hsl(35,93%,47%)] border-0">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div className="text-white">
                <h1 className="text-xl font-bold">Daily Student Attendance</h1>
                <p className="text-sm text-white/80">Mark and track daily attendance</p>
              </div>
            </div>
            <Button variant="secondary" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="bg-card">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <Label>Class Level</Label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select Class Level" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="grade1">Grade 1</SelectItem>
                    <SelectItem value="grade2">Grade 2</SelectItem>
                    <SelectItem value="grade3">Grade 3</SelectItem>
                    <SelectItem value="grade4">Grade 4</SelectItem>
                    <SelectItem value="grade5">Grade 5</SelectItem>
                    <SelectItem value="grade6">Grade 6</SelectItem>
                    <SelectItem value="grade7">Grade 7</SelectItem>
                    <SelectItem value="grade8">Grade 8</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Section</Label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select Section" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="a">Section A</SelectItem>
                    <SelectItem value="b">Section B</SelectItem>
                    <SelectItem value="c">Section C</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Date</Label>
                <Input type="date" defaultValue={today} className="bg-background" />
              </div>

              <Button className="gap-2 h-10">
                <Search className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Empty State */}
        <Card className="bg-card">
          <CardContent className="p-12">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-muted-foreground/50" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No Students Found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Please select a class level and section to view students for attendance.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Gradient Footer */}
        <div className="h-24 rounded-xl bg-gradient-to-r from-muted via-background to-muted" />
      </div>
    </DemoLayout>
  );
};

export default AttendanceDaily;
