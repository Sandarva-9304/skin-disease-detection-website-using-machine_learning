const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000; // Server port

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST endpoint to send emails
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Example: Gmail
      auth: {
        user: "sandarvapodder09032004@gmail.com", // Replace with your Gmail address
        pass: "lsgiyzdjstarwkdj", // Replace with your Gmail password or app password
      },
    });

    // Email options
    const mailOptions1 = {
      from: `sandarvapodder09032004@gmail.com`, // Sender's email
      to: `${email}`, // Replace with your destination email
      subject: "Contact Form Response",
      text: `Thank you for contacting us!`,
    };

    const mailOptions2 = {
      from: `${email}`, // Sender's email
      to: `sandarvapodder09032004@gmail.com`, // Replace with your destination email
      subject: "Contact Us",
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
