"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { saveNewsletterEmail } from "@/lib/storage";
import { Mail, CheckCircle } from "lucide-react";

export default function NewsletterPage() {
    const [email, setEmail] = React.useState("");
    const [subscribed, setSubscribed] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            saveNewsletterEmail(email);
            setSubscribed(true);
            setEmail("");
        }
    };

    return (
        <div className="container py-12 md:py-24 flex justify-center">
            <Card className="max-w-md w-full">
                <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                        <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Subscribe to our Newsletter</CardTitle>
                    <CardDescription>
                        Get the latest health tips, news, and updates delivered straight to your inbox.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {subscribed ? (
                        <div className="text-center py-6 space-y-4 animate-in fade-in zoom-in">
                            <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
                            <h3 className="font-medium text-lg">Thank you for subscribing!</h3>
                            <p className="text-muted-foreground text-sm">
                                You have been added to our mailing list.
                            </p>
                            <Button variant="outline" onClick={() => setSubscribed(false)}>
                                Subscribe another email
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Subscribe
                            </Button>
                            <p className="text-xs text-muted-foreground text-center">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </form>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
