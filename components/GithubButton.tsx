import { Github } from "lucide-react";
import { Button } from "./ui/button";

interface GithubButtonProps {
    url: string;
    text: string;
}

export default function GithubButton({ url, text }: GithubButtonProps) {
    return (
        <Button
            size="default"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-3"
            asChild
        >
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                {text}
            </a>
        </Button>
    );
}
