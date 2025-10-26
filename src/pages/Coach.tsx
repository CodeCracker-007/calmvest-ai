import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Sparkles, BookOpen, TrendingUp, Shield, PiggyBank } from "lucide-react";
import { InsightCard } from "@/components/InsightCard";

const advisorModes = [
  { id: "professional", label: "Professional & Polite", icon: "🧘", active: true },
  { id: "cool", label: "Cool & Smart", icon: "😎", active: false },
  { id: "neutral", label: "Neutral & Analytical", icon: "🤖", active: false },
];

const insights = [
  { message: "You're on track for your saving goal. Great progress!", variant: "success" as const },
  { message: "Consider rebalancing: 70% equity, 30% debt for optimal growth.", variant: "default" as const },
  { message: "Your emergency fund should cover 6 months of expenses.", variant: "warning" as const },
];

const learningCards = [
  { 
    title: "Budgeting Basics", 
    icon: PiggyBank, 
    color: "bg-primary",
    description: "Master the 50-30-20 rule" 
  },
  { 
    title: "Smart Investing", 
    icon: TrendingUp, 
    color: "bg-accent",
    description: "Build a diversified portfolio" 
  },
  { 
    title: "Tax Savings", 
    icon: Shield, 
    color: "bg-warning",
    description: "Maximize your deductions" 
  },
];

const chatMessages = [
  { role: "assistant", content: "Hello! I'm your AI financial advisor. How can I help you today?" },
  { role: "user", content: "How should I allocate my monthly savings?" },
  { role: "assistant", content: "Great question! Based on your profile, I'd recommend the 50-30-20 rule: 50% for needs, 30% for wants, and 20% for savings and investments. Would you like me to create a personalized plan?" },
];

const Coach = () => {
  const [message, setMessage] = useState("");
  const [activeMode, setActiveMode] = useState("professional");

  const handleSend = () => {
    if (message.trim()) {
      // Handle message sending
      setMessage("");
    }
  };

  return (
    <div className="pb-24 px-4 pt-6 max-w-md mx-auto space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">AI Financial Coach</h1>
        <p className="text-muted-foreground">Your personal finance expert</p>
      </div>

      {/* Advisor Mode Toggle */}
      <Card className="p-4 shadow-card border-0">
        <h3 className="text-sm font-semibold mb-3">Advisor Mode</h3>
        <div className="flex gap-2 overflow-x-auto">
          {advisorModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                activeMode === mode.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <span>{mode.icon}</span>
              <span className="font-medium">{mode.label}</span>
            </button>
          ))}
        </div>
      </Card>

      {/* Chat Interface */}
      <Card className="shadow-card border-0 overflow-hidden">
        <div className="p-4 bg-primary/5 border-b border-border">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-semibold">Chat with AI Advisor</span>
          </div>
        </div>
        
        <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
          {chatMessages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything about finance..."
              className="flex-1"
            />
            <Button onClick={handleSend} size="icon" className="gradient-primary">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* AI Insights Feed */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          Personalized Insights
        </h3>
        {insights.map((insight, index) => (
          <InsightCard key={index} {...insight} />
        ))}
      </div>

      {/* Learn & Grow */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-accent" />
          Learn & Grow
        </h3>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {learningCards.map((card, index) => (
            <Card
              key={index}
              className="min-w-[200px] p-4 shadow-card border-0 hover:shadow-card-hover transition-all cursor-pointer"
            >
              <div className={`w-10 h-10 rounded-full ${card.color} text-white flex items-center justify-center mb-3`}>
                <card.icon className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-sm mb-1">{card.title}</h4>
              <p className="text-xs text-muted-foreground">{card.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coach;
