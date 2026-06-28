"use client"

import { DotMatrix } from "@/components/dot-matrix"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Code2, Rocket, Zap, Github, Terminal } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
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

      <div className="relative z-10">
        <header className="border-b border-border bg-background/80 backdrop-blur-sm">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="font-semibold">AI IDE Dashboard</span>
            </div>
          </div>
        </header>

        <main className="container mx-auto py-12 px-6">
          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Welcome Section */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-serif italic tracking-tight text-balance">
                Welcome, Builder
              </h1>
              <p className="text-muted-foreground text-balance leading-relaxed">
                You're in. Start building production-ready apps with AI assistance.
              </p>
            </div>

            {/* Getting Started Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-background/60 backdrop-blur-sm border-border hover:bg-background/80 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Code2 className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Create New Project</CardTitle>
                  </div>
                  <CardDescription>
                    Start with a template or describe your app idea and let AI build it
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Sparkles className="h-4 w-4 mr-2" />
                    New Project
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-background/60 backdrop-blur-sm border-border hover:bg-background/80 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Import from GitHub</CardTitle>
                  </div>
                  <CardDescription>
                    Connect your repository and enhance it with AI capabilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Github className="h-4 w-4 mr-2" />
                    Connect GitHub
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-background/60 backdrop-blur-sm border-border hover:bg-background/80 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Terminal className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">CLI Setup</CardTitle>
                  </div>
                  <CardDescription>
                    Install the CLI tool to use AI IDE from your terminal
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    View Docs
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-background/60 backdrop-blur-sm border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Projects</CardTitle>
                  <Code2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">0</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Create your first project
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/60 backdrop-blur-sm border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Deployments</CardTitle>
                  <Rocket className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">0</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Ship your first app
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/60 backdrop-blur-sm border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">AI Credits</CardTitle>
                  <Zap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">100</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Free trial credits
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Resources */}
            <Card className="bg-background/60 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle>Resources</CardTitle>
                <CardDescription>
                  Everything you need to get started with AI-powered development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: "Quickstart Guide", description: "Build your first app in 5 minutes", link: "#" },
                    { title: "Documentation", description: "Complete API reference and guides", link: "#" },
                    { title: "Templates", description: "Pre-built starter templates", link: "#" },
                    { title: "Community", description: "Join our Discord server", link: "#" },
                  ].map((resource, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0 hover:bg-background/40 rounded px-2 -mx-2 transition-colors cursor-pointer">
                      <div>
                        <p className="text-sm font-medium">{resource.title}</p>
                        <p className="text-xs text-muted-foreground">{resource.description}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        View →
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
