"use client"

import { LineChart, Wallet, Settings, Clock, ListTodo, Users, Trophy } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"

const navigation = [
  { name: "Dashboard", href: "/", icon: LineChart },
  { name: "Transactions", href: "/transactions", icon: Wallet },
  { name: "Time Tracker", href: "/time-tracker", icon: Clock },
  { name: "Habits", href: "/habits", icon: ListTodo },
  { name: "Community", href: "/community", icon: Users },
  { name: "Challenges", href: "/community/challenges", icon: Trophy },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b bg-card">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-semibold">IndieTracker</span>
            <div className="ml-10 flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}