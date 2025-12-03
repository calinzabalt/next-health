import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Activity, ArrowRight } from "lucide-react";
import { SERVICES, BLOG_POSTS } from "@/lib/data";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=2000&q=80"
            alt="Medical Team"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollAnimation className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              New: Telemedicine Consultations Available
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Your Health, Our Priority
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[700px]">
              Experience modern healthcare with top-rated specialists. Book appointments online, manage your health records, and get expert advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6 pt-4">
              <Button size="lg" asChild className="h-12 px-8 text-base">
                <Link href="/schedule">Book Appointment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-8 text-base">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <ScrollAnimation delay={0.1}>
              <Card className="bg-background border-none shadow-md h-full">
                <CardHeader>
                  <Calendar className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Easy Scheduling</CardTitle>
                  <CardDescription>
                    Book appointments online 24/7. Choose your preferred doctor and time slot instantly.
                  </CardDescription>
                </CardHeader>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <Card className="bg-background border-none shadow-md h-full">
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Expert Doctors</CardTitle>
                  <CardDescription>
                    Our team of specialists is board-certified and dedicated to your well-being.
                  </CardDescription>
                </CardHeader>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <Card className="bg-background border-none shadow-md h-full">
                <CardHeader>
                  <Activity className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Comprehensive Care</CardTitle>
                  <CardDescription>
                    From checkups to specialized treatments, we cover all your health needs.
                  </CardDescription>
                </CardHeader>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <ScrollAnimation className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              We offer a wide range of medical services to ensure you stay healthy and happy.
            </p>
          </ScrollAnimation>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 3).map((service, index) => (
              <ScrollAnimation key={service.slug} delay={index * 0.1}>
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Button variant="ghost" className="w-full justify-between group" asChild>
                      <Link href={`/services/${service.slug}`}>
                        Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <ScrollAnimation delay={0.4}>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <ScrollAnimation className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest Health Tips</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Read our latest articles written by our medical experts.
            </p>
          </ScrollAnimation>
          <div className="grid gap-6 md:grid-cols-2">
            {BLOG_POSTS.slice(0, 2).map((post, index) => (
              <ScrollAnimation key={post.slug} delay={index * 0.1}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="text-sm text-primary font-medium mb-2">{post.date}</div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2 mt-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-primary hover:underline">
                      Read Article
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Ready to prioritize your health?
            </h2>
            <p className="text-primary-foreground/80 md:text-xl max-w-[600px] mx-auto mb-8">
              Schedule an appointment with one of our specialists today.
            </p>
            <Button size="lg" variant="secondary" asChild className="h-12 px-8 text-base text-primary hover:text-primary">
              <Link href="/schedule">Book Now</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
