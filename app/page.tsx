import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, Linkedin } from "lucide-react";
import { EmailDialog } from "@/components/email-dialog";
import { ProjectCarousel } from "@/components/project-carousel";
import { achievements } from "@/data/achievements";
import { skills } from "@/data/skills";
import { projects } from "@/data/portfolio";
import GithubButton from "@/components/GithubButton";
import { githubAccounts } from "@/data/github-accounts";

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-background to-muted py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                        Software Engineer
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
                        Building scalable solutions with passion and precision
                    </p>
                    <div className="space-y-6">
                        <div className="flex flex-col gap-6 max-w-2xl mx-auto">
                            {/* Contact Me Row */}
                            <div className="flex items-center gap-6">
                                <h3 className="text-lg font-semibold text-foreground w-32 text-left">
                                    Contact Me
                                </h3>
                                <div className="flex gap-3">
                                    <EmailDialog>
                                        <Button
                                            variant="outline"
                                            size="default"
                                            className="px-4 bg-transparent"
                                        >
                                            <Mail className="mr-2 h-4 w-4" />
                                            Get In Touch
                                        </Button>
                                    </EmailDialog>
                                    <Button
                                        variant="outline"
                                        size="default"
                                        className="px-4 bg-transparent"
                                        asChild
                                    >
                                        <a
                                            href="https://www.linkedin.com/in/mohannad-ahmad-671585205/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Linkedin className="mr-2 h-4 w-4" />
                                            LinkedIn
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            {/* View My Work Row */}
                            <div className="flex items-center gap-6">
                                <h3 className="text-lg font-semibold text-foreground w-32 text-left">
                                    My Github Repositories
                                </h3>
                                <div className="flex gap-3">
                                    {githubAccounts.map((account, index) => {
                                        return (
                                            <GithubButton
                                                key={index}
                                                url={account.url}
                                                text={account.text}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                        About Me
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Passionate software engineer with expertise in
                                full-stack development, specializing in modern
                                web technologies and scalable system
                                architecture. Skilled at solving complex
                                problems and building user-centric applications.
                                Entrepreneurially minded, always seeking
                                opportunities to leverage and monetize
                                technology. Strong background in web development
                                with React.js and backend development in Node.js
                                and Python, while continuously exploring new
                                tools and frameworks to expand technical breadth
                                and stay ahead of industry trends.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center">
                                <span className="text-muted-foreground">
                                    Professional Photo
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-16 px-4 bg-popover">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-popover-foreground">
                        Skills & Technologies
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                        {skills.map((skill) => (
                            <Badge
                                key={skill}
                                variant="secondary"
                                className="p-3 text-center justify-center"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-popover">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                        Education
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        <Card className="border-border/50">
                            <CardContent>
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    Master of Science in Computer Science
                                </h3>
                                <p className="text-muted-foreground mb-1">
                                    University of Oklahoma
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Graduated: December 2021 | GPA: 4.0
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-border/50">
                            <CardContent>
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    Bachelor of Science in Computer Science
                                </h3>
                                <p className="text-muted-foreground mb-1">
                                    University of Oklahoma
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Graduated: May 2019 | GPA: 3.83
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-16 px-4 bg-popover">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-popover-foreground">
                        Featured Projects
                    </h2>
                    <ProjectCarousel projects={projects} />
                </div>
            </section>

            {/* Notable Achievements Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                        Notable Achievements
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {achievements.map((achievement, index) => (
                            <Card
                                key={index}
                                className="border-border hover:shadow-lg transition-shadow"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="text-2xl">
                                            {achievement.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-card-foreground mb-2">
                                                {achievement.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {achievement.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4 bg-muted">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-foreground">
                        Let's Connect
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 text-pretty">
                        I'm always interested in new opportunities and
                        collaborations. Feel free to reach out if you'd like to
                        work together!
                    </p>
                    <div className="flex justify-center gap-4">
                        <EmailDialog>
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                            >
                                <Mail className="mr-2 h-5 w-5" />
                                Email Me
                            </Button>
                        </EmailDialog>
                        <Button variant="outline" size="lg" asChild>
                            <a
                                href="https://www.linkedin.com/in/mohannad-ahmad-671585205/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="mr-2 h-5 w-5" />
                                LinkedIn
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <a
                                href="https://github.com/mohannadwahmad17"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 border-t border-border">
                <div className="max-w-4xl mx-auto text-center"></div>
            </footer>
        </div>
    );
}
