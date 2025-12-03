"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DOCTORS } from "@/lib/data";
import { isSlotAvailable, saveAppointment } from "@/lib/storage";
import { downloadICS } from "@/lib/ics";
import { Doctor, Appointment } from "@/types";
import { Check, ChevronRight, Calendar as CalendarIcon, Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function BookingForm() {
    const [step, setStep] = React.useState(1);
    const [selectedDoctor, setSelectedDoctor] = React.useState<Doctor | null>(null);
    const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(undefined);
    const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phone: "",
    });
    const [confirmedAppointment, setConfirmedAppointment] = React.useState<Appointment | null>(null);

    const handleDoctorSelect = (doctor: Doctor) => {
        setSelectedDoctor(doctor);
        setStep(2);
    };

    const handleDateSelect = (date: Date | undefined) => {
        setSelectedDate(date);
        setSelectedTime(null); // Reset time when date changes
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
    };

    const handleDetailsSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedDoctor || !selectedDate || !selectedTime) return;

        const appointment: Appointment = {
            id: crypto.randomUUID(),
            doctorId: selectedDoctor.id,
            date: format(selectedDate, "yyyy-MM-dd"),
            time: selectedTime,
            patientName: formData.name,
            patientEmail: formData.email,
            patientPhone: formData.phone,
            createdAt: new Date().toISOString(),
        };

        saveAppointment(appointment);
        setConfirmedAppointment(appointment);
        setStep(4);
    };

    const availableTimes = React.useMemo(() => {
        if (!selectedDoctor || !selectedDate) return [];
        const dateStr = format(selectedDate, "yyyy-MM-dd");
        const times = selectedDoctor.availability[dateStr] || [];
        return times.filter((time) => isSlotAvailable(selectedDoctor.id, dateStr, time));
    }, [selectedDoctor, selectedDate]);

    const renderStep1 = () => (
        <div className="grid gap-4 md:grid-cols-2">
            {DOCTORS.map((doctor) => (
                <Card
                    key={doctor.id}
                    className={cn("cursor-pointer transition-all hover:border-primary", selectedDoctor?.id === doctor.id && "border-primary ring-1 ring-primary")}
                    onClick={() => handleDoctorSelect(doctor)}
                >
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                            <User className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div>
                            <CardTitle>{doctor.name}</CardTitle>
                            <CardDescription>{doctor.specialty}</CardDescription>
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );

    const renderStep2 = () => (
        <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
                <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    className="rounded-md border"
                    disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                />
            </div>
            <div className="flex-1 space-y-4">
                <h3 className="font-medium">Available Times</h3>
                {!selectedDate ? (
                    <p className="text-muted-foreground text-sm">Please select a date first.</p>
                ) : availableTimes.length === 0 ? (
                    <p className="text-muted-foreground text-sm">No available slots for this date.</p>
                ) : (
                    <div className="grid grid-cols-3 gap-2">
                        {availableTimes.map((time) => (
                            <Button
                                key={time}
                                variant={selectedTime === time ? "default" : "outline"}
                                onClick={() => handleTimeSelect(time)}
                                className="w-full"
                            >
                                {time}
                            </Button>
                        ))}
                    </div>
                )}
                <div className="pt-4 flex justify-end">
                    <Button disabled={!selectedTime} onClick={() => setStep(3)}>
                        Next <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );

    const renderStep3 = () => (
        <form onSubmit={handleDetailsSubmit} className="space-y-4 max-w-md mx-auto">
            <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
            </div>
            <div className="pt-4 flex justify-between">
                <Button type="button" variant="ghost" onClick={() => setStep(2)}>Back</Button>
                <Button type="submit">Confirm Booking</Button>
            </div>
        </form>
    );

    const renderStep4 = () => (
        <div className="text-center space-y-6 py-8">
            <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <Check className="h-8 w-8" />
            </div>
            <div>
                <h2 className="text-2xl font-bold">Booking Confirmed!</h2>
                <p className="text-muted-foreground mt-2">
                    Your appointment with {selectedDoctor?.name} is scheduled for {selectedDate && format(selectedDate, "MMMM d, yyyy")} at {selectedTime}.
                </p>
            </div>
            <div className="flex justify-center gap-4">
                <Button variant="outline" onClick={() => window.location.href = "/"}>
                    Return Home
                </Button>
                {confirmedAppointment && (
                    <Button onClick={() => downloadICS(confirmedAppointment)}>
                        Download Calendar (.ics)
                    </Button>
                )}
            </div>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-8">
                <div className="flex items-center justify-between relative">
                    {[1, 2, 3, 4].map((s) => (
                        <div key={s} className={cn("flex flex-col items-center z-10", step >= s ? "text-primary" : "text-muted-foreground")}>
                            <div className={cn("h-8 w-8 rounded-full flex items-center justify-center border-2 bg-background font-medium transition-colors",
                                step >= s ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground"
                            )}>
                                {s}
                            </div>
                            <span className="text-xs mt-2 font-medium hidden sm:block">
                                {s === 1 ? "Doctor" : s === 2 ? "Date & Time" : s === 3 ? "Details" : "Done"}
                            </span>
                        </div>
                    ))}
                    <div className="absolute top-4 left-0 w-full h-[2px] bg-muted -z-0">
                        <div
                            className="h-full bg-primary transition-all duration-300"
                            style={{ width: `${((step - 1) / 3) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>
                        {step === 1 && "Select a Specialist"}
                        {step === 2 && "Choose Date & Time"}
                        {step === 3 && "Your Details"}
                        {step === 4 && "Confirmation"}
                    </CardTitle>
                    <CardDescription>
                        {step === 1 && "Choose the doctor you would like to see."}
                        {step === 2 && "Select an available slot from the calendar."}
                        {step === 3 && "Please provide your contact information."}
                        {step === 4 && "Your appointment has been successfully booked."}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {step === 1 && renderStep1()}
                    {step === 2 && renderStep2()}
                    {step === 3 && renderStep3()}
                    {step === 4 && renderStep4()}
                </CardContent>
            </Card>
        </div>
    );
}
