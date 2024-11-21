"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users,
  LogOut 
} from "lucide-react";
import { signOut } from "next-auth/react";

interface DashboardNavProps {
  isAdmin: boolean;
}

export function DashboardNav({ isAdmin }: DashboardNavProps) {
  const pathname = usePathname();

  const items = [
    {
      title: "Content Management",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    ...(isAdmin ? [{
      title: "User Management",
      href: "/dashboard/users",
      icon: Users,
    }] : []),
  ];

  return (
    <nav className="grid items-start gap-2">
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          <Button
            variant={pathname === item.href ? "secondary" : "ghost"}
            className="w-full justify-start"
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </Button>
        </Link>
      ))}
      <Button
        variant="ghost"
        className="justify-start"
        onClick={() => signOut()}
      >
        <LogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
      </Button>
    </nav>
  );
} 