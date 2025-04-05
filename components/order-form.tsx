"use client";

import Link from "next/link";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

export default function OrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-green-100 bg-green-50 p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h3 className="text-xl font-medium mb-2">Order Received!</h3>
        <p className="text-gray-500 mb-6">
          Thanks for ordering your landing page. We'll be in touch within 1
          business day to get started.
        </p>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-xl font-bold mb-4">Your Information</h2>
        <div className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="First name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Last name" required />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input id="phone" type="tel" placeholder="(555) 123-4567" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="company">Company/Business Name</Label>
            <Input id="company" placeholder="Your business name" required />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-xl font-bold mb-4">Project Details</h2>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="website">Current Website (if any)</Label>
            <Input
              id="website"
              type="url"
              placeholder="https://yourwebsite.com"
            />
          </div>

          <div className="grid gap-2">
            <Label>Landing Page Type</Label>
            <RadioGroup defaultValue="business">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="business" id="business" />
                <Label htmlFor="business" className="font-normal">
                  Business/Service
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="product" id="product" />
                <Label htmlFor="product" className="font-normal">
                  Product
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="event" id="event" />
                <Label htmlFor="event" className="font-normal">
                  Event
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other" className="font-normal">
                  Other
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">
              Brief Description of Your Business/Project
            </Label>
            <Textarea
              id="description"
              placeholder="Tell us a bit about your business and what you want to achieve with this landing page."
              className="min-h-[120px]"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="timeline">Desired Timeline</Label>
            <RadioGroup defaultValue="standard">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="standard" id="standard" />
                <Label htmlFor="standard" className="font-normal">
                  Standard (up to 3 weeks)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="rush" id="rush" />
                <Label htmlFor="rush" className="font-normal">
                  Rush (additional fee may apply)
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-xl font-bold mb-4">Payment</h2>
        <p className="text-gray-500 mb-4">
          After submitting this form, we'll send you an invoice for the $990
          payment. Payment will be due before we begin work on your landing
          page.
        </p>

        <div className="flex items-center p-4 bg-primary/5 rounded-lg">
          <div className="mr-4">
            <div className="text-2xl font-bold text-primary">$990</div>
            <div className="text-sm text-gray-500">one-time payment</div>
          </div>
          <div className="text-sm text-gray-500">
            Includes everything mentioned in the landing page package
          </div>
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Submit Order"}
      </Button>
    </form>
  );
}
