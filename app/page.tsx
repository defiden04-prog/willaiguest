"use client"

import { DotMatrix } from "@/components/dot-matrix"
import { LogoMarquee } from "@/components/logo-marquee"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Mail, Zap, Users, Activity, CheckCircle2, Loader2 } from "lucide-react"
import { useState, useEffect } from "react"
import { submitEmailLocal } from "./actions"

export default function Page() {
  const [email, setEmail] = useState("")
  const [hoveredTask, setHoveredTask] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  
  const [waitlistCount, setWaitlistCount] = useState(1290)
  const [activeUsers, setActiveUsers] = useState(8600)

  useEffect(() => {
    // Waitlist logic
    const stored = localStorage.getItem("waitlistCount")
    if (stored) {
      setWaitlistCount(parseInt(stored, 10))
    }
    const waitlistInterval = setInterval(() => {
      setWaitlistCount(prev => {
        const increment = Math.floor(Math.random() * 4) + 2 // 2 to 5
        const next = prev + increment
        localStorage.setItem("waitlistCount", next.toString())
        return next
      })
    }, 20 * 60 * 1000)

    // Active users logic
    const initialActive = Math.floor(Math.random() * (90000 - 8600 + 1)) + 8600
    setActiveUsers(initialActive)
    
    const activeInterval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.floor(Math.random() * 1001) - 500
        let next = prev + change
        if (next < 8600) next = 8600
        if (next > 90000) next = 90000
        return next
      })
    }, 3000)

    return () => {
      clearInterval(waitlistInterval)
      clearInterval(activeInterval)
    }
  }, [])

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-12 px-4">
        <DotMatrix
          variant="diamond"
          pixelSize={3}
          patternScale={1}
          enableRipples={true}
          rippleIntensityScale={1.5}
          rippleSpeed={0.4}
          speed={1.5}
          edgeFade={0.15}
        />

        <div className="max-w-6xl w-full text-center space-y-10 animate-in fade-in duration-700">
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30">
                <span className="text-sm font-medium text-foreground flex items-center gap-2">
                  Backed by 
                  <svg 
                    className="h-5 w-5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="2" fill="#FF6600"/>
                    <path 
                      d="M7.5 7.5L12 13.5L16.5 7.5H19L13.5 15V19.5H10.5V15L5 7.5H7.5Z" 
                      fill="white"
                    />
                  </svg>
                  <span className="text-orange-500">Combinator</span>
                </span>
              </div>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 cursor-default">
                <Users className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium text-foreground">
                  <span className="text-blue-500 font-bold">{waitlistCount.toLocaleString()}</span> on Waitlist
                </span>
              </div>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 cursor-default">
                <Activity className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-foreground">
                  <span className="text-green-500 font-bold">{activeUsers.toLocaleString()}</span> Active Users
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif italic tracking-tight text-balance leading-[0.95]">
              Will AI Replace me ?
              <br />
              Find out before your boss does.
            </h1>
          </div>

          <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto text-balance leading-relaxed">
            Ai carrer Outlook follow all the task and get Rewarded
          </p>

          <div className="w-full flex justify-center mt-12">
            <div className="relative w-full max-w-md group z-10">
              {/* Amazing animated glowing backplates */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-l from-blue-500 via-primary to-orange-500 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-500"></div>
              
              <div className="flex flex-col gap-4 animate-in fade-in duration-700 slide-in-from-bottom-4 relative">
                <div className="relative rounded-[2rem] border border-border/50 bg-background/60 p-8 space-y-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] backdrop-blur-2xl transition-all duration-500 hover:border-primary/40 overflow-hidden">
                  {/* Subtle glass reflections */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none" />
                  
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <Zap className="h-6 w-6 text-primary animate-pulse" />
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent text-center leading-tight">Follow all task and get Reward upto $20000</h2>
                    <Zap className="h-6 w-6 text-primary animate-pulse" />
                  </div>
                  <p className="text-sm text-muted-foreground/90">Complete these tasks to join our ecosystem & get rewarded!</p>

                  <div className="space-y-4 pt-2">
                    {/* Task 1 */}
                    <div 
                      onMouseEnter={() => setHoveredTask(1)}
                      onMouseLeave={() => setHoveredTask(null)}
                      className="relative overflow-hidden rounded-xl border border-primary/20 bg-background/40 p-5 backdrop-blur-md space-y-3 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_30px_-5px_rgba(255,102,0,0.3)] cursor-pointer group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10 flex items-start gap-3">
                        <div className={`flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/60 text-white flex items-center justify-center text-sm font-bold transition-all duration-300 ${hoveredTask === 1 ? 'scale-110 shadow-[0_0_15px_rgba(255,102,0,0.5)]' : ''}`}>
                          1
                        </div>
                        <div className="text-left flex-1">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Join the Community</h3>
                          <p className="text-xs text-muted-foreground mt-1">Connect with our community members and stay updated</p>
                        </div>
                      </div>
                      <div className="relative z-10">
                        <Button 
                          asChild 
                          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary text-white font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,102,0,0.5)] transform hover:scale-105"
                        >
                          <a 
                            href="https://x.com/i/communities/2022200719995285719" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            Join Community
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Task 2 */}
                    <div 
                      onMouseEnter={() => setHoveredTask(2)}
                      onMouseLeave={() => setHoveredTask(null)}
                      className="relative overflow-hidden rounded-xl border border-pink-500/20 bg-background/40 p-5 backdrop-blur-md space-y-3 transition-all duration-500 hover:-translate-y-1 hover:border-pink-500/60 hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)] cursor-pointer group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10 flex items-start gap-3">
                        <div className={`flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center text-sm font-bold transition-all duration-300 ${hoveredTask === 2 ? 'scale-110 shadow-[0_0_15px_rgba(236,72,153,0.5)] animate-bounce' : ''}`}>
                          2
                        </div>
                        <div className="text-left flex-1">
                          <h3 className="font-semibold text-foreground group-hover:text-pink-500 transition-colors">Like, Comment & Tag Friends</h3>
                          <p className="text-xs text-muted-foreground mt-1">Share our latest tweet and tag 3 friends for rewards!</p>
                        </div>
                      </div>
                      <div className="relative z-10">
                        <Button 
                          asChild 
                          className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transform hover:scale-105"
                        >
                          <a 
                            href="https://x.com/jackonchains/status/2070503548530634800" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Heart className="h-4 w-4 mr-2" />
                            Open Tweet Now
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Task 3 */}
                    <div 
                      onMouseEnter={() => setHoveredTask(3)}
                      onMouseLeave={() => setHoveredTask(null)}
                      className="relative overflow-hidden rounded-xl border border-blue-500/20 bg-background/40 p-5 backdrop-blur-md space-y-3 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] cursor-pointer group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10 flex items-start gap-3">
                        <div className={`flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-sm font-bold transition-all duration-300 ${hoveredTask === 3 ? 'scale-110 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : ''}`}>
                          3
                        </div>
                        <div className="text-left flex-1">
                          <h3 className="font-semibold text-foreground group-hover:text-blue-500 transition-colors">Subscribe to Updates</h3>
                          <p className="text-xs text-muted-foreground mt-1">Get the latest news and exclusive rewards in your inbox</p>
                        </div>
                      </div>
                      <div className="relative z-10 flex flex-col gap-2">
                        <div className="flex gap-2">
                          <input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isSubmitting || submitStatus === "success"}
                            className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200 disabled:opacity-50 group-hover:border-blue-500/30"
                          />
                          <Button 
                            disabled={isSubmitting || submitStatus === "success" || !email}
                            className={`bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold transition-all duration-300 ${submitStatus !== 'success' && 'hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transform hover:scale-105'}`}
                            onClick={async () => {
                              if (email && !isSubmitting) {
                                setIsSubmitting(true)
                                const result = await submitEmailLocal(email)
                                setIsSubmitting(false)
                                if (result.success) {
                                  setSubmitStatus("success")
                                } else {
                                  setSubmitStatus("error")
                                  alert(result.error)
                                }
                              }
                            }}
                          >
                            {isSubmitting ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : submitStatus === "success" ? (
                              <CheckCircle2 className="h-4 w-4" />
                            ) : (
                              <Mail className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        {submitStatus === "success" && (
                          <p className="text-xs text-green-500 font-medium animate-in fade-in slide-in-from-top-1 text-center">Successfully subscribed!</p>
                        )}
                        {submitStatus === "error" && (
                          <p className="text-xs text-destructive font-medium animate-in fade-in slide-in-from-top-1 text-center">Something went wrong. Please try again.</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-primary/10">
                    <p className="text-xs font-medium text-muted-foreground/80 text-center mb-4 animate-pulse">
                      🎁 Help us build the future by sharing with your network!
                    </p>

                    <div className="flex items-center justify-center gap-6 pt-2">
                      <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
                        <img src="/solana-logo.png" alt="Solana" className="h-8 w-auto hover:drop-shadow-lg" />
                      </div>
                      <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
                        <img src="/pump-fun-logo.png" alt="Pump Fun" className="h-8 w-auto hover:drop-shadow-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Trusted by teams at leading companies</p>
            <LogoMarquee />
          </div>
        </div>
      </main>
    </>
  )
}
