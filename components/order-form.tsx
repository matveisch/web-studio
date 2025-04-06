"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
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
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h3 className="mb-2 text-xl font-medium">Order Received!</h3>
        <p className="mb-6 text-gray-500">
          Thanks for ordering your landing page. We&apos;ll be in touch within 1
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
      <div className="rounded-lg border bg-white p-6">
        <h2 className="mb-4 text-xl font-bold">Your Information</h2>
        <div className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-2">
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

      <div className="rounded-lg border bg-white p-6">
        <h2 className="mb-4 text-xl font-bold">Project Details</h2>
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

      <div className="rounded-lg border bg-white p-6">
        <h2 className="mb-4 text-xl font-bold">Payment</h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-yellow-100 bg-yellow-50 p-4">
            <h3 className="mb-2 font-medium">Payment Schedule:</h3>
            <ul className="list-disc space-y-1 pl-5 text-gray-600">
              <li>
                <strong>50% Deposit ($495)</strong> - Required upfront to begin
                the project
              </li>
              <li>
                <strong>50% Final Payment ($495)</strong> - Due upon your
                approval, before the page goes live
              </li>
            </ul>
          </div>

          <p className="text-gray-500">
            After submitting this form, we&apos;ll send you an invoice for the
            initial 50% deposit ($495). Once we receive your payment, we&apos;ll
            begin work on your landing page.
          </p>

          <div className="bg-primary/5 flex items-center rounded-lg p-4">
            <div className="mr-4">
              <div className="text-primary text-2xl font-bold">$990</div>
              <div className="text-sm text-gray-500">total project cost</div>
            </div>
            <div className="text-sm text-gray-500">
              Includes everything mentioned in the landing page package
            </div>
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
