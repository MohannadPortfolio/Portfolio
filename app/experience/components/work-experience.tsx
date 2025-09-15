import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";

interface WorkExperienceProps {
    title: string;
    description: string;
    timePeriod: string;
    location: string;
    details: string[];
    technologies: string[];
}

export default function WorkExperience({
    title,
    description,
    timePeriod,
    location,
    details,
    technologies,
}: WorkExperienceProps) {
    return (
        <Card className="border-border/50">
            <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <CardTitle className="text-xl text-foreground">
                            {title}
                        </CardTitle>
                        <CardDescription className="text-primary font-medium">
                            {description}
                        </CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CalendarDays className="h-4 w-4" />
                            <span>{timePeriod}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{location}</span>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                    {details.map((detail, index) => (
                        <li key={index}>• {detail}</li>
                    ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
