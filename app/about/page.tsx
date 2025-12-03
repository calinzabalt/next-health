import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DOCTORS } from "@/lib/data";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export default function AboutPage() {
    return (
        <div className="container py-12 md:py-16">
            {/* Mission Section */}
            <section className="mb-20 text-center max-w-3xl mx-auto">
                <ScrollAnimation>
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Mission</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        At NextHealth, we are dedicated to providing accessible, high-quality healthcare to everyone.
                        We believe in a patient-first approach, combining cutting-edge technology with compassionate care
                        to ensure the best outcomes for our community.
                    </p>
                </ScrollAnimation>
            </section>

            {/* Team Section */}
            <section className="mb-20">
                <ScrollAnimation>
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Meet Our Specialists</h2>
                </ScrollAnimation>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DOCTORS.map((doctor, index) => (
                        <ScrollAnimation key={doctor.id} delay={index * 0.1}>
                            <Card className="overflow-hidden h-full">
                                <div className="aspect-square bg-muted relative">
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle>{doctor.name}</CardTitle>
                                    <CardDescription>{doctor.specialty}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Dr. {doctor.name.split(" ")[2]} has over 10 years of experience in {doctor.specialty}
                                        and is committed to patient education and preventive care.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    ))}
                    {/* Add a dummy doctor to fill grid if needed */}
                    <ScrollAnimation delay={DOCTORS.length * 0.1}>
                        <Card className="overflow-hidden h-full">
                            <div className="aspect-square bg-muted relative">
                                <img
                                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80"
                                    alt="Dr. Emily Chen"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle>Dr. Emily Chen</CardTitle>
                                <CardDescription>Pediatrician</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    Dr. Chen specializes in child development and provides compassionate care for your little ones.
                                </p>
                            </CardContent>
                        </Card>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Certifications Section */}
            <ScrollAnimation>
                <section className="text-center bg-muted/30 py-16 rounded-3xl">
                    <h2 className="text-2xl font-bold mb-8">Accreditations & Awards</h2>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale">
                        {/* Placeholders for logos */}
                        <div className="flex items-center gap-2 font-bold text-xl"><div className="h-8 w-8 bg-current rounded-full"></div> JCI Accredited</div>
                        <div className="flex items-center gap-2 font-bold text-xl"><div className="h-8 w-8 bg-current rounded-full"></div> Best Hospital 2024</div>
                        <div className="flex items-center gap-2 font-bold text-xl"><div className="h-8 w-8 bg-current rounded-full"></div> HIPAA Compliant</div>
                    </div>
                </section>
            </ScrollAnimation>
        </div>
    );
}
