import { useState } from "react";
import { DemoLayout } from "@/components/demo/DemoLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, X, Save, FileDown, Printer, Pencil, Trash2, Building2, Users } from "lucide-react";

const departmentsData = [
  {
    id: 1,
    name: "Administration",
    designations: ["Principal", "Vice Principal", "Registrar"],
    totalStaff: 5,
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Teaching Staff",
    designations: ["HOD", "Senior Teacher", "Teacher", "Assistant Teacher"],
    totalStaff: 42,
    color: "bg-primary",
  },
  {
    id: 3,
    name: "Finance",
    designations: ["Bursar", "Accountant", "Cashier"],
    totalStaff: 4,
    color: "bg-accent",
  },
  {
    id: 4,
    name: "Support Staff",
    designations: ["Cleaner", "Security", "Driver", "Cook"],
    totalStaff: 18,
    color: "bg-purple-500",
  },
  {
    id: 5,
    name: "IT Department",
    designations: ["IT Manager", "Lab Technician"],
    totalStaff: 3,
    color: "bg-sms-info",
  },
];

const HRDepartments = () => {
  const [deptName, setDeptName] = useState("");
  const [designations, setDesignations] = useState<string[]>([""]);

  const addDesignation = () => {
    setDesignations([...designations, ""]);
  };

  const removeDesignation = (index: number) => {
    setDesignations(designations.filter((_, i) => i !== index));
  };

  const updateDesignation = (index: number, value: string) => {
    const updated = [...designations];
    updated[index] = value;
    setDesignations(updated);
  };

  return (
    <DemoLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-[hsl(35,93%,47%)] flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Department & Designation</h1>
              <p className="text-sm text-muted-foreground">
                Organize your staff structure
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gradient-to-r from-sms-info to-[hsl(199,89%,38%)] text-white px-4 py-2 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold">{departmentsData.length}</div>
              <div className="text-xs opacity-80">DEPARTMENTS</div>
            </div>
            <div className="w-px h-8 bg-white/30" />
            <div className="text-center">
              <div className="text-2xl font-bold">
                {departmentsData.reduce((acc, d) => acc + d.totalStaff, 0)}
              </div>
              <div className="text-xs opacity-80">STAFF</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Add Department Form */}
          <Card className="lg:col-span-2 bg-card">
            <CardHeader className="bg-gradient-to-r from-primary to-[hsl(173,60%,40%)] rounded-t-lg">
              <CardTitle className="text-white flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add Department
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="deptName" className="flex items-center gap-1">
                  Department Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="deptName"
                  placeholder="Enter department name"
                  value={deptName}
                  onChange={(e) => setDeptName(e.target.value)}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  Designations <span className="text-destructive">*</span>
                </Label>
                {designations.map((designation, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      placeholder="New Designation"
                      value={designation}
                      onChange={(e) => updateDesignation(index, e.target.value)}
                      className="bg-background"
                    />
                    {designations.length > 1 && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="shrink-0 text-destructive hover:bg-destructive/10"
                        onClick={() => removeDesignation(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full gap-2 border-dashed border-primary text-primary hover:bg-primary hover:text-white"
                onClick={addDesignation}
              >
                <Plus className="w-4 h-4" />
                Add More
              </Button>

              <Button className="w-full gap-2">
                <Save className="w-4 h-4" />
                Save Department
              </Button>
            </CardContent>
          </Card>

          {/* Departments List */}
          <Card className="lg:col-span-3 bg-card">
            <CardHeader className="border-b border-border">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  All Departments
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-1 text-primary">
                    <FileDown className="w-4 h-4" />
                    CSV
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Printer className="w-4 h-4" />
                    Print
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {/* Search */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-muted-foreground">Search:</span>
                <Input placeholder="Search departments..." className="max-w-xs bg-background" />
              </div>

              {/* Table */}
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-secondary/50">
                      <TableHead className="font-semibold">DEPARTMENT NAME</TableHead>
                      <TableHead className="font-semibold">DESIGNATION</TableHead>
                      <TableHead className="font-semibold text-center">TOTAL STAFF</TableHead>
                      <TableHead className="font-semibold text-center">ACTIONS</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {departmentsData.map((dept) => (
                      <TableRow key={dept.id} className="hover:bg-secondary/30">
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-lg ${dept.color} flex items-center justify-center text-white font-bold text-sm`}>
                              {dept.name.charAt(0)}
                            </div>
                            <span className="font-medium">{dept.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {dept.designations.length > 0 ? (
                              dept.designations.map((d, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {d}
                                </Badge>
                              ))
                            ) : (
                              <span className="text-muted-foreground italic">No designations</span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                            {dept.totalStaff}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center justify-center gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="w-8 h-8 text-sms-info hover:bg-sms-info/10"
                            >
                              <Pencil className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="w-8 h-8 text-destructive hover:bg-destructive/10"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DemoLayout>
  );
};

export default HRDepartments;
