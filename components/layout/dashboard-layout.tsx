"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Sidebar } from "./sidebar"
import { TopBar } from "./topbar"
import { MobileNav } from "./mobile-nav"

interface DashboardLayoutProps {
  children: React.ReactNode
  title?: string
}

export function DashboardLayout({ children, title }: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar
          isCollapsed={isCollapsed}
          onToggle={() => setIsCollapsed(!isCollapsed)}
        />
      </div>

      {/* Main Content */}
      <div
        className={cn(
          "flex flex-col transition-all duration-300",
          "md:ml-64",
          isCollapsed && "md:ml-16"
        )}
      >
        {/* TopBar with Mobile Nav */}
        <div className="flex items-center gap-2 md:block">
          <div className="md:hidden flex items-center gap-2 px-4 py-3 border-b border-border bg-card">
            <MobileNav />
            <span className="font-semibold text-foreground">{title}</span>
          </div>
          <div className="hidden md:block">
            <TopBar title={title} />
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
