import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/data";
import { Check, ArrowLeft } from "lucide-react";

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = SERVICES.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="container py-12 md:py-16">
            <Button variant="ghost" asChild className="mb-8">
                <Link href="/services">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                </Link>
            </Button>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">{service.title}</h1>
                    <p className="text-xl text-muted-foreground mb-8">{service.description}</p>

                    <div className="bg-muted/30 p-6 rounded-xl mb-8">
                        <h3 className="font-semibold text-lg mb-4">What's Included</h3>
                        <ul className="space-y-3">
                            {service.features.map((feature) => (
                                <li key={feature} className="flex items-center">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                        <Check className="h-4 w-4 text-primary" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button size="lg" asChild>
                            <Link href="/schedule">Book This Service</Link>
                        </Button>
                        <span className="text-2xl font-bold text-muted-foreground">
                            {service.price}
                        </span>
                    </div>
                </div>

                <div className="rounded-2xl overflow-hidden aspect-video md:aspect-square relative">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
}
