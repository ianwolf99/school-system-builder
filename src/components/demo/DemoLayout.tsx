import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  Users,
  GraduationCap,
  Building2,
  Clock,
  CreditCard,
  FileQuestion,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Search,
  Bell,
  Menu,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MenuItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  path?: string;
  children?: { title: string; path: string }[];
}

const menuItems: MenuItem[] = [
  { title: "Dashboard", icon: Home, path: "/demo" },
  {
    title: "Manage Students",
    icon: Users,
    children: [
      { title: "Student Categories", path: "/demo/students/categories" },
      { title: "Admit Student", path: "/demo/students/admit" },
      { title: "Students List", path: "/demo/students/list" },
    ],
  },
  {
    title: "Manage Academics",
    icon: GraduationCap,
    children: [
      { title: "Classes", path: "/demo/academics/classes" },
      { title: "Sections", path: "/demo/academics/sections" },
      { title: "Subjects", path: "/demo/academics/subjects" },
      { title: "Timetable", path: "/demo/academics/timetable" },
    ],
  },
  {
    title: "Human Resources",
    icon: Building2,
    children: [
      { title: "Departments", path: "/demo/hr/departments" },
      { title: "Teachers", path: "/demo/hr/teachers" },
      { title: "Staff", path: "/demo/hr/staff" },
    ],
  },
  {
    title: "Attendance",
    icon: Clock,
    children: [
      { title: "Student Daily", path: "/demo/attendance/student-daily" },
      { title: "Staff Daily", path: "/demo/attendance/staff-daily" },
      { title: "Reports", path: "/demo/attendance/reports" },
    ],
  },
  {
    title: "Finance",
    icon: CreditCard,
    children: [
      { title: "Dashboard", path: "/demo/finance" },
      { title: "Fee Collection", path: "/demo/finance/fees" },
      { title: "Expenses", path: "/demo/finance/expenses" },
      { title: "Payroll", path: "/demo/finance/payroll" },
    ],
  },
  {
    title: "CBT Exams",
    icon: FileQuestion,
    children: [
      { title: "All Exams", path: "/demo/exams" },
      { title: "Create Exam", path: "/demo/exams/create" },
    ],
  },
  {
    title: "Study Materials",
    icon: BookOpen,
    children: [
      { title: "Assignments", path: "/demo/materials/assignments" },
      { title: "Materials", path: "/demo/materials/list" },
    ],
  },
];

interface DemoLayoutProps {
  children: React.ReactNode;
}

export const DemoLayout = ({ children }: DemoLayoutProps) => {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState<string[]>(["Manage Students", "Finance"]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleMenu = (title: string) => {
    setExpandedMenus((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  const isActive = (path?: string) => path && location.pathname === path;
  const isParentActive = (children?: { path: string }[]) =>
    children?.some((child) => location.pathname === child.path);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "flex flex-col bg-card border-r border-border transition-all duration-300",
          sidebarCollapsed ? "w-16" : "w-64"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[hsl(173,60%,40%)] flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          {!sidebarCollapsed && (
            <div>
              <h1 className="font-bold text-foreground">SmartSchool</h1>
              <p className="text-xs text-muted-foreground">Management System</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3">
          {menuItems.map((item) => (
            <div key={item.title} className="mb-1">
              {item.path ? (
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  {!sidebarCollapsed && item.title}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => toggleMenu(item.title)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                      isParentActive(item.children)
                        ? "bg-sidebar-accent text-primary"
                        : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <item.icon className="w-5 h-5 shrink-0" />
                    {!sidebarCollapsed && (
                      <>
                        <span className="flex-1 text-left">{item.title}</span>
                        {expandedMenus.includes(item.title) ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </>
                    )}
                  </button>
                  {!sidebarCollapsed &&
                    expandedMenus.includes(item.title) &&
                    item.children && (
                      <div className="ml-5 pl-3 border-l-2 border-border mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={cn(
                              "block px-3 py-2 rounded-lg text-sm transition-all",
                              isActive(child.path)
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                            )}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                </>
              )}
            </div>
          ))}
        </nav>

        {/* Back to Proposal */}
        <div className="p-3 border-t border-border">
          <Link to="/">
            <Button variant="outline" className="w-full justify-start gap-2">
              <LogOut className="w-4 h-4" />
              {!sidebarCollapsed && "Back to Home"}
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-10 w-64 bg-secondary border-0"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <MessageSquare className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-[10px] text-primary-foreground rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-[10px] text-accent-foreground rounded-full flex items-center justify-center">
                5
              </span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 px-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                      AD
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left hidden md:block">
                    <p className="text-sm font-medium">Admin User</p>
                    <p className="text-xs text-muted-foreground">Administrator</p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-card">
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
};
