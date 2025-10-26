import { useState } from "react";
import { Plus, TrendingUp, Target, MessageCircle, FileText, DollarSign, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const quickActions = [
  { icon: TrendingUp, label: "Add Transaction", color: "bg-primary" },
  { icon: Target, label: "Add Goal", color: "bg-accent" },
  { icon: MessageCircle, label: "Ask AI", color: "bg-primary-glow" },
  { icon: FileText, label: "Quick Report", color: "bg-warning" },
  { icon: DollarSign, label: "Add Investment", color: "bg-accent" },
];

export const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleActionClick = (label: string) => {
    if (label === "Ask AI") {
      navigate("/coach");
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {/* Action Items */}
      <div
        className={cn(
          "absolute bottom-16 right-0 flex flex-col gap-3 transition-all duration-300",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {quickActions.map((action, index) => (
          <button
            key={action.label}
            onClick={() => handleActionClick(action.label)}
            className={cn(
              "flex items-center gap-3 bg-card shadow-card-hover rounded-full pl-4 pr-5 py-3 transition-all duration-300 hover:shadow-lg group",
              "animate-slide-up"
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className={cn(action.color, "p-2 rounded-full")}>
              <action.icon className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium whitespace-nowrap">
              {action.label}
            </span>
          </button>
        ))}
      </div>

      {/* Main Button */}
      <Button
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "h-14 w-14 rounded-full shadow-lg gradient-primary transition-all duration-300",
          isOpen && "rotate-45"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
      </Button>
    </div>
  );
};
