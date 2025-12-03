"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BLOG_POSTS } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = BLOG_POSTS.slice(startIndex, startIndex + POSTS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="container py-12 md:py-16">
            <ScrollAnimation className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Health & Wellness Blog</h1>
                <p className="text-muted-foreground text-lg">
                    Expert advice, tips, and news from our medical professionals.
                </p>
            </ScrollAnimation>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                {currentPosts.map((post, index) => (
                    <ScrollAnimation key={post.slug} delay={index * 0.1}>
                        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                                    <span>{post.date}</span>
                                    <span className="text-primary font-medium">{post.tags[0]}</span>
                                </div>
                                <CardTitle className="line-clamp-2">
                                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                        {post.title}
                                    </Link>
                                </CardTitle>
                                <CardDescription className="line-clamp-3 mt-2">
                                    {post.excerpt}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="mt-auto pt-0">
                                <div className="flex items-center text-sm font-medium text-muted-foreground">
                                    By {post.author}
                                </div>
                            </CardContent>
                        </Card>
                    </ScrollAnimation>
                ))}
            </div>

            {/* Pagination UI */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                            key={page}
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </Button>
                    ))}

                    <Button
                        variant="outline"
                        size="icon"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            )}
        </div>
    );
}
