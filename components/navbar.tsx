"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">Portfolio</span>
          </Link>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <Link
              href="/"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/" ? "text-foreground" : "text-foreground/60",
              )}
            >
              Home
            </Link>
            <Link
              href="/experience"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/experience" ? "text-foreground" : "text-foreground/60",
              )}
            >
              Experience
            </Link>
          </nav>
        </div>
        {/* Mobile menu */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="flex md:hidden">
              <Link
                href="/"
                className={cn(
                  "mr-4 text-sm transition-colors hover:text-foreground/80",
                  pathname === "/" ? "text-foreground" : "text-foreground/60",
                )}
              >
                Home
              </Link>
              <Link
                href="/experience"
                className={cn(
                  "text-sm transition-colors hover:text-foreground/80",
                  pathname === "/experience" ? "text-foreground" : "text-foreground/60",
                )}
              >
                Experience
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
