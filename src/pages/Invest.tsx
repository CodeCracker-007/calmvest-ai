import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { TrendingUp, Target, Sparkles } from "lucide-react";

const portfolioData = [
  { month: "Jan", value: 250000 },
  { month: "Feb", value: 265000 },
  { month: "Mar", value: 258000 },
  { month: "Apr", value: 280000 },
  { month: "May", value: 295000 },
  { month: "Jun", value: 320000 },
];

const assetAllocation = [
  { name: "Stocks", value: 140000, color: "hsl(190, 75%, 45%)" },
  { name: "Mutual Funds", value: 100000, color: "hsl(145, 65%, 50%)" },
  { name: "Gold", value: 40000, color: "hsl(35, 90%, 55%)" },
  { name: "Fixed Deposits", value: 30000, color: "hsl(185, 70%, 55%)" },
  { name: "Crypto", value: 10000, color: "hsl(280, 70%, 60%)" },
];

const suggestions = [
  {
    title: "Recommended SIPs",
    description: "Low-risk balanced funds for steady growth",
    badge: "Low Risk",
    badgeColor: "bg-accent",
  },
  {
    title: "Top Growth Funds",
    description: "3 high-performance equity funds this quarter",
    badge: "High Returns",
    badgeColor: "bg-primary",
  },
  {
    title: "Diversify Portfolio",
    description: "Consider Gold ETFs for better balance",
    badge: "Recommended",
    badgeColor: "bg-warning",
  },
];

const goalInvestments = [
  { name: "New Laptop", progress: 40, amount: "₹40K / ₹100K" },
  { name: "Emergency Fund", progress: 60, amount: "₹180K / ₹300K" },
];

const Invest = () => {
  const totalInvested = assetAllocation.reduce((sum, asset) => sum + asset.value, 0);
  const returns = 70000;
  const returnPercent = ((returns / (totalInvested - returns)) * 100).toFixed(1);

  return (
    <div className="pb-24 px-4 pt-6 max-w-md mx-auto space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Investment Hub</h1>
        <p className="text-muted-foreground">Grow your wealth smartly</p>
      </div>

      {/* Portfolio Overview */}
      <Card className="p-6 shadow-card-hover border-0 gradient-primary text-white">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-white/80 text-sm font-medium">Total Portfolio Value</span>
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">₹{(totalInvested / 1000).toFixed(0)}K</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                <span className="text-xs font-semibold">+{returnPercent}%</span>
              </div>
              <span className="text-sm text-white/80">Returns: ₹{(returns / 1000).toFixed(0)}K</span>
            </div>
          </div>
          <div className="h-20 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={portfolioData}>
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

      {/* Asset Breakdown */}
      <Card className="p-6 shadow-card border-0">
        <h3 className="text-lg font-semibold mb-4">Asset Allocation</h3>
        <div className="flex items-center gap-6">
          <div className="w-32 h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={assetAllocation}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={60}
                  dataKey="value"
                >
                  {assetAllocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1 space-y-2">
            {assetAllocation.map((asset) => {
              const percentage = ((asset.value / totalInvested) * 100).toFixed(1);
              return (
                <div key={asset.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: asset.color }}
                    />
                    <span className="text-xs text-muted-foreground">{asset.name}</span>
                  </div>
                  <span className="text-xs font-medium">{percentage}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Investment Suggestions */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Investment Suggestions</h3>
        {suggestions.map((suggestion, index) => (
          <Card key={index} className="p-4 shadow-card border-0 hover:shadow-card-hover transition-shadow">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-sm">{suggestion.title}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${suggestion.badgeColor} text-white`}>
                    {suggestion.badge}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{suggestion.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Goal-based Investments */}
      <Card className="p-6 shadow-card border-0">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-accent" />
          Goal-based Investments
        </h3>
        <div className="space-y-4">
          {goalInvestments.map((goal) => (
            <div key={goal.name} className="p-4 rounded-xl bg-accent-light border border-accent/20">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-sm">{goal.name}</h4>
                <span className="text-xs font-medium text-accent">{goal.progress}%</span>
              </div>
              <div className="w-full bg-white/50 rounded-full h-2 mb-2">
                <div 
                  className="bg-accent h-2 rounded-full transition-all"
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground">{goal.amount}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* AI Portfolio Review */}
      <Button className="w-full gradient-primary shadow-lg">
        <Sparkles className="w-4 h-4 mr-2" />
        Get AI Portfolio Review
      </Button>
    </div>
  );
};

export default Invest;
