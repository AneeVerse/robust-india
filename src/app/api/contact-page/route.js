import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, organizationName, address, phoneNo, jobPosition, message, service } = await req.json();
    console.log('Received contact page submission:', { name, email, organizationName, address, phoneNo, jobPosition, message, service });

    // Validation
    if (!name || !email || !message) {
      return Response.json({ 
        success: false, 
        message: 'Name, email, and message are required fields!' 
      }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ 
        success: false, 
        message: 'Please enter a valid email address' 
      }, { status: 400 });
    }

    // Check if email environment variables are set
    if (!process.env.NEXT_PUBLIC_EMAIL_USER || !process.env.NEXT_PUBLIC_EMAIL_APP_PASSWORD || !process.env.NEXT_PUBLIC_EMAIL_RECEIVER) {
      console.log('Email environment variables not set, skipping email sending');
      console.log('Contact page submission received:', { name, email, organizationName, address, phoneNo, jobPosition, message, service });
      
      return Response.json({ 
        success: true, 
        message: 'Contact form submitted successfully! We will get back to you soon.' 
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Robust India Contact Page" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
      to: process.env.NEXT_PUBLIC_EMAIL_RECEIVER,
      subject: `New Contact Page Inquiry - ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: 'NoiGrotesk', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 16px; background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="background: linear-gradient(135deg, #6164F6 0%, #8B8FFF 100%); color: white; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
              <h1 style="margin: 0; font-size: 28px; font-weight: bold;">New Contact Page Inquiry</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Robust India Chemical Solutions</p>
            </div>
          </div>
          
          <div style="background-color: #f8fafc; padding: 24px; border-radius: 12px; margin-bottom: 24px; border-left: 4px solid #6164F6;">
            <h3 style="color: #1e40af; margin-top: 0; font-size: 20px; font-weight: bold;">Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 140px;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${name}</td>
              </tr>
              ${organizationName ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Organization:</td>
                <td style="padding: 8px 0; color: #1f2937;">${organizationName}</td>
              </tr>
              ` : ''}
              ${jobPosition ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Job Position:</td>
                <td style="padding: 8px 0; color: #1f2937;">${jobPosition}</td>
              </tr>
              ` : ''}
              ${address ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Address:</td>
                <td style="padding: 8px 0; color: #1f2937;">${address}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #6164F6; text-decoration: none;">${email}</a></td>
              </tr>
              ${phoneNo ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 8px 0; color: #1f2937;"><a href="tel:${phoneNo}" style="color: #6164F6; text-decoration: none;">${phoneNo}</a></td>
              </tr>
              ` : ''}
              ${service ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Service Interest:</td>
                <td style="padding: 8px 0; color: #1f2937;">
                  <span style="background: linear-gradient(135deg, #6164F6 0%, #8B8FFF 100%); color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">${service}</span>
                </td>
              </tr>
              ` : ''}
            </table>
          </div>
          
          <div style="background-color: #f8fafc; padding: 24px; border-radius: 12px; margin-bottom: 24px; border-left: 4px solid #10b981;">
            <h3 style="color: #065f46; margin-top: 0; font-size: 20px; font-weight: bold;">Message</h3>
            <div style="background-color: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%); padding: 20px; border-radius: 12px; margin-bottom: 24px;">
            <h4 style="color: #1e40af; margin-top: 0; font-size: 16px; font-weight: bold;">⚡ Next Steps</h4>
            <p style="margin-bottom: 0; color: #1e40af; font-weight: 500;">Please respond to this inquiry as soon as possible.</p>
            <div style="margin-top: 16px;">
              <a href="mailto:${email}" style="background: #6164F6; color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; margin-right: 8px;">✉️ Reply via Email</a>
              ${phoneNo ? `<a href="tel:${phoneNo}" style="background: #10b981; color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">📞 Call Now</a>` : ''}
            </div>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="margin-top: 20px; font-size: 12px; color: #6b7280; text-align: center;">
            This inquiry was submitted through the contact page on the Robust India website.<br>
            <strong>Robust India</strong> - Your trusted partner in chemical trade and logistics solutions.
          </p>
        </div>
      `,
      text: `
        New Contact Page Inquiry - Robust India
        
        Contact Details:
        Name: ${name}
        ${organizationName ? `Organization: ${organizationName}` : ''}
        ${jobPosition ? `Job Position: ${jobPosition}` : ''}
        ${address ? `Address: ${address}` : ''}
        Email: ${email}
        ${phoneNo ? `Phone: ${phoneNo}` : ''}
        ${service ? `Service Interest: ${service}` : ''}
        
        Message:
        ${message}
        
        Next Steps:
        Please respond to this inquiry as soon as possible.
        
        This inquiry was submitted through the contact page on the Robust India website.
        
        Robust India - Your trusted partner in chemical trade and logistics solutions.
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    // Send to Google Sheets (optional - you can add your Google Sheets integration here)
    try {
      // Add your Google Sheets integration here if needed
      // const sheetsResponse = await fetch('YOUR_GOOGLE_SHEETS_URL', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     formName: 'Contact Page - Robust India',
      //     name: name || '',
      //     organizationName: organizationName || '',
      //     jobPosition: jobPosition || '',
      //     address: address || '',
      //     email: email || '',
      //     phoneNo: phoneNo || '',
      //     service: service || '',
      //     message: message || ''
      //   }),
      // });
      console.log('Ready for Google Sheets integration if needed');
    } catch (sheetsError) {
      console.error('Google Sheets integration error:', sheetsError);
      // Continue execution even if sheets fails
    }

    return Response.json({ 
      success: true, 
      message: 'Contact form submitted successfully! We will get back to you soon.' 
    });

  } catch (error) {
    console.error('Contact page API error:', error);
    return Response.json({ 
      success: false, 
      message: 'Internal server error. Please try again or contact us directly.' 
    }, { status: 500 });
  }
} 