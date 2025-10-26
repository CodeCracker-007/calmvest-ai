import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

interface InsightCardProps {
  message: string;
  variant?: "default" | "success" | "warning";
}

export const InsightCard = ({ message, variant = "default" }: InsightCardProps) => {
  const bgColor = {
    default: "bg-primary/5",
    success: "bg-accent/5",
    warning: "bg-warning/5",
  }[variant];

  const iconColor = {
    default: "text-primary",
    success: "text-accent",
    warning: "text-warning",
  }[variant];

  return (
    <Card className={`p-4 ${bgColor} border-0 shadow-card`}>
      <div className="flex gap-3 items-start">
        <div className={`p-2 rounded-full bg-card ${iconColor}`}>
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-foreground leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </Card>
  );
};
