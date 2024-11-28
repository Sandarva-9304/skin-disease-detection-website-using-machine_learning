import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import axios from "axios"; // Use Axios for API calls

const EMAIL_SERVER_URL = process.env.NEXT_PUBLIC_EMAIL_SERVER_URL;
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.message) formErrors.message = "Message is required";
    if (!formData.email) formErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      formErrors.email = "Invalid email";

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Send form data to backend for email sending
    axios
      .post(`${EMAIL_SERVER_URL}/send-email`, formData)
      .then((response) => {
        setLoading(false);
        setSuccessMessage("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setErrors({});
      })
      .catch((error) => {
        setLoading(false);
        setSuccessMessage("Failed to send message, please try again.");
        console.error("Error sending email:", error);
      });
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-foreground">
      <div className="container mx-auto px-6 md:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl  text-white md:text-3xl lg:text-4xl font-bold">
              Contact Us
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Get in touch with our team for more information.
            </p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6 md:p-8 lg:p-10">
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <Label htmlFor="name" className="font-semibold">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email" className="font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <Label htmlFor="message" className="font-semibold">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Submit"}
              </Button>
            </form>
            {successMessage && (
              <p className="text-center mt-4 text-green-500">
                {successMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
