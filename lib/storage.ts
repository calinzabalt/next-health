import { Appointment } from "@/types";

const STORAGE_KEYS = {
    APPOINTMENTS: "health-app-appointments",
    NEWSLETTER: "health-app-newsletter",
};

export function getAppointments(): Appointment[] {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem(STORAGE_KEYS.APPOINTMENTS);
    return data ? JSON.parse(data) : [];
}

export function saveAppointment(appointment: Appointment): void {
    if (typeof window === "undefined") return;
    const appointments = getAppointments();
    appointments.push(appointment);
    localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));
}

export function isSlotAvailable(doctorId: string, date: string, time: string): boolean {
    const appointments = getAppointments();
    return !appointments.some(
        (appt) =>
            appt.doctorId === doctorId &&
            appt.date === date &&
            appt.time === time
    );
}

export function saveNewsletterEmail(email: string): void {
    if (typeof window === "undefined") return;
    const emails = JSON.parse(localStorage.getItem(STORAGE_KEYS.NEWSLETTER) || "[]");
    if (!emails.includes(email)) {
        emails.push(email);
        localStorage.setItem(STORAGE_KEYS.NEWSLETTER, JSON.stringify(emails));
    }
}

export function getNewsletterEmails(): string[] {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.NEWSLETTER) || "[]");
}
