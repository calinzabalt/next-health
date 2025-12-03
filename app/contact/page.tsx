import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export default function ContactPage() {
    return (
        <div className="container py-12 md:py-16">
            <ScrollAnimation className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Contact Us</h1>
                <p className="text-muted-foreground text-lg">
                    We are here to help. Reach out to us for any questions or to schedule a visit.
                </p>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <ScrollAnimation delay={0.1}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Get in Touch</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-medium">Location</h3>
                                        <p className="text-muted-foreground">123 Health Avenue, Medical District, NY 10001</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-medium">Phone</h3>
                                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-medium">Email</h3>
                                        <p className="text-muted-foreground">info@nexthealth.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-medium">Hours</h3>
                                        <p className="text-muted-foreground">Mon-Fri: 8am - 8pm</p>
                                        <p className="text-muted-foreground">Sat-Sun: 9am - 5pm</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </ScrollAnimation>

                    {/* Map Placeholder */}
                    <ScrollAnimation delay={0.2}>
                        <Card className="overflow-hidden">
                            <div className="h-64 relative">
                                <img
                                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
                                    alt="NextHealth Clinic Building"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none">
                                    <div className="bg-background/90 p-3 rounded-lg shadow-lg flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-primary" />
                                        <span className="font-medium text-sm">Find us on Google Maps</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </ScrollAnimation>
                </div>

                {/* Contact Form */}
                <ScrollAnimation delay={0.3}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Send us a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="first-name">First Name</Label>
                                        <Input id="first-name" placeholder="John" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="last-name">Last Name</Label>
                                        <Input id="last-name" placeholder="Doe" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" placeholder="Inquiry about..." required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <textarea
                                        id="message"
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="How can we help you?"
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                </ScrollAnimation>
            </div>
        </div>
    );
}
