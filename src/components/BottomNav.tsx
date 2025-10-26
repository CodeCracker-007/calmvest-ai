import { Home, TrendingUp, DollarSign, MessageCircle, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: TrendingUp, label: "Plan", path: "/plan" },
  { icon: DollarSign, label: "Invest", path: "/invest" },
  { icon: MessageCircle, label: "Coach", path: "/coach" },
  { icon: User, label: "Profile", path: "/profile" },
];

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 safe-bottom">
      <div className="max-w-md mx-auto px-2 py-2">
        <div className="flex items-center justify-around">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 min-w-[60px]",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon 
                    className={cn(
                      "transition-all duration-300",
                      isActive ? "w-6 h-6" : "w-5 h-5"
                    )} 
                  />
                  <span className={cn(
                    "text-xs font-medium transition-all duration-300",
                    isActive && "font-semibold"
                  )}>
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
