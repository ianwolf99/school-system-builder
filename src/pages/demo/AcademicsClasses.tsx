import { DemoLayout } from "@/components/demo/DemoLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Search,
  Copy,
  Printer,
  Layers,
  BookOpen,
  Tag,
  Calendar,
  Bell,
  ArrowUpDown,
  MoreHorizontal,
  Monitor,
} from "lucide-react";

const tabItems = [
  { label: "Classes", icon: Layers, active: true },
  { label: "Sections", icon: BookOpen },
  { label: "Subjects", icon: Tag },
  { label: "Subject Categories", icon: Tag },
  { label: "Syllabus", icon: BookOpen },
  { label: "Timetable", icon: Calendar },
  { label: "Circulars", icon: Bell },
  { label: "Promote Students", icon: ArrowUpDown },
];

const classesData = [
  { id: 1, name: "Grade 1", nickname: "G1", capacity: 40, teacher: "Mrs. Jane Mwangi" },
  { id: 2, name: "Grade 2", nickname: "G2", capacity: 40, teacher: "Mr. John Ochieng" },
  { id: 3, name: "Grade 3", nickname: "G3", capacity: 35, teacher: "Mrs. Sarah Wanjiku" },
  { id: 4, name: "Grade 4", nickname: "G4", capacity: 35, teacher: "Mr. Peter Kamau" },
  { id: 5, name: "Grade 5", nickname: "G5", capacity: 30, teacher: "Mrs. Mary Atieno" },
  { id: 6, name: "Grade 6", nickname: "G6", capacity: 30, teacher: "Mr. David Njoroge" },
  { id: 7, name: "Grade 7", nickname: "G7", capacity: 30, teacher: "Mrs. Grace Wambui" },
  { id: 8, name: "Grade 8", nickname: "G8", capacity: 30, teacher: "Mr. James Kiprop" },
];

const AcademicsClasses = () => {
  return (
    <DemoLayout>
      <div className="space-y-6">
        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-2 bg-card p-2 rounded-xl border border-border">
          {tabItems.map((tab) => (
            <Button
              key={tab.label}
              variant={tab.active ? "default" : "ghost"}
              size="sm"
              className={`gap-2 ${tab.active ? "" : "text-muted-foreground"}`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Classes Section */}
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[hsl(173,60%,40%)] flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-xl">Classes</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Add Class
              </Button>
              <Button variant="outline" className="gap-2">
                <Copy className="w-4 h-4" />
                Copy
              </Button>
              <Button variant="outline" className="gap-2">
                <Printer className="w-4 h-4" />
                Print
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Search Bar */}
            <div className="mb-4">
              <div className="relative max-w-md">
                <Input placeholder="Search classes..." className="pr-10 bg-background" />
                <Button
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Table */}
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary/50">
                    <TableHead className="font-semibold">
                      <div className="flex items-center gap-2">
                        CLASS NAME
                        <ArrowUpDown className="w-3 h-3 text-muted-foreground" />
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold">NICK NAME</TableHead>
                    <TableHead className="font-semibold text-center">CAPACITY</TableHead>
                    <TableHead className="font-semibold">CLASS TEACHER</TableHead>
                    <TableHead className="font-semibold text-center">OPTIONS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {classesData.map((cls) => (
                    <TableRow key={cls.id} className="hover:bg-secondary/30">
                      <TableCell className="font-medium">{cls.name}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {cls.nickname}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className="border-primary text-primary">
                          {cls.capacity}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{cls.teacher}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-8 h-8 text-sms-info hover:bg-sms-info/10"
                          >
                            <Monitor className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-8 h-8 text-muted-foreground hover:bg-secondary"
                          >
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
              <span>Showing 1 to {classesData.length} of {classesData.length} entries</span>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                  1
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DemoLayout>
  );
};

export default AcademicsClasses;
