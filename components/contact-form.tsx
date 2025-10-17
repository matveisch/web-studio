"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

interface Dictionary {
  contactForm: {
    success: {
      headline: string;
      message: string;
    };
    error: {
      apiFallback: string;
      unexpected: string;
    };
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: {
      default: string;
      sending: string;
    };
  };
}

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (formData.website) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData, null, 2),
      });

      if (!response.ok) {
        const errorData = await response.json();
        // Use dictionary for the API fallback error message
        throw new Error(
          errorData.message || dict.contactForm.error.apiFallback,
        );
      }

      setIsSubmitted(true);
      // Optional: Clear the form on successful submission
      setFormData({ name: "", email: "", message: "", website: "" });
    } catch (err) {
      // Use dictionary for the unexpected error message
      setError(
        err instanceof Error ? err.message : dict.contactForm.error.unexpected,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-green-100 bg-green-50 p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-green-100 p-2">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
        </div>
        {/* Use dictionary for success headline */}
        <h3 className="mb-2 text-lg font-medium">
          {dict.contactForm.success.headline}
        </h3>
        {/* Use dictionary for success message */}
        <p className="text-gray-500">{dict.contactForm.success.message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="website"
        id="website"
        className="hidden"
        autoComplete="off"
        tabIndex={-1}
        value={formData.website || ""}
        onChange={handleChange}
      />
      {error && (
        <div className="flex items-start rounded-lg border border-red-100 bg-red-50 p-4 text-sm">
          <AlertCircle className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-red-600" />
          {/* Error message comes from state, which was set using dictionary or API error */}
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {/* Name Field */}
      <div className="grid gap-2">
        {/* Use dictionary for label */}
        <Label htmlFor="name">{dict.contactForm.nameLabel}</Label>
        {/* Use dictionary for placeholder */}
        <Input
          id="name"
          placeholder={dict.contactForm.namePlaceholder}
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      {/* Email Field */}
      <div className="grid gap-2">
        {/* Use dictionary for label */}
        <Label htmlFor="email">{dict.contactForm.emailLabel}</Label>
        {/* Use dictionary for placeholder */}
        <Input
          id="email"
          type="email"
          placeholder={dict.contactForm.emailPlaceholder}
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* Message Field */}
      <div className="grid gap-2">
        {/* Use dictionary for label */}
        <Label htmlFor="message">{dict.contactForm.messageLabel}</Label>
        {/* Use dictionary for placeholder */}
        <Textarea
          id="message"
          placeholder={dict.contactForm.messagePlaceholder}
          className="min-h-[120px]"
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting
          ? dict.contactForm.submitButton.sending // Use dictionary for sending text
          : dict.contactForm.submitButton.default}{" "}
        {/* Use dictionary for default text */}
      </Button>
    </form>
  );
}
