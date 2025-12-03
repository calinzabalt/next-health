import { Doctor, Service, BlogPost } from "@/types";

export const DOCTORS: Doctor[] = [
    {
        id: "dr-smith",
        name: "Dr. Sarah Smith",
        specialty: "Cardiologist",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
        availability: {
            "2025-12-04": ["09:00", "10:00", "14:00"],
            "2025-12-05": ["11:00", "15:00"],
        }
    },
    {
        id: "dr-jones",
        name: "Dr. Mike Jones",
        specialty: "Dermatologist",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
        availability: {
            "2025-12-04": ["13:00", "14:00", "15:00"],
            "2025-12-06": ["09:00", "10:00"],
        }
    }
];

export const SERVICES: Service[] = [
    {
        slug: "cardiology",
        title: "Cardiology",
        description: "Comprehensive heart care and diagnostics.",
        price: "$200",
        features: ["ECG", "Stress Test", "Consultation"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    },
    {
        slug: "dermatology",
        title: "Dermatology",
        description: "Expert skin care and treatment.",
        price: "$150",
        features: ["Skin Exam", "Acne Treatment", "Biopsy"],
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
    },
    {
        slug: "pediatrics",
        title: "Pediatrics",
        description: "Care for infants, children, and adolescents.",
        price: "$120",
        features: ["Checkups", "Vaccinations", "Sick Visits"],
        image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=800&q=80"
    }
];

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "heart-health-tips",
        title: "Top 10 Tips for a Healthy Heart",
        date: "2025-11-15",
        author: "Dr. Sarah Smith",
        excerpt: "Learn how to keep your heart strong with these simple lifestyle changes.",
        content: "Content goes here...",
        tags: ["Health", "Cardiology"]
    },
    {
        slug: "winter-skin-care",
        title: "Protecting Your Skin in Winter",
        date: "2025-11-20",
        author: "Dr. Mike Jones",
        excerpt: "Dry skin? Here is how to stay moisturized during the cold months.",
        content: "Content goes here...",
        tags: ["Skin", "Winter"]
    },
    {
        slug: "nutrition-basics",
        title: "Nutrition Basics for a Balanced Diet",
        date: "2025-11-25",
        author: "Dr. Emily Chen",
        excerpt: "Understand the fundamentals of nutrition and how to eat for energy and longevity.",
        content: "Content goes here...",
        tags: ["Nutrition", "Wellness"]
    },
    {
        slug: "stress-management",
        title: "Effective Stress Management Techniques",
        date: "2025-11-28",
        author: "Dr. Sarah Smith",
        excerpt: "Discover proven methods to reduce stress and improve your mental well-being.",
        content: "Content goes here...",
        tags: ["Mental Health", "Wellness"]
    },
    {
        slug: "sleep-hygiene",
        title: "The Importance of Good Sleep Hygiene",
        date: "2025-12-01",
        author: "Dr. Mike Jones",
        excerpt: "Why sleep matters and how to establish a bedtime routine that works.",
        content: "Content goes here...",
        tags: ["Sleep", "Health"]
    },
    {
        slug: "exercise-benefits",
        title: "Benefits of Regular Exercise",
        date: "2025-12-02",
        author: "Dr. Emily Chen",
        excerpt: "How staying active can boost your immune system and overall mood.",
        content: "Content goes here...",
        tags: ["Fitness", "Health"]
    },
    {
        slug: "vaccination-facts",
        title: "Vaccination Myths vs. Facts",
        date: "2025-12-03",
        author: "Dr. Sarah Smith",
        excerpt: "Separating fact from fiction when it comes to immunizations.",
        content: "Content goes here...",
        tags: ["Medical", "Education"]
    }
];
