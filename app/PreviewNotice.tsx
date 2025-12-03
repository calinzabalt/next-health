"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info, Bot, Box, Bell, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PreviewNotice() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 15000); // 15 seconds

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.9 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                            staggerChildren: 0.1,
                            delayChildren: 0.2
                        }
                    },
                    exit: { opacity: 0, y: 50, scale: 0.9 }
                }}
                className="fixed bottom-4 right-4 z-50 w-full max-w-sm px-4 sm:px-0"
            >
                <Card className="border-primary/20 shadow-2xl backdrop-blur-sm">
                    <CardHeader className="relative pb-2">
                        <div className="flex items-center gap-2">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
                            >
                                <Info className="h-5 w-5 text-primary" />
                            </motion.div>
                            <CardTitle className="text-lg">Preview Mode</CardTitle>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2 h-8 w-8"
                            onClick={() => setIsVisible(false)}
                        >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </Button>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                        <div className="space-y-2">
                            <p className="font-medium text-foreground">
                                Presented by: <span className="text-primary"><a href="https://webuilders.dev/" target="_blank">webuilders.dev</a></span>
                            </p>
                            <p className="text-muted-foreground">
                                This website is in preview mode and is not intended for actual medical use. It showcases how your health platform could look and function.
                            </p>
                        </div>

                        <div className="space-y-2 rounded-lg bg-secondary/50 p-3">
                            <p className="font-semibold">Future Features Available:</p>
                            <ul className="grid grid-cols-1 gap-2 text-xs text-muted-foreground">
                                <motion.li variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-2">
                                    <Bot className="h-3 w-3" /> AI Symptom Checker
                                </motion.li>
                                <motion.li variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-2">
                                    <Box className="h-3 w-3" /> Personal Health Dashboard
                                </motion.li>
                                <motion.li variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-2">
                                    <Bell className="h-3 w-3" /> Appointment Reminders & Follow-Ups
                                </motion.li>
                                <motion.li variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-2">
                                    <Mail className="h-3 w-3" /> Wellness Programs & Email Guidance
                                </motion.li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </AnimatePresence>
    );
}