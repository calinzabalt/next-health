import { Appointment } from "@/types";

export function generateICS(appointment: Appointment): string {
    const { date, time, doctorId } = appointment;
    // Format date and time for ICS (YYYYMMDDTHHMMSS)
    // Assuming date is YYYY-MM-DD and time is HH:MM
    const startDateTime = `${date.replace(/-/g, "")}T${time.replace(":", "")}00`;

    // End time (assuming 1 hour duration)
    const [hour, minute] = time.split(":").map(Number);
    const endHour = hour + 1;
    const endDateTime = `${date.replace(/-/g, "")}T${endHour.toString().padStart(2, "0")}${minute.toString().padStart(2, "0")}00`;

    const content = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//NextHealth//Appointment//EN",
        "BEGIN:VEVENT",
        `UID:${appointment.id}@nexthealth.com`,
        `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
        `DTSTART:${startDateTime}`,
        `DTEND:${endDateTime}`,
        `SUMMARY:Appointment with ${doctorId}`,
        "DESCRIPTION:Medical appointment at NextHealth.",
        "LOCATION:NextHealth Clinic",
        "END:VEVENT",
        "END:VCALENDAR"
    ].join("\n");

    return content;
}

export function downloadICS(appointment: Appointment) {
    const content = generateICS(appointment);
    const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `appointment-${appointment.date}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
