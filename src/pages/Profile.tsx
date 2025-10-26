import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Shield, 
  FileText, 
  CreditCard, 
  Settings, 
  LogOut,
  ChevronRight,
  TrendingUp
} from "lucide-react";

const menuItems = [
  { 
    icon: Shield, 
    label: "Insurance & Risk Planning", 
    description: "Protect what matters",
    color: "text-primary" 
  },
  { 
    icon: FileText, 
    label: "Tax Planner", 
    description: "Save more on taxes",
    color: "text-accent" 
  },
  { 
    icon: CreditCard, 
    label: "Debt Manager", 
    description: "Track EMIs & loans",
    color: "text-warning" 
  },
  { 
    icon: Settings, 
    label: "Settings", 
    description: "App preferences",
    color: "text-muted-foreground" 
  },
];

const Profile = () => {
  const healthScore = 78;

  return (
    <div className="pb-24 px-4 pt-6 max-w-md mx-auto space-y-6 animate-fade-in">
      {/* User Profile Card */}
      <Card className="p-6 shadow-card-hover border-0 gradient-primary text-white">
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="w-16 h-16 border-2 border-white/20">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-white/80 text-sm">john.doe@email.com</p>
          </div>
          <Button 
            size="sm" 
            variant="secondary"
            className="text-xs"
          >
            Edit
          </Button>
        </div>
      </Card>

      {/* Financial Health Score */}
      <Card className="p-6 shadow-card border-0">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-accent" />
            Financial Health Score
          </h3>
          <span className="text-2xl font-bold text-accent">{healthScore}</span>
        </div>
        
        <div className="relative w-full h-3 bg-secondary rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full gradient-accent rounded-full transition-all duration-500"
            style={{ width: `${healthScore}%` }}
          />
        </div>
        
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>Poor</span>
          <span>Fair</span>
          <span>Good</span>
          <span>Excellent</span>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-accent-light border border-accent/20">
          <p className="text-sm text-foreground">
            Your financial health is <span className="font-semibold text-accent">Good</span>! 
            Keep up the savings and consider diversifying your investments.
          </p>
        </div>
      </Card>

      {/* Menu Items */}
      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <Card 
            key={index}
            className="p-4 shadow-card border-0 hover:shadow-card-hover transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-full bg-secondary ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">{item.label}</h4>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>
        ))}
      </div>

      {/* Logout Button */}
      <Button 
        variant="outline" 
        className="w-full text-destructive border-destructive hover:bg-destructive/10"
      >
        <LogOut className="w-4 h-4 mr-2" />
        Logout
      </Button>

      {/* Version Info */}
      <p className="text-center text-xs text-muted-foreground">
        WealthWise v1.0.0
      </p>
    </div>
  );
};

export default Profile;
