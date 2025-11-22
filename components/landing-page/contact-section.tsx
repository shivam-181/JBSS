"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { toast } from "sonner";
import { 
    Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormMessage 
} from "@/components/ui/form";

// Define the schema (must match the API route)
const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email" }),
    phone: z.string().optional(),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});


export const ContactSection = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post("/api/enquiry", values);
            toast.success("Enquiry sent successfully! We will contact you shortly.");
            form.reset();
        } catch (error) {
            toast.error("Failed to send enquiry. Please check your network or try again later.");
            console.error("Form Submission Error:", error);
        }
    };

    return (
        <section className="py-24 bg-[#e4eaee]">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 text-center overflow-hidden relative">
                    
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none" />
                    
                    <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Questions?</h2>
                    <p className="text-slate-300 mb-10 max-w-lg mx-auto">
                        Reach out to our admission team for career guidance and course details.
                    </p>
                    
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4 text-left">
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input placeholder="Name" disabled={isSubmitting} className="bg-white/10 border-white/20 text-white placeholder:text-white/50" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input placeholder="Phone" disabled={isSubmitting} className="bg-white/10 border-white/20 text-white placeholder:text-white/50" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input placeholder="Email" type="email" disabled={isSubmitting} className="bg-white/10 border-white/20 text-white placeholder:text-white/50" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Textarea placeholder="Your Message" disabled={isSubmitting} className="bg-white/10 border-white/20 text-white placeholder:text-white/50" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />

                        <Button 
                            size="lg" 
                            type="submit"
                            disabled={isSubmitting || !isValid}
                            className="w-full bg-white text-black hover:bg-white/90"
                        >
                            Send Enquiry
                        </Button>
                        </form>
                    </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};