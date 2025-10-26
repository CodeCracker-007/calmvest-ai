import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { FloatingActionButton } from "./FloatingActionButton";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen w-full">
      <main className="w-full">
        {children}
      </main>
      <FloatingActionButton />
      <BottomNav />
    </div>
  );
};
