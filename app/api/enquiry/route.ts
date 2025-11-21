import { NextResponse } from "next/server";
import { Resend } from 'resend';
import { EnquiryEmail } from '@/emails/EnquiryEmail';
import * as z from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Define validation schema for incoming data
const formSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const data = formSchema.parse(body);

        // This is the email you verified with Resend
        const emailFrom = process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev'; 
        
        // This is the office email where you want to receive the lead
        const emailTo = process.env.CONTACT_EMAIL_TO; 
        
        if (!emailTo) {
            return new NextResponse('Internal Error: Contact recipient not configured.', { status: 500 });
        }

        const { name, email, phone, message } = data;

        const resendResponse = await resend.emails.send({
            from: `JBSS Enquiry <${emailFrom}>`,
            to: [emailTo], 
            subject: `NEW ENQUIRY: ${name}`,
            replyTo: email, // Set the sender's email as reply-to
            react: EnquiryEmail({ name, email, phone: phone || 'N/A', message }),
        });

        if (resendResponse.error) {
            console.error("[RESEND_ERROR]", resendResponse.error);
            return new NextResponse('Email Service Failed.', { status: 500 });
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return new NextResponse('Invalid input data.', { status: 400 });
        }
        console.log("[ENQUIRY_POST]", error);
        return new NextResponse('Internal Server Error.', { status: 500 });
    }
}