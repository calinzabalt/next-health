import { BookingForm } from "@/components/features/BookingForm";

export default function SchedulePage() {
    return (
        <div className="container py-12 md:py-16">
            <div className="max-w-2xl mx-auto text-center mb-10">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Book an Appointment</h1>
                <p className="text-muted-foreground">
                    Schedule a consultation with our expert medical team. Follow the steps below to secure your slot.
                </p>
            </div>
            <BookingForm />
        </div>
    );
}
