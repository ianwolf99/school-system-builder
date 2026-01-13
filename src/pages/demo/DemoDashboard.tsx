import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  GraduationCap,
  Building2,
  UserCheck,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { DemoLayout } from "@/components/demo/DemoLayout";

const stats = [
  {
    title: "Students",
    value: "1,248",
    icon: Users,
    color: "from-primary to-[hsl(173,60%,40%)]",
    trend: "+12%",
    trendUp: true,
  },
  {
    title: "Teachers",
    value: "86",
    icon: GraduationCap,
    color: "from-[hsl(199,89%,48%)] to-[hsl(199,89%,38%)]",
    trend: "+3%",
    trendUp: true,
  },
  {
    title: "Staff",
    value: "45",
    icon: Building2,
    color: "from-accent to-[hsl(35,93%,47%)]",
    trend: "+2%",
    trendUp: true,
  },
  {
    title: "Parents",
    value: "892",
    icon: UserCheck,
    color: "from-[hsl(280,60%,50%)] to-[hsl(280,60%,40%)]",
    trend: "+8%",
    trendUp: true,
  },
];

const financialStats = [
  { title: "Expense", value: "KES 2.4M", icon: TrendingDown, color: "text-accent" },
  { title: "Income", value: "KES 5.8M", icon: TrendingUp, color: "text-primary" },
  { title: "Net Profit", value: "KES 3.4M", icon: DollarSign, color: "text-primary" },
  { title: "Attendance", value: "94%", subtitle: "Present Today", icon: UserCheck, color: "text-sms-info" },
];

const studentCounts = [
  { class: "Grade 1", girls: 42, boys: 38, total: 80 },
  { class: "Grade 2", girls: 45, boys: 41, total: 86 },
  { class: "Grade 3", girls: 39, boys: 44, total: 83 },
  { class: "Grade 4", girls: 48, boys: 42, total: 90 },
  { class: "Grade 5", girls: 36, boys: 40, total: 76 },
  { class: "Grade 6", girls: 44, boys: 39, total: 83 },
];

const upcomingEvents = [
  { date: "15", title: "Staff Meeting", type: "meeting" },
  { date: "18", title: "Parent-Teacher Conference", type: "conference" },
  { date: "22", title: "Sports Day", type: "event" },
  { date: "25", title: "Term Exams Begin", type: "exam" },
];

const DemoDashboard = () => {
  const currentDate = new Date();
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  return (
    <DemoLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Welcome, <span className="text-primary">Admin User</span>
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening at your school today
            </p>
          </div>
          <div className="text-right text-sm text-muted-foreground">
            <div className="font-medium text-foreground">
              {currentDate.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
            <div>{currentDate.toLocaleTimeString()}</div>
          </div>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card
              key={stat.title}
              className={`relative overflow-hidden bg-gradient-to-br ${stat.color} text-white border-0`}
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-white/80 text-sm">{stat.title}</p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                    <div className="flex items-center gap-1 mt-2 text-sm text-white/80">
                      {stat.trendUp ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span>{stat.trend} from last month</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Financial Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {financialStats.map((stat) => (
            <Card key={stat.title} className="bg-card">
              <CardContent className="p-5">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center ${stat.color}`}
                  >
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">
                      {stat.subtitle || stat.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Student Counts */}
          <Card className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-semibold">Student Counts</CardTitle>
              <Button variant="link" className="text-primary p-0 h-auto">
                View Details
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                        CLASS
                      </th>
                      <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">
                        GIRLS
                      </th>
                      <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">
                        BOYS
                      </th>
                      <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">
                        TOTAL
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentCounts.map((row) => (
                      <tr key={row.class} className="border-b border-border/50">
                        <td className="py-3 px-2 text-sm font-medium">{row.class}</td>
                        <td className="py-3 px-2 text-sm text-center text-pink-500">
                          {row.girls}
                        </td>
                        <td className="py-3 px-2 text-sm text-center text-blue-500">
                          {row.boys}
                        </td>
                        <td className="py-3 px-2 text-sm text-center font-medium">
                          {row.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Calendar & Events */}
          <Card className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg font-semibold">Upcoming Events</CardTitle>
              </div>
              <Button size="sm" className="gap-1">
                <Plus className="w-4 h-4" />
                Add Event
              </Button>
            </CardHeader>
            <CardContent>
              {/* Mini Calendar Header */}
              <div className="flex items-center justify-between mb-4 p-3 bg-secondary rounded-lg">
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="font-semibold">
                  {monthName} {year}
                </span>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Events List */}
              <div className="space-y-3">
                {upcomingEvents.map((event, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex flex-col items-center justify-center">
                      <span className="text-lg font-bold text-primary">{event.date}</span>
                      <span className="text-[10px] text-muted-foreground uppercase">
                        {monthName.slice(0, 3)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{event.title}</p>
                      <p className="text-xs text-muted-foreground capitalize">
                        {event.type}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DemoLayout>
  );
};

export default DemoDashboard;
