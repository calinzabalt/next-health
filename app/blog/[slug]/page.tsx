import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/lib/data";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container py-12 md:py-16 max-w-4xl">
            <Button variant="ghost" asChild className="mb-8">
                <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Link>
            </Button>

            <article className="prose prose-slate lg:prose-lg dark:prose-invert mx-auto">
                <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                        <Tag className="h-4 w-4" />
                        {post.tags.join(", ")}
                    </div>
                </div>

                <h1 className="text-4xl font-bold tracking-tight mb-6">{post.title}</h1>

                <div className="bg-muted/50 p-6 rounded-xl text-lg font-medium text-muted-foreground mb-8 italic">
                    {post.excerpt}
                </div>

                <div className="space-y-4">
                    <p>
                        {post.content}
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h2>Key Takeaways</h2>
                    <ul>
                        <li>Stay hydrated</li>
                        <li>Exercise regularly</li>
                        <li>Sleep well</li>
                    </ul>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </article>

            <div className="mt-12 pt-8 border-t">
                <h3 className="text-xl font-bold mb-4">Share this article</h3>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">Twitter</Button>
                    <Button variant="outline" size="sm">Facebook</Button>
                    <Button variant="outline" size="sm">LinkedIn</Button>
                </div>
            </div>
        </div>
    );
}
