import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CalendarDays, MapPin, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    internships,
    sideProjects,
    workExperience,
} from "@/data/work-experience";
import WorkExperience from "./components/work-experience";

export default function ExperiencePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                        Professional Experience
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive overview of my professional journey, key
                        projects, and personal ventures in software engineering.
                    </p>
                </div>
            </section>

            {/* Professional Work Experience */}
            <section className="py-16 px-4 bg-popover/50">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                        Professional Work Experience
                    </h2>
                    <div className="space-y-8">
                        {workExperience.map((job) => {
                            return <WorkExperience key={job.title} {...job} />;
                        })}
                    </div>
                </div>
            </section>
            {/* Internships */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                        Internships
                    </h2>
                    <div className="space-y-8">
                        {internships.map((internship) => {
                            return (
                                <WorkExperience
                                    key={internship.title}
                                    {...internship}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* Side Projects & Personal Ventures */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                        Side Projects & Personal Ventures
                    </h2>
                    <div className="space-y-8">
                        {sideProjects.map((project) => {
                            return (
                                <WorkExperience
                                    key={project.title}
                                    {...project}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
