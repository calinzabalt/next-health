import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const tiers = [
    {
        name: "Basic",
        price: "$50",
        description: "Essential care for individuals.",
        features: ["Annual Checkup", "Basic Lab Tests", "Telemedicine Access (9am-5pm)", "Online Health Records"],
        cta: "Choose Basic",
        popular: false,
    },
    {
        name: "Premium",
        price: "$99",
        description: "Comprehensive care for families.",
        features: ["Everything in Basic", "Specialist Consultations (2/yr)", "24/7 Telemedicine", "Priority Booking", "Family Coverage (up to 4)"],
        cta: "Choose Premium",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Complete health solutions for organizations.",
        features: ["Everything in Premium", "On-site Clinics", "Mental Health Support", "Dedicated Account Manager", "Custom Health Plans"],
        cta: "Contact Sales",
        popular: false,
    },
];

export default function PricingPage() {
    return (
        <div className="container py-12 md:py-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Simple, Transparent Pricing</h1>
                <p className="text-muted-foreground text-lg">
                    Choose the plan that fits your needs. No hidden fees.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {tiers.map((tier) => (
                    <Card key={tier.name} className={`flex flex-col ${tier.popular ? 'border-primary shadow-lg relative' : ''}`}>
                        {tier.popular && (
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                                Most Popular
                            </div>
                        )}
                        <CardHeader>
                            <CardTitle className="text-2xl">{tier.name}</CardTitle>
                            <CardDescription>{tier.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-bold mb-6">{tier.price}<span className="text-base font-normal text-muted-foreground">/month</span></div>
                            <ul className="space-y-3">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-sm">
                                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant={tier.popular ? "default" : "outline"} asChild>
                                <Link href="/contact">{tier.cta}</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
