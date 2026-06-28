"use client"

import { Marquee } from "./marquee"

interface Logo {
  alt: string
  href: string
  src: string
  height: string
}

const logos: Logo[] = [
  { alt: "Coinbase", href: "https://coinbase.com", src: "/coinbase-logo.png", height: "h-14" },
  { alt: "Backpack", href: "https://backpack.app", src: "/backpack-logo.png", height: "h-16" },
  { alt: "Jupiter", href: "https://jup.ag", src: "/jupiter-logo.png", height: "h-14" },
  { alt: "Drift", href: "https://drift.trade", src: "/drift-logo.png", height: "h-14" },
  { alt: "Dex Screener", href: "https://dexscreener.com", src: "/dexscreener-logo.png", height: "h-14" },
]

export function LogoMarquee() {
  return (
    <div className="relative w-full">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <Marquee
        className="[--duration:20s] md:[--duration:30s] lg:[--duration:40s] [--gap:6rem]"
        pauseOnHover
        repeat={2}
      >
        {logos.map((logo, index) => (
          <a
            key={index}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-all opacity-70 flex items-center justify-center hover:scale-105 duration-300"
          >
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className={`${logo.height} w-auto object-contain rounded transition-all duration-300 filter brightness-0 dark:invert hover:brightness-100 hover:invert-0`} 
            />
          </a>
        ))}
      </Marquee>
    </div>
  )
}
