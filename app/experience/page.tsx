import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Professional Experience</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my professional journey, key projects, and personal ventures in software
            engineering.
          </p>
        </div>
      </section>

      {/* Professional Work Experience */}
      <section className="py-16 px-4 bg-popover/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Professional Work Experience</h2>
          <div className="space-y-8">
            {/* Senior Software Engineer */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground">Senior Software Engineer</CardTitle>
                    <CardDescription className="text-primary font-medium">TechCorp Solutions</CardDescription>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      <span>Jan 2022 - Present</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Led development of microservices architecture serving 1M+ daily active users</li>
                  <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
                  <li>• Mentored 5 junior developers and conducted technical interviews</li>
                  <li>• Architected real-time data processing system handling 10TB+ daily</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Full Stack Developer */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground">Full Stack Developer</CardTitle>
                    <CardDescription className="text-primary font-medium">StartupXYZ</CardDescription>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      <span>Jun 2020 - Dec 2021</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Remote</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Built responsive web applications from concept to production</li>
                  <li>• Developed RESTful APIs and integrated third-party services</li>
                  <li>• Optimized application performance resulting in 40% faster load times</li>
                  <li>• Collaborated with design team to implement pixel-perfect UIs</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Vue.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Django</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Redis</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Software Developer */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground">Software Developer</CardTitle>
                    <CardDescription className="text-primary font-medium">Digital Innovations Inc.</CardDescription>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      <span>Aug 2018 - May 2020</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>New York, NY</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Developed and maintained client-facing web applications</li>
                  <li>• Participated in agile development processes and code reviews</li>
                  <li>• Implemented automated testing suites improving code coverage to 85%</li>
                  <li>• Fixed critical bugs and enhanced existing features</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">Laravel</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">jQuery</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Side Projects & Personal Ventures */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Side Projects & Personal Ventures</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Project 1 */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">DevTools Analytics</CardTitle>
                <CardDescription>SaaS platform for developer productivity metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Built a comprehensive analytics platform that helps development teams track productivity metrics, code
                  quality, and deployment frequency. Gained 500+ beta users in first 3 months.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Supabase</Badge>
                  <Badge variant="secondary">Stripe</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Source
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Open Source CLI Tool</CardTitle>
                <CardDescription>Command-line utility for API testing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Created a popular CLI tool for API testing and documentation generation. Featured on GitHub trending
                  and has 2.5k+ stars with active community contributions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Go</Badge>
                  <Badge variant="secondary">Cobra CLI</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
                  <Badge variant="secondary">JSON</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Documentation
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Mobile Fitness App</CardTitle>
                <CardDescription>React Native workout tracking application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Developed a cross-platform mobile app for workout tracking with social features. Implemented real-time
                  synchronization and offline-first architecture.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Expo</Badge>
                  <Badge variant="secondary">Firebase</Badge>
                  <Badge variant="secondary">Redux</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      App Store
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Source
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">AI Content Generator</CardTitle>
                <CardDescription>Machine learning powered content creation tool</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Built an AI-powered content generation platform using modern ML frameworks. Integrated multiple AI
                  models for text, image, and code generation capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">FastAPI</Badge>
                  <Badge variant="secondary">OpenAI API</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Source
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
