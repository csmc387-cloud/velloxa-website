"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon, Home, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

export interface NavBarProps {
  items?: NavItem[]
  className?: string
}

const defaultNavItems: NavItem[] = [
  { name: "Home", url: "/", icon: Home },
  { name: "Contact", url: "/contact", icon: Mail },
]

export function NavBar({ items = defaultNavItems, className }: NavBarProps) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(() => {
    const activeItem = items.find((item) => item.url === pathname)
    return activeItem ? activeItem.name : items[0]?.name || ""
  })

  useEffect(() => {
    const activeItem = items.find((item) => item.url === pathname)
    if (activeItem) {
      // eslint-disable-next-line
      setActiveTab(activeItem.name)
    }
  }, [pathname, items])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 border border-white/12 py-1.5 px-1.5 rounded-full shadow-lg bg-black/20 backdrop-blur-md">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "group relative cursor-pointer p-3 rounded-full transition-colors flex items-center justify-center",
                "text-foreground/80 hover:text-primary hover:bg-white/5",
                isActive && "bg-muted text-primary",
              )}
            >
              <span suppressHydrationWarning className="inline-flex">
                <Icon size={18} strokeWidth={2} />
              </span>
              
              {/* Tooltip / Name showing below */}
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 px-2.5 py-1 bg-black/90 border border-white/12 text-[10px] font-semibold tracking-wide text-foreground rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 pointer-events-none transition-all duration-200 ease-out whitespace-nowrap z-50 shadow-lg shadow-black/40 hidden md:block">
                {item.name}
              </span>

              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default NavBar
