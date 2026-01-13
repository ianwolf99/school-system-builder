import { useState } from "react";
import { DemoLayout } from "@/components/demo/DemoLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search, FileDown, Printer, Pencil, Trash2, FolderOpen } from "lucide-react";

const existingCategories = [
  { id: 1, name: "Day Scholar", description: "Students who commute daily", active: true },
  { id: 2, name: "Boarding", description: "Students residing in school hostels", active: true },
  { id: 3, name: "Special Needs", description: "Students requiring additional support", active: true },
  { id: 4, name: "Scholarship", description: "Students on academic scholarships", active: false },
];

const StudentCategories = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [active, setActive] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = existingCategories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DemoLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[hsl(173,60%,40%)] flex items-center justify-center">
            <Plus className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Student Categories</h1>
            <p className="text-sm text-muted-foreground">
              Manage student classification types
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Add Category Form */}
          <Card className="lg:col-span-2 bg-card">
            <CardHeader className="bg-gradient-to-r from-primary to-[hsl(173,60%,40%)] rounded-t-lg">
              <CardTitle className="text-white flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add New Category
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-1">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="e.g., Day Scholar or Boarding Student"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Brief description of this category..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="active"
                  checked={active}
                  onCheckedChange={(checked) => setActive(checked === true)}
                />
                <Label htmlFor="active" className="text-sm font-normal cursor-pointer">
                  Active
                </Label>
              </div>

              <Button className="w-full gap-2">
                <Plus className="w-4 h-4" />
                Save Category
              </Button>
            </CardContent>
          </Card>

          {/* Categories List */}
          <Card className="lg:col-span-3 bg-card">
            <CardHeader className="bg-gradient-to-r from-sms-info to-[hsl(199,89%,38%)] rounded-t-lg">
              <CardTitle className="text-white flex items-center gap-2">
                <FolderOpen className="w-5 h-5" />
                Existing Categories
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {/* Export & Search */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
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
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Search:</span>
                  <Input
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-48 bg-background"
                  />
                </div>
              </div>

              {/* Table */}
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-secondary/50">
                      <TableHead className="font-semibold">NAME</TableHead>
                      <TableHead className="font-semibold">DESCRIPTION</TableHead>
                      <TableHead className="font-semibold text-center">STATUS</TableHead>
                      <TableHead className="font-semibold text-center">OPTIONS</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCategories.length > 0 ? (
                      filteredCategories.map((category) => (
                        <TableRow key={category.id}>
                          <TableCell className="font-medium">{category.name}</TableCell>
                          <TableCell className="text-muted-foreground">
                            {category.description}
                          </TableCell>
                          <TableCell className="text-center">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                category.active
                                  ? "bg-primary/10 text-primary"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {category.active ? "Active" : "Inactive"}
                            </span>
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
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center py-8">
                          <FolderOpen className="w-12 h-12 text-muted-foreground/40 mx-auto mb-2" />
                          <p className="text-muted-foreground">No categories found</p>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-4 text-sm text-muted-foreground">
                Showing 1 to {filteredCategories.length} of {existingCategories.length} entries
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DemoLayout>
  );
};

export default StudentCategories;
