"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
        throw new Error(errorData.message || "Failed to send message");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred",
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
        <h3 className="mb-2 text-lg font-medium">Message Sent!</h3>
        <p className="text-gray-500">
          Thanks for reaching out. We'll get back to you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="flex items-start rounded-lg border border-red-100 bg-red-50 p-4 text-sm">
          <AlertCircle className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-red-600" />
          <p className="text-red-800">{error}</p>
        </div>
      )}

      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Your name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Your Question</Label>
        <Textarea
          id="message"
          placeholder="What would you like to know about our landing page package?"
          className="min-h-[120px]"
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
