import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { InsightCard } from "@/components/InsightCard";
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const netWorthData = [
  { month: "Jan", value: 450000 },
  { month: "Feb", value: 480000 },
  { month: "Mar", value: 465000 },
  { month: "Apr", value: 510000 },
  { month: "May", value: 540000 },
  { month: "Jun", value: 580000 },
];

const expenseData = [
  { name: "Food", value: 15000, color: "hsl(190, 75%, 45%)" },
  { name: "Transport", value: 8000, color: "hsl(145, 65%, 50%)" },
  { name: "Shopping", value: 12000, color: "hsl(185, 70%, 55%)" },
  { name: "Bills", value: 20000, color: "hsl(155, 60%, 55%)" },
  { name: "Others", value: 5000, color: "hsl(200, 60%, 60%)" },
];

const recentActivities = [
  { title: "Salary Credited", amount: "+₹75,000", time: "Today", type: "income" },
  { title: "Grocery Shopping", amount: "-₹3,200", time: "Yesterday", type: "expense" },
  { title: "SIP Investment", amount: "-₹10,000", time: "2 days ago", type: "investment" },
  { title: "Fuel", amount: "-₹2,500", time: "3 days ago", type: "expense" },
  { title: "Freelance Project", amount: "+₹25,000", time: "4 days ago", type: "income" },
];

const Home = () => {
  const currentNetWorth = netWorthData[netWorthData.length - 1].value;
  const previousNetWorth = netWorthData[netWorthData.length - 2].value;
  const change = currentNetWorth - previousNetWorth;
  const changePercent = ((change / previousNetWorth) * 100).toFixed(1);

  return (
    <div className="pb-24 px-4 pt-6 max-w-md mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">Welcome back! 👋</h1>
        <p className="text-muted-foreground">Here's your financial overview</p>
      </div>

      {/* Net Worth Card */}
      <Card className="p-6 shadow-card-hover border-0 gradient-primary text-white">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-white/80 text-sm font-medium">Total Net Worth</span>
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">
              ₹{(currentNetWorth / 1000).toFixed(0)}K
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                <ArrowUpRight className="w-3 h-3" />
                <span className="text-xs font-semibold">+{changePercent}%</span>
              </div>
              <span className="text-xs text-white/70">from last month</span>
            </div>
          </div>
          <div className="h-20 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={netWorthData}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="white" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>

      {/* AI Insight */}
      <InsightCard 
        message="You saved ₹12,000 more than last month — great job! Keep up the momentum!"
        variant="success"
      />

      {/* Expense Breakdown */}
      <Card className="p-6 shadow-card border-0">
        <h3 className="text-lg font-semibold mb-4">Expense Breakdown</h3>
        <div className="flex items-center gap-6">
          <div className="w-32 h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={60}
                  dataKey="value"
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1 space-y-2">
            {expenseData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
                <span className="text-sm font-medium">₹{(item.value / 1000).toFixed(1)}K</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Recent Activities */}
      <Card className="p-6 shadow-card border-0">
        <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
        <div className="space-y-3">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
              <div className="flex-1">
                <p className="font-medium text-sm">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              <span className={`text-sm font-semibold ${
                activity.type === 'income' ? 'text-accent' : 
                activity.type === 'investment' ? 'text-primary' : 'text-foreground'
              }`}>
                {activity.amount}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Home;
