import { DemoLayout } from "@/components/demo/DemoLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  ArrowDownCircle,
  ArrowUpCircle,
  Coins,
  TrendingUp,
  Calendar,
  Plus,
  ArrowLeft,
  FileText,
  DollarSign,
  Users,
  CreditCard,
  Briefcase,
  CheckCircle,
  Gift,
  ReceiptText,
  ArrowRightLeft,
  PieChart,
  Settings,
  Building,
  BookOpen,
  Landmark,
  Filter,
} from "lucide-react";

const summaryCards = [
  {
    title: "TOTAL OUTSTANDING INVOICES",
    value: "KES 2,450,000",
    icon: AlertTriangle,
    bgColor: "bg-[hsl(45,93%,95%)]",
    iconColor: "text-accent",
  },
  {
    title: "ACADEMIC YEAR FEE INCOME",
    value: "KES 8,750,000",
    icon: ArrowDownCircle,
    bgColor: "bg-[hsl(152,69%,95%)]",
    iconColor: "text-primary",
  },
  {
    title: "ACADEMIC YEAR OTHER INCOME",
    value: "KES 1,250,000",
    icon: Coins,
    bgColor: "bg-[hsl(152,69%,95%)]",
    iconColor: "text-primary",
  },
  {
    title: "ACADEMIC YEAR EXPENSES",
    value: "KES 4,200,000",
    icon: ArrowUpCircle,
    bgColor: "bg-[hsl(0,84%,95%)]",
    iconColor: "text-destructive",
  },
];

const secondaryStats = [
  {
    title: "ACADEMIC YEAR NET POSITION",
    value: "KES 5,800,000",
    icon: TrendingUp,
    bgColor: "bg-[hsl(210,40%,96%)]",
  },
  {
    title: "EXPECTED FEE FOR ACADEMIC YEAR",
    value: "KES 11,200,000",
    icon: Calendar,
    bgColor: "bg-[hsl(152,69%,95%)]",
  },
];

const quickActions = [
  { label: "Create Invoice", icon: Plus, primary: true },
  { label: "Add Income", icon: Plus, primary: true },
  { label: "Add Expense", icon: Plus, primary: true },
  { label: "Generate Payroll", icon: DollarSign, primary: true },
  { label: "Create Loan", icon: CreditCard, primary: true },
  { label: "View Defaulters", icon: Users, secondary: true },
  { label: "Pending Expense Approvals", icon: CheckCircle, outline: true },
  { label: "Bursary Schemes", icon: Gift, outline: true },
];

const moduleCards = [
  {
    title: "Fees & Billing",
    description: "Manage student fees, invoices, discounts, and payment tracking.",
    icon: ReceiptText,
    iconBg: "bg-primary",
    links: [
      "Fee Types",
      "Manage Invoices",
      "Fee Statements",
      "Fee Reminders",
      "Payment History",
      "Discount Rules",
      "Bursary Schemes",
      "Defaulters List",
      "Balance Carryovers",
    ],
  },
  {
    title: "Income Management",
    description: "Track all non-fee income sources including canteen, transport, donations, and more.",
    icon: ArrowDownCircle,
    iconBg: "bg-primary",
    links: ["Income Categories", "Income Entries", "Add Income"],
  },
  {
    title: "Expense Management",
    description: "Manage school expenses with approval workflow, receipt tracking, and supplier management.",
    icon: ArrowUpCircle,
    iconBg: "bg-destructive",
    links: ["Expense Categories", "All Expenses", "Add Expense", "Pending Approval"],
  },
  {
    title: "Budgeting",
    description: "Create and track departmental budgets with automatic expense tracking and alerts.",
    icon: PieChart,
    iconBg: "bg-accent",
    links: ["Budget Dashboard", "All Budgets", "Create Budget", "Budget Reports"],
  },
  {
    title: "Payroll Management",
    description: "Manage staff payroll, advance payments, and salary processing.",
    icon: Briefcase,
    iconBg: "bg-sms-info",
    links: ["Generate Payroll", "Advance Payments"],
  },
  {
    title: "Staff Loans",
    description: "Manage staff loan applications, approvals, and repayment tracking.",
    icon: Landmark,
    iconBg: "bg-destructive",
    links: ["All Loans"],
  },
  {
    title: "Financial Reports",
    description: "Generate comprehensive financial reports, analytics, and insights.",
    icon: FileText,
    iconBg: "bg-sms-info",
    links: ["Reports Dashboard", "Generate Report", "Report History"],
  },
  {
    title: "Accounting",
    description: "Advanced accounting features including chart of accounts, journal entries, and financial statements.",
    icon: BookOpen,
    iconBg: "bg-primary",
    links: [
      "Accounting Settings",
      "Initialize Chart of Accounts",
      "Chart of Accounts",
      "Account Mapping Rules",
    ],
  },
];

const FinanceDashboard = () => {
  return (
    <DemoLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <Card className="bg-gradient-to-r from-accent to-[hsl(35,93%,47%)] border-0">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <div className="text-white">
                <h1 className="text-xl font-bold">Finance Management Dashboard</h1>
                <p className="text-sm text-white/80">Complete financial overview</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-white text-sm bg-white/20 px-3 py-1 rounded-lg">
                {new Date().toLocaleTimeString()}
              </div>
              <Button variant="secondary" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryCards.map((card) => (
            <Card key={card.title} className={`${card.bgColor} border-0`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center ${card.iconColor}`}>
                    <card.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase">
                      {card.title}
                    </p>
                    <p className="text-xl font-bold text-foreground mt-1">{card.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {secondaryStats.map((stat) => (
            <Card key={stat.title} className={`${stat.bgColor} border-0`}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase">
                      {stat.title}
                    </p>
                    <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="bg-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action) => (
                <Button
                  key={action.label}
                  variant={action.outline ? "outline" : action.secondary ? "secondary" : "default"}
                  className="gap-2"
                >
                  <action.icon className="w-4 h-4" />
                  {action.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moduleCards.map((module) => (
            <Card key={module.title} className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl ${module.iconBg} flex items-center justify-center`}>
                    <module.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{module.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-1">
                  {module.links.map((link) => (
                    <Button
                      key={link}
                      variant="ghost"
                      className="w-full justify-start text-sm h-9 bg-primary text-primary-foreground hover:bg-primary/90 mb-1"
                    >
                      {link}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DemoLayout>
  );
};

export default FinanceDashboard;
