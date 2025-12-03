import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/lib/data";
import { ArrowRight, Check } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export default function ServicesPage() {
    return (
        <div className="container py-12 md:py-16">
            <ScrollAnimation className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Medical Services</h1>
                <p className="text-muted-foreground text-lg">
                    We provide a comprehensive range of medical services to cater to your specific health needs.
                </p>
            </ScrollAnimation>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {SERVICES.map((service, index) => (
                    <ScrollAnimation key={service.slug} delay={index * 0.1}>
                        <Card className="flex flex-col h-full">
                            <CardHeader>
                                <CardTitle className="text-2xl">{service.title}</CardTitle>
                                <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <div className="mb-6 flex-1">
                                    <ul className="space-y-2">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center text-sm text-muted-foreground">
                                                <Check className="h-4 w-4 text-primary mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex items-center justify-between mt-auto pt-4 border-t">
                                    <span className="font-bold text-lg">{service.price}</span>
                                    <Button variant="outline" asChild>
                                        <Link href={`/services/${service.slug}`}>
                                            Details <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </ScrollAnimation>
                ))}
            </div>

            <ScrollAnimation className="mt-16 text-center bg-muted/30 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">Need a custom consultation?</h2>
                <p className="text-muted-foreground mb-6">
                    Our doctors are available for personalized health assessments.
                </p>
                <Button size="lg" asChild>
                    <Link href="/schedule">Book an Appointment</Link>
                </Button>
            </ScrollAnimation>
        </div>
    );
}
