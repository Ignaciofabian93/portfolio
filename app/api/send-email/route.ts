import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const { data: notificationData, error: notificationError } =
      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "ignaciofabian93@gmail.com",
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
              .info { background: white; padding: 15px; margin: 10px 0; border-radius: 4px; border-left: 4px solid #667eea; }
              .message-box { background: white; padding: 20px; margin: 15px 0; border-radius: 4px; }
              .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">📬 New Portfolio Message</h1>
              </div>
              <div class="content">
                <div class="info">
                  <p style="margin: 5px 0;"><strong>From:</strong> ${name}</p>
                  <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                  <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
                </div>
                
                <div class="message-box">
                  <h3 style="margin-top: 0; color: #667eea;">Message:</h3>
                  <p style="white-space: pre-wrap;">${message}</p>
                </div>
                
                <p style="margin-top: 20px; padding: 10px; background: #e3f2fd; border-radius: 4px;">
                  💡 <strong>Tip:</strong> Click "Reply" to respond directly to ${name}
                </p>
              </div>
              <div class="footer">
                Sent from your portfolio at ignaciorodriguez.dev
              </div>
            </div>
          </body>
        </html>
      `,
      });

    if (notificationError) {
      console.error("Error sending notification:", notificationError);
      return NextResponse.json(
        { error: "Failed to send notification email" },
        { status: 500 }
      );
    }

    const { data: confirmationData, error: confirmationError } =
      await resend.emails.send({
        from: "Ignacio Rodríguez <onboarding@resend.dev>",
        to: email,
        subject: "Thanks for reaching out!",
        html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .message-copy { background: white; padding: 20px; margin: 20px 0; border-radius: 4px; border-left: 4px solid #667eea; }
              .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
              .social-links { margin: 20px 0; }
              .social-links a { display: inline-block; margin: 0 10px; color: #667eea; text-decoration: none; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">✅ Message Received!</h1>
              </div>
              <div class="content">
                <h2>Hi ${name},</h2>
                <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible, usually within 24 hours.</p>
                
                <div class="message-copy">
                  <h3 style="margin-top: 0; color: #667eea;">Your message:</h3>
                  <p><strong>Subject:</strong> ${subject}</p>
                  <p style="white-space: pre-wrap; margin-top: 10px;">${message}</p>
                </div>
                
                <p>In the meantime, feel free to:</p>
                <div class="social-links">
                  <a href="https://www.linkedin.com/in/ignacio-rodríguez-rulas/" target="_blank">🔗 Connect on LinkedIn</a>
                  <a href="https://github.com/Ignaciofabian93" target="_blank">💻 Check out my GitHub</a>
                  <a href="https://www.ekoru.cl" target="_blank">🌱 Visit Ekoru</a>
                </div>
                
                <p style="margin-top: 30px;">Best regards,<br><strong>Ignacio Fabián Rodríguez Rulas</strong><br>Full-Stack Software Engineer</p>
              </div>
              <div class="footer">
                This is an automated confirmation. Please do not reply to this email.
              </div>
            </div>
          </body>
        </html>
      `,
      });

    if (confirmationError) {
      console.error("Error sending confirmation:", confirmationError);
    }

    return NextResponse.json(
      {
        message: "Email sent successfully",
        notificationId: notificationData?.id,
        confirmationId: confirmationData?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
