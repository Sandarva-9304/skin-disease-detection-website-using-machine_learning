require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// const PORT = process.env.PORT || 5000; // Server port

// Middleware
const corsOptions = {
  origin: process.env.FRONTEND_URL, // Restrict to your frontend's URL
  methods: ["POST"], // Only allow POST requests
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

// POST endpoint to send emails
app.get("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Example: Gmail
      auth: {
        user: process.env.EMAIL_USER, // Environment variable for email
        pass: process.env.EMAIL_PASS, // Environment variable for password
      },
    });

    // Email options
    const mailOptions1 = {
      from: process.env.EMAIL_USER, // Sender's email
      to: `${email}`, // Replace with your destination email
      subject: "Contact Form Response",
      text: `Thank you for contacting us!`,
    };

    const mailOptions2 = {
      from: process.env.EMAIL_USER, // Sender's email
      to: process.env.EMAIL_USER, // Replace with your destination email
      subject: "New Contact Form Submission",
      text: `Name:- ${name}\nEmail:- ${email}\n\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions1);
    await transporter.sendMail(mailOptions2);
    // Success response
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

module.exports = app; // Start the server
