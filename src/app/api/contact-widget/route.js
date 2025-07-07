import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, organization, email, phone, contactType, source } = await req.json();
    console.log('Received contact widget submission:', { name, organization, email, phone, contactType, source });

    // Validation
    if (!name || !email || !phone || !contactType) {
      return Response.json({ 
        success: false, 
        message: 'All required fields must be filled!' 
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
      console.log('Contact widget submission received:', { name, organization, email, phone, contactType, source });
      
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
      from: `"Robust India Contact Widget" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
      to: process.env.NEXT_PUBLIC_EMAIL_RECEIVER,
      subject: `New Contact Widget Inquiry - ${contactType}`,
      html: `
        <div style="font-family: 'NoiGrotesk', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 16px; background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="background: linear-gradient(135deg, #6164F6 0%, #8B8FFF 100%); color: white; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
              <h1 style="margin: 0; font-size: 28px; font-weight: bold;">New Contact Widget Inquiry</h1>
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
              ${organization ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Organization:</td>
                <td style="padding: 8px 0; color: #1f2937;">${organization}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #6164F6; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 8px 0; color: #1f2937;"><a href="tel:${phone}" style="color: #6164F6; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Preferred Contact:</td>
                <td style="padding: 8px 0; color: #1f2937;">
                  <span style="background: linear-gradient(135deg, #6164F6 0%, #8B8FFF 100%); color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">${contactType}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Source:</td>
                <td style="padding: 8px 0; color: #6b7280;">${source}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%); padding: 20px; border-radius: 12px; margin-bottom: 24px;">
            <h4 style="color: #1e40af; margin-top: 0; font-size: 16px; font-weight: bold;">⚡ Next Steps</h4>
            <p style="margin-bottom: 0; color: #1e40af; font-weight: 500;">Please contact this lead through their preferred method: <strong>${contactType}</strong></p>
            <div style="margin-top: 16px;">
              ${contactType === 'WhatsApp' ? `<a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="background: #25D366; color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">📱 Contact via WhatsApp</a>` : ''}
              ${contactType === 'Phone' ? `<a href="tel:${phone}" style="background: #6164F6; color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">📞 Call Now</a>` : ''}
              ${contactType === 'Email' ? `<a href="mailto:${email}" style="background: #6164F6; color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">✉️ Send Email</a>` : ''}
            </div>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="margin-top: 20px; font-size: 12px; color: #6b7280; text-align: center;">
            This inquiry was submitted through the contact widget on the Robust India website.<br>
            <strong>Robust India</strong> - Your trusted partner in chemical trade and logistics solutions.
          </p>
        </div>
      `,
      text: `
        New Contact Widget Inquiry - Robust India
        
        Contact Details:
        Name: ${name}
        ${organization ? `Organization: ${organization}` : ''}
        Email: ${email}
        Phone: ${phone}
        Preferred Contact Method: ${contactType}
        Source: ${source}
        
        Next Steps:
        Please contact this lead through their preferred method: ${contactType}
        
        This inquiry was submitted through the contact widget on the Robust India website.
        
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
      //     formName: 'Contact Widget - Robust India',
      //     name: name || '',
      //     organization: organization || '',
      //     email: email || '',
      //     phone: phone || '',
      //     contactType: contactType || '',
      //     source: source || ''
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
    console.error('Contact widget API error:', error);
    return Response.json({ 
      success: false, 
      message: 'Internal server error. Please try again or contact us directly.' 
    }, { status: 500 });
  }
} 