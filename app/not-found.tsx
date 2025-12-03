import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-9xl font-bold text-primary/20">404</h1>
            <h2 className="text-3xl font-bold tracking-tight mt-4 mb-2">Page Not Found</h2>
            <p className="text-muted-foreground mb-8 max-w-[500px]">
                Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
            </p>
            <Button asChild size="lg">
                <Link href="/">Return Home</Link>
            </Button>
        </div>
    );
}
