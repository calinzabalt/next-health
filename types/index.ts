export interface Doctor {
    id: string;
    name: string;
    specialty: string;
    image: string;
    availability: Record<string, string[]>; // date string -> array of time strings
}

export interface Service {
    slug: string;
    title: string;
    description: string;
    price: string;
    features: string[];
    image: string;
}

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    author: string;
    excerpt: string;
    content: string;
    tags: string[];
}

export interface Appointment {
    id: string;
    doctorId: string;
    date: string;
    time: string;
    patientName: string;
    patientEmail: string;
    patientPhone: string;
    createdAt: string;
}
