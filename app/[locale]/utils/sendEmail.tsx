// utils/email.ts
import emailjs from "emailjs-com";

const sendEmail = async (to: string, subject: string, message: string) => {

  try {
    const response = await emailjs.send(
      "service_2bgqy8c" || "",
      "template_ojwnfta" || "",
      {
        to_email: to,
        subject,
        message,
      },
      "uMWcSS2GhcXXVlBVU" || ""
    );

    console.log("Email sent:", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
