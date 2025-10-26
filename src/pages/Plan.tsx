import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { InsightCard } from "@/components/InsightCard";
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Target, TrendingUp } from "lucide-react";

const incomeData = [
  { month: "Jan", income: 75000, target: 80000 },
  { month: "Feb", income: 75000, target: 80000 },
  { month: "Mar", income: 78000, target: 80000 },
  { month: "Apr", income: 75000, target: 80000 },
  { month: "May", income: 82000, target: 80000 },
  { month: "Jun", income: 85000, target: 80000 },
];

const expenseCategories = [
  { name: "Food & Dining", value: 15000, color: "hsl(190, 75%, 45%)" },
  { name: "Transport", value: 8000, color: "hsl(145, 65%, 50%)" },
  { name: "Shopping", value: 12000, color: "hsl(185, 70%, 55%)" },
  { name: "Bills & Utilities", value: 20000, color: "hsl(155, 60%, 55%)" },
  { name: "Entertainment", value: 5000, color: "hsl(200, 60%, 60%)" },
];

const budgets = [
  { category: "Food", limit: 18000, spent: 15000 },
  { category: "Transport", limit: 10000, spent: 8000 },
  { category: "Shopping", limit: 15000, spent: 12000 },
  { category: "Bills", limit: 20000, spent: 20000 },
  { category: "Entertainment", limit: 8000, spent: 5000 },
];

const goals = [
  { name: "Emergency Fund", current: 180000, target: 300000, deadline: "Dec 2025" },
  { name: "New Laptop", current: 40000, target: 100000, deadline: "Aug 2025" },
  { name: "Vacation to Bali", current: 60000, target: 150000, deadline: "Mar 2026" },
];

const Plan = () => {
  return (
    <div className="pb-24 px-4 pt-6 max-w-md mx-auto space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Financial Planning</h1>
        <p className="text-muted-foreground">Track your income, expenses & goals</p>
      </div>

      {/* Income Tracker */}
      <Card className="p-6 shadow-card border-0">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Income vs Target
        </h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={incomeData}>
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Bar dataKey="income" fill="hsl(190, 75%, 45%)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="target" fill="hsl(145, 65%, 50%)" radius={[8, 8, 0, 0]} opacity={0.3} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Expenses Overview */}
      <Card className="p-6 shadow-card border-0">
        <h3 className="text-lg font-semibold mb-4">Expenses Overview</h3>
        <div className="flex items-center gap-6">
          <div className="w-32 h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseCategories}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={60}
                  dataKey="value"
                >
                  {expenseCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1 space-y-2">
            {expenseCategories.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs text-muted-foreground">{item.name}</span>
                </div>
                <span className="text-xs font-medium">₹{(item.value / 1000).toFixed(1)}K</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Category Budgets */}
      <Card className="p-6 shadow-card border-0">
        <h3 className="text-lg font-semibold mb-4">Budget Tracking</h3>
        <div className="space-y-4">
          {budgets.map((budget) => {
            const percentage = (budget.spent / budget.limit) * 100;
            const isOverBudget = percentage >= 100;
            
            return (
              <div key={budget.category} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{budget.category}</span>
                  <span className={isOverBudget ? "text-destructive" : "text-muted-foreground"}>
                    ₹{budget.spent.toLocaleString()} / ₹{budget.limit.toLocaleString()}
                  </span>
                </div>
                <Progress 
                  value={Math.min(percentage, 100)} 
                  className={isOverBudget ? "bg-destructive/20" : ""}
                />
              </div>
            );
          })}
        </div>
      </Card>

      {/* Goals */}
      <Card className="p-6 shadow-card border-0">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-accent" />
          Your Goals
        </h3>
        <div className="space-y-4">
          {goals.map((goal) => {
            const percentage = (goal.current / goal.target) * 100;
            
            return (
              <div key={goal.name} className="p-4 rounded-xl bg-accent-light border border-accent/20">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-sm">{goal.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">Target: {goal.deadline}</p>
                  </div>
                  <span className="text-xs font-medium text-accent">
                    {percentage.toFixed(0)}%
                  </span>
                </div>
                <Progress value={percentage} className="mb-2" />
                <p className="text-xs text-muted-foreground">
                  ₹{goal.current.toLocaleString()} of ₹{goal.target.toLocaleString()}
                </p>
              </div>
            );
          })}
        </div>
      </Card>

      {/* AI Insight */}
      <InsightCard 
        message="Dining expenses are 20% above target. Would you like to optimize your spending?"
        variant="warning"
      />
    </div>
  );
};

export default Plan;
