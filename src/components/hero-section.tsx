import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      {/* White spotlight effect */}
      {/* <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_rgba(255,255,255,0)_50%)]"></div> */}

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
          <ThemeToggle />
        </div>
      </header>
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="mb-8">
          <button className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm flex items-center space-x-2 hover:bg-muted/80">
            <span className="bg-background text-foreground text-xs px-2 py-0.5 rounded-full">
              NEW
            </span>
            <span>Introducing Liveblocks 2.0</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl">
          Build collaborative experiences faster
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
          Ship features like <span className="text-primary">Comments</span>,{" "}
          <span className="text-primary">Notifications</span>, a{" "}
          <span className="text-primary">Text Editor</span>, or build any
          collaborative experience with{" "}
          <span className="text-primary">Realtime APIs</span> in days, not
          months.
        </p>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12">
          Engage users, fuel creativity, and drive growth. Finally.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Button variant={"outline"} className="">
            Start building for free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button className="">
            Browse examples
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  );
}
