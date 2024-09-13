"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      <header className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center space-x-4">
          <svg
            className="h-8 w-8"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" x2="12" y1="22.08" y2="12" />
          </svg>
          <span className="text-xl font-bold">liveblocks</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link className="hover:text-muted-foreground" href="#">
            Product
          </Link>
          <Link className="hover:text-muted-foreground" href="#">
            Resources
          </Link>
          <Link className="hover:text-muted-foreground" href="#">
            Docs
          </Link>
          <Link className="hover:text-muted-foreground" href="#">
            Pricing
          </Link>
        </nav>
        <div className="flex space-x-4">
          <Button
            variant={"outline"}
            className="px-3 py-1.5 text-sm rounded-md hover:bg-muted"
          >
            Book a demo
          </Button>
          <Button className="px-3 py-1.5 text-sm rounded-md">Sign in</Button>
        </div>
      </header>
      <main
        className={cn(
          "relative z-10 flex flex-col gap-6 items-center justify-center text-center px-4 py-20 max-w-5xl mx-auto",
          ""
        )}
      >
        <div className="">
          <button className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm flex items-center space-x-2 hover:bg-muted/80">
            <span className="bg-background text-foreground text-xs px-2 py-0.5 rounded-full">
              NEW
            </span>
            <span>Introducing UIKit 2.0</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl">
          Build beautiful user interfaces faster
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
          Create stunning <span className="text-primary">Components</span>,{" "}
          <span className="text-primary">Layouts</span>, and{" "}
          <span className="text-primary">Animations</span> with our
          comprehensive <span className="text-primary">UI Library</span> in
          days, not months.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Button variant={"outline"} className="">
            Get started for free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button className="">
            Explore components
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  );
}
