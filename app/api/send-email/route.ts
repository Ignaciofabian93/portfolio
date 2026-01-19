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

    // NOTIFICATION EMAIL
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6; 
            color: #e2e8f0;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
            padding: 20px;
          }
          .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: rgba(15, 23, 42, 0.95);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(6, 182, 212, 0.3);
          }
          .content { 
            padding: 30px;
          }
          .message-indicator {
            display: inline-block;
            background: rgba(6, 182, 212, 0.2);
            color: #06b6d4;
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .info-box { 
            background: rgba(30, 41, 59, 0.6);
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            border-left: 4px solid #06b6d4;
          }
          .info-row {
            margin: 10px 0;
            font-size: 14px;
          }
          .info-label {
            color: #94a3b8;
            font-weight: 600;
            display: inline-block;
            min-width: 80px;
          }
          .info-value {
            color: #e2e8f0;
          }
          .info-value a {
            color: #06b6d4;
            text-decoration: none;
          }
          .info-value a:hover {
            text-decoration: underline;
          }
          .message-box { 
            background: rgba(30, 41, 59, 0.6);
            padding: 24px;
            margin: 20px 0;
            border-radius: 8px;
            border: 1px solid rgba(6, 182, 212, 0.2);
          }
          .message-title {
            color: #06b6d4;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 16px;
            font-family: 'Courier New', monospace;
          }
          .message-text {
            color: #cbd5e1;
            white-space: pre-wrap;
            line-height: 1.7;
            font-size: 15px;
          }
          .footer { 
            text-align: center;
            padding: 20px;
            color: #64748b;
            font-size: 12px;
            border-top: 1px solid rgba(6, 182, 212, 0.2);
            background: rgba(15, 23, 42, 0.8);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="content">
            <div class="message-indicator">
              NEW CONTACT MESSAGE
            </div>
            
            <div class="info-box">
              <div class="info-row">
                <span class="info-label">From:</span>
                <span class="info-value">${name}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Email:</span>
                <span class="info-value"><a href="mailto:${email}">${email}</a></span>
              </div>
              <div class="info-row">
                <span class="info-label">Subject:</span>
                <span class="info-value">${subject}</span>
              </div>
            </div>
            
            <div class="message-box">
              <div class="message-title">&gt; Message content:</div>
              <div class="message-text">${message}</div>
            </div>
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

    // CONFIRMATION EMAIL
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6; 
            color: #e2e8f0;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
            padding: 20px;
          }
          .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: rgba(15, 23, 42, 0.95);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(6, 182, 212, 0.3);
          }
          .content { 
            padding: 30px;
          }
          .success-indicator {
            display: inline-block;
            background: rgba(34, 197, 94, 0.2);
            color: #22c55e;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 24px;
            border: 1px solid rgba(34, 197, 94, 0.3);
          }
          .greeting {
            font-size: 20px;
            color: #06b6d4;
            margin-bottom: 20px;
            font-weight: 600;
          }
          .message-copy { 
            background: rgba(30, 41, 59, 0.6);
            padding: 24px;
            margin: 24px 0;
            border-radius: 8px;
            border-left: 4px solid #06b6d4;
          }
          .message-copy-title {
            color: #06b6d4;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 12px;
            font-family: 'Courier New', monospace;
          }
          .copy-subject {
            color: #94a3b8;
            margin-bottom: 16px;
            padding-bottom: 12px;
            border-bottom: 1px solid rgba(6, 182, 212, 0.2);
          }
          .copy-subject strong {
            color: #e2e8f0;
          }
          .copy-text {
            color: #cbd5e1;
            white-space: pre-wrap;
            line-height: 1.7;
            font-size: 15px;
          }
          .social-section {
            background: rgba(6, 182, 212, 0.1);
            padding: 20px;
            border-radius: 8px;
            margin: 24px 0;
            border: 1px solid rgba(6, 182, 212, 0.2);
          }
          .social-title {
            color: #06b6d4;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 16px;
          }
          .social-links {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
          }
          .social-link {
            display: inline-block;
            background: rgba(30, 41, 59, 0.8);
            color: #06b6d4;
            text-decoration: none;
            padding: 10px 16px;
            border-radius: 6px;
            font-size: 14px;
            border: 1px solid rgba(6, 182, 212, 0.3);
            transition: all 0.2s;
          }
          .social-link:hover {
            background: rgba(6, 182, 212, 0.2);
            border-color: #06b6d4;
          }
          .signature {
            margin-top: 32px;
            padding-top: 24px;
            border-top: 1px solid rgba(6, 182, 212, 0.2);
          }
          .signature-name {
            color: #e2e8f0;
            font-weight: 600;
            font-size: 16px;
          }
          .signature-title {
            color: #06b6d4;
            font-size: 14px;
            margin-top: 4px;
          }
          .footer { 
            text-align: center;
            padding: 20px;
            color: #64748b;
            font-size: 12px;
            border-top: 1px solid rgba(6, 182, 212, 0.2);
            background: rgba(15, 23, 42, 0.8);
          }
          p { margin: 12px 0; color: #cbd5e1; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="content">
            <div class="success-indicator">
              MESSAGE RECEIVED
            </div>
            
            <div class="greeting">Hi ${name}! 👋</div>
            
            <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible, usually within 24 hours.</p>
            
            <div class="message-copy">
              <div class="message-copy-title">&gt; Your message:</div>
              <div class="copy-subject"><strong>Subject:</strong> ${subject}</div>
              <div class="copy-text">${message}</div>
            </div>
            
            <div class="social-section">
              <div class="social-title">In the meantime, feel free to connect:</div>
              <div class="social-links">
                <a href="https://www.linkedin.com/in/ignacio-rodríguez-rulas/" target="_blank" class="social-link">🔗 LinkedIn</a>
                <a href="https://github.com/Ignaciofabian93" target="_blank" class="social-link">💻 GitHub</a>
                <a href="https://www.ekoru.cl" target="_blank" class="social-link">🌱 Visit Ekoru</a>
              </div>
            </div>
            
            <div class="signature">
              <p style="color: #94a3b8; margin-bottom: 8px;">Best regards,</p>
              <div class="signature-name">Ignacio Fabián Rodríguez Rulas</div>
              <div class="signature-title">Full-Stack Software Engineer</div>
            </div>
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
