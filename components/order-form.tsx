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

interface Dictionary {
  orderForm: {
    success: {
      headline: string;
      message: string;
      returnHomeButton: string;
    };
    yourInfo: {
      title: string;
      firstNameLabel: string;
      firstNamePlaceholder: string;
      lastNameLabel: string;
      lastNamePlaceholder: string;
      emailLabel: string;
      phoneLabel: string;
      companyLabel: string;
      companyPlaceholder: string;
    };
    projectDetails: {
      title: string;
      websiteLabel: string;
      typeLabel: string;
      typeOptions: {
        business: string;
        product: string;
        event: string;
        other: string;
      };
      descriptionLabel: string;
      descriptionPlaceholder: string;
      timelineLabel: string;
      timelineOptions: {
        standard: string;
        rush: string;
      };
    };
    payment: {
      title: string;
      scheduleHeadline: string;
      scheduleItems: string[];
      submissionText: string;
      totalCostLabel: string;
      includesText: string;
      priceLabel: string;
    };
    submitButton: {
      processing: string;
      default: string;
    };
  };
  layout: {
    // Need layout for the Return Home link text
    nav: {
      home: string; // Text for "Home" link
      // ... other nav items if needed
    };
    // ... other layout sections if needed
  };
}

export default function OrderForm({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: "en" | "he";
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // In a real app, you'd handle the actual submission here
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-green-100 bg-green-50 p-8 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle className="h-8 w-8 text-green-600" />
            {/* Icon kept as-is */}
          </div>
        </div>
        <h3 className="mb-2 text-xl font-medium">
          {dict.orderForm.success.headline}
        </h3>
        <p className="mb-6 text-gray-500">
          {/* Use dictionary - &apos; handled in JSON */}
          {dict.orderForm.success.message}
        </p>
        <Button asChild>
          {/* Reuse layout Home text if appropriate, or use a specific key */}
          <Link href="/">{dict.layout.nav.home}</Link>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="rounded-lg border bg-white p-6">
        <h2 className="mb-4 text-xl font-bold">
          {dict.orderForm.yourInfo.title}
        </h2>
        <div className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="firstName">
                {dict.orderForm.yourInfo.firstNameLabel}
              </Label>
              <Input
                id="firstName"
                placeholder={dict.orderForm.yourInfo.firstNamePlaceholder}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">
                {dict.orderForm.yourInfo.lastNameLabel}
              </Label>
              <Input
                id="lastName"
                placeholder={dict.orderForm.yourInfo.lastNamePlaceholder}
                required
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">{dict.orderForm.yourInfo.emailLabel}</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com" // Placeholder email kept as-is
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">{dict.orderForm.yourInfo.phoneLabel}</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 123-4567"
              className="rtl:text-right"
            />
            {/* Placeholder phone kept as-is */}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="company">
              {dict.orderForm.yourInfo.companyLabel}
            </Label>
            <Input
              id="company"
              placeholder={dict.orderForm.yourInfo.companyPlaceholder}
              required
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-white p-6">
        <h2 className="mb-4 text-xl font-bold">
          {dict.orderForm.projectDetails.title}
        </h2>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="website">
              {dict.orderForm.projectDetails.websiteLabel}
            </Label>
            <Input
              id="website"
              type="url"
              placeholder="https://yourwebsite.com" // Placeholder URL kept as-is
            />
          </div>

          <div className="grid gap-2">
            <Label>{dict.orderForm.projectDetails.typeLabel}</Label>
            <RadioGroup
              defaultValue="business"
              dir={lang === "he" ? "rtl" : "ltr"}
            >
              {/* Map over type options from dictionary */}
              {Object.keys(dict.orderForm.projectDetails.typeOptions).map(
                (key) => {
                  // Type assertion for safety
                  const optionKey =
                    key as keyof typeof dict.orderForm.projectDetails.typeOptions;
                  const label =
                    dict.orderForm.projectDetails.typeOptions[optionKey];
                  return (
                    <div
                      key={optionKey}
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem value={optionKey} id={optionKey} />
                      <Label htmlFor={optionKey} className="font-normal">
                        {label}
                      </Label>
                    </div>
                  );
                },
              )}
            </RadioGroup>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">
              {dict.orderForm.projectDetails.descriptionLabel}
            </Label>
            <Textarea
              id="description"
              placeholder={dict.orderForm.projectDetails.descriptionPlaceholder}
              className="min-h-[120px]"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="timeline">
              {dict.orderForm.projectDetails.timelineLabel}
            </Label>
            <RadioGroup
              defaultValue="standard"
              dir={lang === "he" ? "rtl" : "ltr"}
            >
              {/* Map over timeline options from dictionary */}
              {Object.keys(dict.orderForm.projectDetails.timelineOptions).map(
                (key) => {
                  // Type assertion for safety
                  const optionKey =
                    key as keyof typeof dict.orderForm.projectDetails.timelineOptions;
                  const label =
                    dict.orderForm.projectDetails.timelineOptions[optionKey];
                  return (
                    <div
                      key={optionKey}
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem value={optionKey} id={optionKey} />
                      <Label htmlFor={optionKey} className="font-normal">
                        {label}
                      </Label>
                    </div>
                  );
                },
              )}
            </RadioGroup>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-white p-6">
        <h2 className="mb-4 text-xl font-bold">
          {dict.orderForm.payment.title}
        </h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-yellow-100 bg-yellow-50 p-4">
            <h3 className="mb-2 font-medium">
              {dict.orderForm.payment.scheduleHeadline}
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-gray-600 rtl:pr-5 rtl:pl-0">
              {/* Map over payment schedule items from dictionary */}
              {dict.orderForm.payment.scheduleItems.map((item, index) => (
                // Using dangerouslySetInnerHTML as items contain HTML strong tags
                // Ensure your CMS or source for these strings properly sanitizes HTML
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>

          <p className="text-gray-500">
            {/* Use dictionary - apostrophes and price ($495) handled in JSON */}
            {dict.orderForm.payment.submissionText}
          </p>

          <div className="bg-primary/5 flex items-center rounded-lg p-4">
            <div className="mr-4 rtl:mr-0 rtl:ml-4">
              <div className="text-primary text-2xl font-bold">
                {dict.orderForm.payment.priceLabel}
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {dict.orderForm.payment.includesText}
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
        {/* Use dictionary for button text based on state */}
        {isSubmitting
          ? dict.orderForm.submitButton.processing
          : dict.orderForm.submitButton.default}
      </Button>
    </form>
  );
}
