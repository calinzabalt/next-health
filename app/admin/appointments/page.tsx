"use client";

import * as React from "react";
import { getAppointments } from "@/lib/storage";
import { Appointment } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

export default function AdminAppointmentsPage() {
    const [appointments, setAppointments] = React.useState<Appointment[]>([]);

    React.useEffect(() => {
        setAppointments(getAppointments());
    }, []);

    const downloadCSV = () => {
        const headers = ["ID", "Doctor ID", "Date", "Time", "Patient Name", "Patient Email", "Patient Phone", "Created At"];
        const rows = appointments.map(appt => [
            appt.id,
            appt.doctorId,
            appt.date,
            appt.time,
            appt.patientName,
            appt.patientEmail,
            appt.patientPhone,
            appt.createdAt
        ]);

        const csvContent = [
            headers.join(","),
            ...rows.map(row => row.map(cell => `"${cell}"`).join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "appointments.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="container py-12">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold">Appointment Dashboard</h1>
                <Button onClick={downloadCSV} disabled={appointments.length === 0}>
                    <Download className="mr-2 h-4 w-4" /> Export CSV
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>All Appointments ({appointments.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    {appointments.length === 0 ? (
                        <p className="text-muted-foreground text-center py-8">No appointments found.</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-muted-foreground border-b">
                                    <tr>
                                        <th className="py-3 px-4 font-medium">Date & Time</th>
                                        <th className="py-3 px-4 font-medium">Doctor</th>
                                        <th className="py-3 px-4 font-medium">Patient</th>
                                        <th className="py-3 px-4 font-medium">Contact</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointments.map((appt) => (
                                        <tr key={appt.id} className="border-b last:border-0 hover:bg-muted/50">
                                            <td className="py-3 px-4">
                                                <div className="font-medium">{appt.date}</div>
                                                <div className="text-muted-foreground">{appt.time}</div>
                                            </td>
                                            <td className="py-3 px-4">{appt.doctorId}</td>
                                            <td className="py-3 px-4">{appt.patientName}</td>
                                            <td className="py-3 px-4">
                                                <div>{appt.patientEmail}</div>
                                                <div className="text-muted-foreground">{appt.patientPhone}</div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
